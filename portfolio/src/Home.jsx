import "./Home.css"
import headshot from "/headshot.png"
import gicon from "/gmail-icon.webp"
import linkedin from "/link-black.png"
import gitIcon from "/github-white.png"


const HomePage = () => 
{
    return (
        <>
            <div className="parent-container">
                <img src={headshot} alt="Headshot" className="profile-pic"/>
                <div className="about-section">
                <h2>About Me: </h2>
                    <p>
                        Hi, I am Dylan Truong! I am currently a Computer Science major at the Henry Samueli School of Engineering & Applied Sciences at UCLA.
                        I am currently exploring my interest in technology but right now I am am currently interested in conduting udnergraduate research, Computer vision,
                        as well as robotics. This is my personal website where I share my <a href="/projects">projects</a> I have worked on in the past and my professional <a href="/experience">experience</a>. Make sure to check them out while you are here!
                    </p>
                </div>
            </div>
            <div className="icons-links">
                <a href="https://www.linkedin.com/in/dylan-truong27/">  
                    <img src={linkedin} alt="Linkedin" className="link-icon"/>
                </a>
                <a href="https://github.com/He0he0"> 
                    <img src={gitIcon} alt="github" className="link-icon"/>
                </a>
                <a href="mailto:dylantruong5@gmail.com">
                    <img src={gicon} alt="gmail" className="link-icon"/>
                </a>
            </div>
        </>
    )
}

export default HomePage