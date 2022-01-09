import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
const firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  storageBucket: '<your-storage-bucket-url>'
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
function App() {
  const [file, setFile] = useState(null);
  const handleUpload = () => {
    const imageRef = ref(storage, "images/" + file.name);
    uploadBytes(imageRef, file).then((snapshot) => {
      console.log(snapshot);
      alert("Upload Success !");
    });
  };
  return (
    <div className="App">
      <input
        type="file"
        id="image"
        onChange={(e) => setFile(e.target.files[0])}
        multiple={false}
        accept="image/*"
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
