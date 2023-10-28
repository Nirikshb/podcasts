import React, { useState } from 'react';
import InputComponent from '../Common/Input';

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

    return (
        <div>
            <div>CreatePodcastForm
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
            </div>
        </div>
    );
};

export default CreatePodcastForm;
