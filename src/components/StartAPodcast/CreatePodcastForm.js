import React, { useState } from 'react'

const CreatePodcastForm = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [displayImage, setDisplayImage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <div>CreatePodcastForm</div>
  )
}

export default CreatePodcastForm;