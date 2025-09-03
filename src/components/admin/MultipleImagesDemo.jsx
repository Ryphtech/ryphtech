import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Image as ImageIcon } from 'lucide-react';

const MultipleImagesDemo = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  ]);

  const addImage = () => {
    const newImage = `https://images.unsplash.com/photo-${Math.random().toString(36).substr(2, 9)}?w=400&h=300&fit=crop`;
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const reorderImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Multiple Images Demo
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This demonstrates how to manage multiple images for a project. 
          You can add, remove, and reorder images.
        </p>
      </div>

      {/* Add Image Button */}
      <div className="mb-4">
        <button
          onClick={addImage}
          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Image
        </button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative group"
          >
            <img
              src={image}
              alt={`Demo image ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-dark-600"
            />
            
            {/* Overlay with controls */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                <button
                  onClick={() => removeImage(index)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Image number */}
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {index + 1}
            </div>
            
            {/* Drag handle */}
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded cursor-move">
              <ImageIcon className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">How to use:</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• Click "Add Image" to add new images</li>
          <li>• Hover over images to see remove button</li>
          <li>• Images are automatically numbered</li>
          <li>• Use drag and drop to reorder (coming soon)</li>
        </ul>
      </div>

      {/* JSON Output */}
      <div className="mt-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">JSON Output:</h4>
        <pre className="bg-gray-100 dark:bg-dark-700 p-3 rounded-lg text-xs overflow-x-auto">
          {JSON.stringify({ additional_images: images }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default MultipleImagesDemo;
