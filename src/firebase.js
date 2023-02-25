import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8DfbHqoIG062DLU2BcjbjYGaQEXPKYNs',
  authDomain: 'haka-5f01a.firebaseapp.com',
  projectId: 'haka-5f01a',
  storageBucket: 'haka-5f01a.appspot.com',
  messagingSenderId: '691076692741',
  appId: '1:691076692741:web:0bc232f67eb681cbf7956c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
