// REACT
import { useState } from "react";

// UUID
import { v4 as uuidV4 } from "uuid";

// FIREBASE
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

// REACT BOOTSTRAP
import { Button } from "react-bootstrap"

const FileUploader = () => {

    const [ file, setFile ] = useState(null);

    const uploadFile = async (e) => {
        e.preventDefault();
        console.log(file);
        if (!file) return;

        const fileFolderRef = ref(storage, `imageFolder/${file.name + "_" + uuidV4()}`);
        try{
            await uploadBytes(fileFolderRef, file);
            alert("Uploaded Success");
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input type="file" name="" id="" onChange={(e) => setFile(e.target.files[0])} />
            <Button variant="primary" onClick={(e) => uploadFile(e)} >Upload File</Button>
        </div>
    )
}

export default FileUploader