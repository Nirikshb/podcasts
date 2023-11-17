import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputComponent from '../Common/Input';
import FileInput from '../Common/Input/FileInput';
import Button from '../Common/Button';
import { toast } from 'react-toastify'; // Imported toast for displaying messages

const CreatePodcastForm = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [displayImage, setDisplayImage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (title && desc && displayImage) {
            // Logic for handling form submission when all required fields are filled
            // Missing logic for 'bannerImage' handling
        } else {
            toast.error('Please Enter All Values'); // Notify if any field is missing
        }
    };

    const displayImageHandle = (file) => {
        setDisplayImage(file);
    };

    const bannerImageHandle = (file) => {
        // Missing logic for handling 'bannerImage'
    };

    return (
        <div>
            <InputComponent
                state={title}
                setState={setTitle}
                placeholder="Title"
                type="text"
                required={true}
            />

            <InputComponent
                state={desc}
                setState={setDesc}
                placeholder="Description"
                type="text"
                required={true}
            />

            <InputComponent
                state={displayImage}
                setState={setDisplayImage}
                placeholder="Display Image"
                type="file"
                required={true}
            />

            {/* FileInput for banner image */}
            <FileInput
                accept={"image/*"}
                id="banner-image-input"
                fileHandleFnc={bannerImageHandle}
            />

            {/* Button for form submission */}
            <Button
                text={loading ? 'Loading...' : 'Create a Podcast'}
                disabled={loading}
                onClick={handleSubmit}
            />
        </div>
    );
};

export default CreatePodcastForm;
