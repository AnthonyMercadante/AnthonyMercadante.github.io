import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image1 from '../../assets/images/beingInterviewed.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import PreloadImages from '../../components/PreloadImages';

const AircraftIdentifierAI = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <PreloadImages>
            <div className="flex flex-col items-center bg-black text-white py-6">
                <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white">
                    <ArrowBackIcon />
                </button>

                <div className="container mx-auto px-1 lg:px-30 text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br>
                        Using <span className="text-blue-500">Machine Learning</span> for Historical Aircraft Identification
                    </h1>

                    <div className="md:flex md:flex-row md:justify-center">
                        <div className="md:w-1/3 text-left px-10 mb-6">
                            <iframe
                                className="w-full aspect-video mb-6"
                                src="https://www.youtube.com/embed/eLWxkoEQQEM?si=Xs98ybDqlvF4ecn6"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Our applied research team, in a collaboration with the <span className="text-blue-400">National Air Force Museum of Canada</span>, used <span className="font-bold">AI</span> to identify aircraft from historical photographs.
                            </p>

                            <img src={Image1} alt="Stephen Adams Interview" className="w-1/2 md:w-1/2 mx-auto h-auto shadow-lg my-4" />
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                It was an honor to represent our team and discuss the project's intricacies on CHCH News, emphasizing the practical, hands-on skills gained through our educational approach.
                            </p>
                        </div>

                        <div className="md:w-2/3 text-left px-1">
                            {/* Embedded video of the application demo */}
                            <iframe
                                width="100%"
                                height="auto"
                                src="https://www.youtube.com/embed/L8QHCNwK01g?si=K1i3XGflU49yBJ4m"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="aspect-video"
                            ></iframe>

                            <h2 className="text-3xl font-semibold mb-6 text-gradient">
                                Powering <span className="text-blue-500">AI</span> with Python Libraries and Advanced Model Training
                            </h2>

                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Our project leveraged an advanced suite of <span className="font-bold text-blue-400">Python libraries</span>, including
                                <span className="font-semibold text-green-300"> TensorFlow</span> for deep learning algorithms,
                                <span className="font-semibold text-red-300"> OpenCV</span> for image processing tasks,
                                <span className="font-semibold text-yellow-300"> PyTorch</span> for neural network training,
                                <span className="font-semibold text-purple-300"> numpy</span> for high-performance scientific computing, and
                                <span className="font-semibold text-pink-300"> pandas</span> for data manipulation and analysis.
                                This technological stack has been instrumental in handling the complexities of processing vast datasets of historical aircraft images, enabling us to train our AI models with unprecedented <span className="font-bold text-indigo-500">precision</span> and <span className="font-bold text-indigo-500">efficiency</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <LandscapeOverlay />
            </div>
        </PreloadImages>
    );
};

export default AircraftIdentifierAI;
