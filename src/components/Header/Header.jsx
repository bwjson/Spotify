import './Header.css';
import logo from '../../images/logo.png';
import Button from '../Button/Button.jsx'

export default function Header() {
    return (
        <header>
            <div className="header">
                <img src={logo} alt="image" className="logo"/>
                <ul className="navbar">
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>News</li>
                </ul>
                <Button>Click</Button>
            </div>
            <div className="main-img">
                <div class="text-overlay">
                    <h1 class="general-text">The meaning of life </h1>
                    <p class="general-text2">The meaning of life is not to look for the meaning of life. The meaning of life is not found in seeking answers, but in embracing the questions and savoring each moment.</p>
                </div>
            </div>
        </header>
    )
}