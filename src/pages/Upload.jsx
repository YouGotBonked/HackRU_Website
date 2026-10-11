import { Link } from 'react-router';
import axios from 'axios';
import { ChangeEvent, useState, useRef, React } from 'react';
import useSkinVerify from '../components/API.jsx';
import './Upload.css'



const Upload = () => {
    const classNames = {
        akiec: "Actinic Keratoses and Intraepithelial Carcinoma",
        bcc: "Basal Cell Carcinoma",
        bkl: "Benign Keratosis-like Lesions",
        df: "Dermatofibroma",
        mel: "Melanoma",
        nv: "Melanocytic Nevi",
        vasc: "Vascular Lesions",
    };


    const skinVerify = useSkinVerify();
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [results, setResults] = useState(null);
    //const [results, setResults] = useState(null);
    const onFileChange = (event) => {
        const temp = event.target.files[0];
        if(temp) {
            if(temp.type.includes('image')) {
                setSelectedFile(event.target.files[0]);

            } else {
                alert("Incorrect File Type, Please Upload an Image");
                event.target.value = null;
                setSelectedFile(null);
            }
        }
    };
    const onFileUpload = async () => {
        setResults(await skinVerify(selectedFile));
        setFileUploaded(true);
        console.log(results);
    };
    const fileData = () => {
        if (!results) return null;

        return (
            <div>
                <h2>Result</h2>
                <p>Predicted type: {classNames[results.top_class]} ({results.top_class})</p>

                <p>Confidence: {(results.prob * 100).toFixed(1)}%</p>
                <p><em>{results.disclaimer}</em></p>
            </div>
        );
    };
    return (
        <div className="fade-in-top container">
            <div className="guide">
                <h1>Before You Upload:</h1>
                <p>1. Make sure the photo is as clear as possible.</p>
                <p>2. We recommend you provide a dermographic photo, otherwise results may vary</p>
                <p>3. Upload your photo and see your results!</p>
            </div>
            <h1 className="text-center">Upload Your Cells</h1>
            <div className="upload-actions">
                <input type="file" onChange={onFileChange} className="minimal-input" />
                <button onClick={onFileUpload} className="minimal-btn">Upload!</button>
            </div>
            <div className="file-data-wrapper">
                {fileUploaded && fileData()}
            </div>
        </div>
    );

};

export default Upload;