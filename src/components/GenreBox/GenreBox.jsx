import './GenreBox.css';
import data from '../../data';
import MusicBox from '../MusicBox/MusicBox';
import Mina from '../../images/Mina.png'

export default function GenreBox() {
    return (
        <div className="genre-box">
            <div className="genre-header">
                <div className="genre-img">
                    <img src={Mina} alt="main" />
                    <h6>Mina</h6>
                </div>
                <div>
                    <h3>K-POP</h3>
                    <h4>List of the best k-pop tracks</h4>
                    <p>30 tracks, approximately 3h 30min</p>
                </div>
                <div className="performers">
                    <ul className="performers-bar">
                        <li className="performers-item">Twice</li>
                        <li className="performers-item">Le Sserafim</li>
                        <li className="performers-item">BlackPink</li>
                        <li className="performers-item">BabyMonster</li>
                        <li className="performers-item">Itzy</li>
                        <li className="performers-item">G-I(dle)</li>
                        <li className="performers-item">IVE</li>
                    </ul>
                </div>
            </div>
            {data.map((item, index) => (
                    <MusicBox
                        key={index}
                        index={index}
                        src={item[0]}
                        title={item[1]}
                        artist={item[2]} 
                        album={item[3]} 
                        img={item[4]}
                    />
                ))}
        </div>
    )
}