<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7FYEtl8FO_st-_2yFSPgenJnr2nt5vmg",
  authDomain: "deskvishu-4b938.firebaseapp.com",
  projectId: "deskvishu-4b938",
  storageBucket: "deskvishu-4b938.appspot.com",
  messagingSenderId: "421027370526",
  appId: "1:421027370526:web:18bac067ab10da3d24800f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
</script>
