import React,{ useState} from 'react'
import { Button, Input } from '@material-ui/core'
import './ImageUpload.css'
import { db, storage } from './firebase';
const ImageUpload = () => {
    const [caption, setCaption] = useState('');
    const [progress, setprogress] = useState(0);
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setprogress(progress);
            }
        )
    }
    return (
        <div>
            {/* Caption Input*/}
            {/* File Picker */}
            {/* Post button */}
            <Input onChange={(e) => setCaption(e.target.value)} type="text" placeholder='Enter a caption...' value={caption}/>
            <Input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
