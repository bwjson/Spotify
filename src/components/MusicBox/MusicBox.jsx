import { useState, useRef } from 'react';
import './MusicBox.css';

export default function MusicBox({index, src, title, artist, album, img}) {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (audioRef.current){
            if (isPlaying) {
                audioRef.current.pause();
            }else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="music-box">
            <audio id="audio" ref={audioRef} src={src}></audio>
            <div className="controls">
                <div className="col-4">
                    <h4>{index + 1}</h4>
                    <button className="play-button" onClick={handlePlayPause} style={{ backgroundImage: `url(${img})` }}>{isPlaying ? '❚❚' : '▶'}</button>
                    <div className="song">
                        <h4>{title}</h4>
                        <h5>{artist}</h5>
                    </div>
                </div>
                <div className="col-2">
                    <h5>{album}</h5>
                </div>
                <div className="col-2">
                    <h5>16 December</h5>
                </div>
                <div className="col-2 music-bar">
                    <div className="track-length" id="track-length">0:00</div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
    )
}
