
import './Home.css';
import lnct from '../assets/lnct.jpg'

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Learning Online Becomes Easier</h1>
                <p>Academy is a perfect theme for sharing and selling your knowledge online. It's not just a theme, but a learning management system that provides great features to make learning and teaching online easier for everyone.</p>
                <button className="get-started-btn">Get Started</button>
                <div className="contact-info">
                    <p>CALL 09868435712</p>
                </div>
            </header>
            <div className="image-container">
                <img src={lnct} alt="Person holding laptop" />
            </div>
        </div>
    );
}

export default Home;
