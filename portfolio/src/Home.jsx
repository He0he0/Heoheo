import "./Home.css"
import headshot from "../public/headshot.png"

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
                <p>My links:</p>
            </div>
        </>
    )
}

export default HomePage