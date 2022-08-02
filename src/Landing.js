import './Landing.css';
import logo from './img/GitHub-Logo.png';

function Landing() {
  
    return (
        <div className="landing_container">
            <img src={logo} alt="GitHub" />
            <h1>
                Welcome to GitHub User Search
            </h1>
            <p>
                Browse users and their profiles via the GitHub API
            </p>
        </div>
    );
  }
  
  export default Landing;