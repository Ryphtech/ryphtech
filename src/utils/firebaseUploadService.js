import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { storage } from './firebaseClient';

export async function uploadFile(file, bucket = 'images', folder = '') {
  try {
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    console.log('Uploading file:', fileName);
    
    // Create a reference to the file
    const storageRef = ref(storage, `${bucket}/${fileName}`);
    
    // Upload file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);
    
    console.log('Upload successful:', snapshot);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Download URL:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function deleteFile(url, bucket = 'images') {
  try {
    // Extract file path from URL
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    
    // Find the bucket name and get everything after it
    const bucketIndex = pathParts.findIndex(part => part === bucket);
    if (bucketIndex === -1) {
      throw new Error('Could not find bucket in URL');
    }
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    console.log('Deleting file:', filePath);
    
    // Create a reference to the file
    const fileRef = ref(storage, `${bucket}/${filePath}`);
    
    // Delete the file
    await deleteObject(fileRef);
    
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
