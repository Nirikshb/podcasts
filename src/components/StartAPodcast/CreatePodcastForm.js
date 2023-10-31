import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux'; // Import useDispatch
import InputComponent from '../Common/Input';
import FileInput from '../Common/Input/FileInput';

const CreatePodcastForm = () => {
    // State variables to manage form inputs and other stateful data
    const [title, setTitle] = useState(''); // State for podcast title
    const [desc, setDesc] = useState(''); // State for podcast description
    const [displayImage, setDisplayImage] = useState(''); // State for podcast image
    const [loading, setLoading] = useState(false); // State for loading indicator

    // React Router's useNavigate hook for navigation
    const navigate = useNavigate();

    // Redux's useDispatch hook for dispatching actions
    const dispatch = useDispatch();

  const handleSubmit = () =>{
    toast.success("Handling Form");
  }

  const displayImageHandle = (file) =>{
    setDisplayImage(file);
  }

  
  const bannerImageHandle = (file) =>{
    setBannerImage(file);
  }


    return (
        <>
            {/* CreatePodcastForm */}
            <div>
                {/* InputComponent for podcast title */}
                <InputComponent
                    state={title}
                    setState={setTitle}
                    placeholder="Title"
                    type="text"
                    required={true}
                />

                {/* InputComponent for podcast description */}
                <InputComponent
                    state={desc}
                    setState={setDesc}
                    placeholder="Description"
                    type="text"
                    required={true}
                />

                    {/* InputComponent for podcast description */}
                    <InputComponent
                    state={displayImage}
                    setState={setDisplayImage}
                    placeholder="Display Image"
                    type="file"
                    required={true}
                />

            <FileInput
            accept={"image/*"}
            id="banner-image-input"
            fileHandleFnc={bannerImageHandle}
            />

            <Button text={loading ? "Loading..." : "Create a Podcast"} 
            disabled={loading} 
            onclick={handleSubmit} />
            </div>
        </>
    );
};

export default CreatePodcastForm;
