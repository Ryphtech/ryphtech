import supabase from './supabaseClient';

export async function uploadFile(file, bucket = 'images', folder = '') {
  try {
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    console.log('Uploading file:', fileName);
    
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (error) {
      console.error('Upload error:', error);
      throw error;
    }

    console.log('Upload successful:', data);

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    console.log('Public URL:', publicUrl);
    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function deleteFile(url, bucket = 'images') {
  try {
    // Extract file path from URL more robustly
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    
    // Find the bucket name and get everything after it
    const bucketIndex = pathParts.findIndex(part => part === bucket);
    if (bucketIndex === -1) {
      throw new Error('Could not find bucket in URL');
    }
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    console.log('Deleting file:', filePath);
    
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) {
      console.error('Delete error:', error);
      throw error;
    }

    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

export default {
  uploadFile,
  deleteFile
};
