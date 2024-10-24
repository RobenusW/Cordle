import './styles.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const startDate = new Date(2024, 9, 22);
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    let difference = currentDate.getTime() - startDate.getTime();
    let issueNumber = Math.round (difference / (1000 * 3600 * 24))
    return(
        <div className="wd-flex">
            <img src="/images/CordleImage.png" alt="CordleLogo" className="wd-resize-image"/>
            <span className="wd-bottom-half-welcome">
                <h2 className="wd-subtitle">Get 20 minutes to solve <br/> an algorithm problem</h2>
                <span className="wd-bottom-fouth-welcome">
                    <Link to="/code-editor">
                        <button type="button" className="wd-button">Play</button>
                    </Link>
                    <h3 id="wd-date">{currentDate.toLocaleDateString('en-US', options)}</h3>
                    <h6 id="wd-days">No. {issueNumber}</h6>
                    <h6 id="wd-edited-by">Edited by Robenus Waktole</h6>
                </span>
            </span>
        </div>
    );
}