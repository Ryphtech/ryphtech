import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where 
} from 'firebase/firestore';
import { db } from './firebaseClient';

export async function listRows(table, { select = '*', orderBy: orderByField = 'created_at', ascending = false } = {}) {
  try {
    const tableRef = collection(db, table);
    let q = query(tableRef);
    
    // Add ordering if specified
    if (orderByField) {
      q = query(tableRef, orderBy(orderByField, ascending ? 'asc' : 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    const data = [];
    
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
}

export async function getRowById(table, id, idColumn = 'id') {
  try {
    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Document not found');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    throw error;
  }
}

export async function createRow(table, values) {
  try {
    // Add timestamp
    const dataWithTimestamp = {
      ...values,
      created_at: new Date(),
      updated_at: new Date()
    };
    
    const docRef = await addDoc(collection(db, table), dataWithTimestamp);
    const docSnap = await getDoc(docRef);
    
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
}

export async function updateRow(table, id, values, idColumn = 'id') {
  try {
    const docRef = doc(db, table, id);
    const dataWithTimestamp = {
      ...values,
      updated_at: new Date()
    };
    
    await updateDoc(docRef, dataWithTimestamp);
    const docSnap = await getDoc(docRef);
    
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
}

export async function deleteRow(table, id, idColumn = 'id') {
  try {
    const docRef = doc(db, table, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
}

export default {
  listRows,
  getRowById,
  createRow,
  updateRow,
  deleteRow,
};
