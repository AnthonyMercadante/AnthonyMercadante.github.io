import React from 'react';
import coverPhoto from '../../assets/images/coverfinal.jpg'; 

const Music = () => {
    return (
        <div className="bg-black flex flex-col items-center justify-center text-white p-5">
            <div className="w-full max-w-xs md:max-w-lg lg:max-w-4xl px-4 py-4">
                {/* Title for SoundCloud Embed */}
                <h2 className="text-xl md:text-2xl text-center mb-4">Latest DJ Mix</h2>
                <iframe 
                    title="SoundCloud Player" 
                    width="100%" 
                    height="300" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1798062109&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                    className="shadow-lg rounded-lg">
                </iframe>
                <div className="text-xs mt-2 text-gray-400 text-center">
                    <a href="https://soundcloud.com/raethexn" title="Raethexn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        Raethexn
                    </a> · 
                    <a href="https://soundcloud.com/raethexn/radio-show-001" title="Radio Show #001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        Radio Show #001
                    </a>
                </div>
            </div>

            {/* Event Cover Photo */}
            <div className="mt-6 w-full max-w-xs md:max-w-lg lg:max-w-4xl">
                <h2 className="text-xl md:text-2xl text-center mb-4">Upcoming Event</h2>
                <img src={coverPhoto} alt="Event Cover" className="rounded-lg shadow-lg"/>
            </div>

            {/* Event Ticket Link */}
            <div className="mt-6 mb-6 text-center">
                <a href="https://www.eventbrite.com/e/the-brunch-therapy-unlimited-alcohol-and-food-tickets-885912055807" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Tickets
                </a>
            </div>
        </div>
    );
}

export default Music;
