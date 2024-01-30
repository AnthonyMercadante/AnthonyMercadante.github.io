import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download'; // Material UI Download Icon
import Button from '@mui/material/Button'; // Material UI Button
import LandscapeOverlay from '../../components/LandscapeOverlay';

const EcoChallenger = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center bg-black text-white py-6">
            <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white">
                <ArrowBackIcon />
            </button>

            <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br><br></br>
                    Eco Challenge Tracker: Community Engagement in Environmental Cleanup
                </h1>

                <iframe
                    className="w-full md:max-w-3xl mx-auto aspect-video mb-6"
                    src="https://www.youtube.com/embed/6fOtOiw-vnE?si=19EodNK7KmocSbvN" // Replace with your actual video link
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <a href="https://drive.google.com/file/d/1Lb1Nvqy_wcp7yvRpE-myXIyjVrjK3Iw3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" startIcon={<DownloadIcon />} sx={{ backgroundColor: '#333', marginBottom: '2rem' }}>
                        Download App
                    </Button>
                </a>

                <div className="md:flex md:flex-row md:justify-center">
                    <div className="md:w-1/2 text-left px-4 mb-6">
                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            The <span className="text-green-400 font-semibold">Eco Challenge Tracker</span> app was a fun prrof of concept project designed to empower communities in environmental cleanup initiatives. Users could capture and post geo-tagged photos of litter in their surroundings, contributing to a communal effort to identify and resolve local environmental challenges.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            By integrating <span className="text-blue-400 font-semibold">Google Maps</span> with user-generated content, the app provided a dynamic and interactive platform for users to find and participate in local clean-up challenges.
                        </p>
                    </div>

                    <div className="md:w-1/2 text-left px-4">
                        <h2 className="text-3xl font-semibold mb-6 text-gradient">
                            Engaging and User-Friendly Interface
                        </h2>

                        <p className="text-lg md:text-xl leading-relaxed mb-6">
                            A key feature was the app's <span className="text-indigo-400 font-semibold">user-friendly interface</span>, which makes it easy for users of all ages to participate in environmental challenges. The app's design encouraged easy adoption and active community engagement.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed">
                            This project showcased my technical skills in React Native and Expo SDK but also my commitment to leveraging technology for <span className="text-yellow-500 font-semibold">social good</span>. It demonstrates the potential of mobile applications to drive meaningful community action and environmental awareness.
                        </p>
                    </div>
                </div>
            </div>
            <LandscapeOverlay />
        </div>
    );
};

export default EcoChallenger;
