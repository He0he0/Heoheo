import "./Projects.css"

const ProjectsPage = () => 
{
    return (
        <div className="content-wrapper-projects">
            <h1>Projects</h1>
            <p> Here are some of the projects I have worked on.</p>
            <hr/>
            <div className="project-wrapper"> 
                <div className="project-card">
                    <div className="project-left">
                        <b><p>Forked Repos</p></b>
                        <i><p>React, JavaScript, SQL</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>March 2025  - June 2025</p></i>
                    </div>
                </div>
            </div>
            <p>
                Built a responsive recipe-sharing website with features for uploading, browsing, and searching recipes by cuisine or dietary preferences. 
                Developed interactive components using React and connected to a SQL backend. 
                Collaborated with a team of 5 to implement features and integrate feedback into the development process.
            </p>
            <div className="project-wrapper"> 
                <div className="project-card">
                    <div className="project-left">
                        <b><p>BruinBear Robot - Controls and Sensing Subteam</p></b>
                        <i><p>Python, OpenCV, ROS2</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>September 2024  - May 2025</p></i>
                    </div>
                </div>
            </div>
            <p>
                Utilizing ROS2 with Intel RealSense cameras and Python for robotic vision applications. 
                Developing obstacle detection systems for autonomous navigation and implementing face and hand gesture tracking to enhance human-robot interaction.
            </p>
            <div className="project-wrapper"> 
                <div className="project-card">
                    <div className="project-left">
                        <b><p>ASL Computer Vision Model</p></b>
                        <i><p>Python, Machine Learning, OpenCV</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>September 2024  - May 2025</p></i>
                    </div>
                </div>
            </div>
            <p>
                Developed a real-time ASL recognition system using OpenCV and deep learning. 
                Trained and optimized a convolutional neural network (CNN) on a custom ASL dataset with TensorFlow and PyTorch.
            </p>
            <div className="project-wrapper"> 
                <div className="project-card">
                    <div className="project-left">
                        <b><p>Secure SQLite Library</p></b>
                        <i><p>SQL, JavaScript</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>March 2024  - June 2024</p></i>
                    </div>
                </div>
            </div>
            <p>
                Developed a secure SQL library as an NPM module for web applications, using binding and tagged template literals to prevent injection attacks. 
                Integrated Node's FFI to interface with SQLite C routines for cross-language support.
            </p>
            <div className="project-wrapper"> 
                <div className="project-card">
                    <div className="project-left">
                        <b><p>Malware Simulation</p></b>
                        <i><p>Python, Linux</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>January 2023  - March 2024</p></i>
                    </div>
                </div>
            </div>
            <p>
                Developed a controlled malware simulation in an Ubuntu VM using Python to study system vulnerabilities. 
                Explored persistence techniques such as hooks and system integration. 
                Created Cron jobs to automate malware deployment with harmless payloads for testing.
            </p>
            <hr/>
        </div>
    )
}

export default ProjectsPage
