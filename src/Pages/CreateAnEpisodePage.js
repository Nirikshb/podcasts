import React, { useState } from "react";
import Header from "../components/Common/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function CreateAnEpisodePage() {
    
    const [title, setTitle]= useState("");
    const [desc, setDesc] = useState("");
    const [displayImage, setDisplayImage]= useState();
    const [bannerImage, setBannerImage]= useState();

    const [loading, setLoading] =useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    
    return (
        <div>
            <Header />
        </div>
    );
}

export default CreateAnEpisodePage;