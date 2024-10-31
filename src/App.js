// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GenreBox from './components/GenreBox/GenreBox';

export default function App() {
    return ( 
        <div>
            <Header />
            <div className='container'>
                <div className='main-text'>
                    <p>Welcome to [App Name] — your new go-to destination for everything music! Discover, stream, and explore millions of tracks from artists around the world, all in one place. Whether you’re diving into curated playlists, finding new releases, or rediscovering old favorites, [App Name] makes it simple and seamless. Customize your experience by following artists you love, building your personal playlists, and enjoying music recommendations that evolve with your taste. Join a community of music lovers and let [App Name] soundtrack your every mood and moment!</p>
                </div>
                <GenreBox />
            </div>
        </div>
    );
}

