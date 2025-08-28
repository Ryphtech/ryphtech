import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadFile } from '../../utils/uploadService';

export default function FileUpload({ 
  onUpload, 
  currentImage = null, 
  onRemove,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB
  className = ""
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFile = async (file) => {
    setError('');
    console.log('Handling file:', file.name, file.size, file.type);
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size
    if (file.size > maxSize) {
      setError(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    setIsUploading(true);
    try {
      console.log('Starting upload...');
      const url = await uploadFile(file, 'images', 'team');
      console.log('Upload completed, URL:', url);
      onUpload(url);
    } catch (error) {
      console.error('Upload error in component:', error);
      setError(`Failed to upload image: ${error.message || 'Please try again.'}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      
      {currentImage ? (
        <div className="relative">
          <img
            src={currentImage}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            dragActive 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          {isUploading ? (
            <div className="space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
              <p className="text-sm text-gray-600">Uploading...</p>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="w-8 h-8 text-gray-400 mx-auto" />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}
    </div>
  );
}
