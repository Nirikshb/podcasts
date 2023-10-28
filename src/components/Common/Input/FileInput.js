import React, { useState } from 'react';

const FileInput = ({ accept, id, fileHandleFnc }) => {
    // State to track whether a file has been selected
    const [fileSelected, setFileSelected] = useState(false);

    // Function to handle the file input change
    const onChange = (e) => {
        console.log(e.target.files);
        // Update the state with the name of the selected file
        setFileSelected(e.target.files[0].name);
        fileHandleFnc(e.target.files[0]);
    };

    return (
        <>
            <label htmlFor={id} className='custom-input'>
                {fileSelected ? `The File ${fileSelected} was selected` 
                : "Import Image"}
            </label>
            
            <input
                type='file'
                accept={accept}
                id={id}
                style={{ display: 'none' }} // Hide the input element
                onChange={onChange} // Call the onChange function when a file is selected
            />
        </>
    );
}

export default FileInput;
