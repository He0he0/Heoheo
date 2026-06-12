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
                        <b><p>YourYear — Calendar Scheduling Website</p></b>
                        <i><p>React, Node.js, MongoDB</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>April 2026  - Present</p></i>
                    </div>
                </div>
            </div>
            <p>
                Designed a full-stack web application enabling students to intuitively plan and visualize their academic futures through an interactive calendar interface.
                Implemented a responsive React frontend with dynamic course scheduling and real-time calendar updates.
                Engineered a Node.js and MongoDB backend supporting persistent user data storage, course management, and secure authentication.
            </p>
            <div className="project-wrapper">
                <div className="project-card">
                    <div className="project-left">
                        <b><p>HireIQ — AI Recruiting Intelligence Platform</p></b>
                        <i><p>Next.js, Groq, Supabase</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>May 2026</p></i>
                    </div>
                </div>
            </div>
            <p>
                Built an AI candidate ranking dashboard in 22 hours at the BSE Build It Break It Hackathon 2026, enabling recruiters to instantly surface top applicants from large candidate pools.
                Ranked resumes against a live-editable rubric with scores grounded in specific resume evidence, reducing manual screening time and improving hiring precision.
                Conducted penetration testing on competing projects, identifying and documenting security vulnerabilities.
            </p>
            <div className="project-wrapper">
                <div className="project-card">
                    <div className="project-left">
                        <b><p>Vision-based Teleoperation via RGB Camera</p></b>
                        <i><p>Python, OpenCV, MediaPipe</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>January 2026  - March 2026</p></i>
                    </div>
                </div>
            </div>
            <p>
                Developed a vision-based teleoperation system in Python using OpenCV for use in Robosuite.
                Retargeted hand and wrist pose using Google MediaPipe, mapping human finger joint landmarks to a dexterous robotic hand.
                Designed a wrist pose estimation pipeline converting wrist orientation into robot arm pose commands.
            </p>
            <div className="project-wrapper">
                <div className="project-card">
                    <div className="project-left">
                        <b><p>X1 Robotics | Autonomous Moving Bear — Controls and Sensing Subteam</p></b>
                        <i><p>Python, ROS2, Intel RealSense</p></i>
                    </div>
                    <div className="project-right">
                        <i><p>September 2024  - May 2025</p></i>
                    </div>
                </div>
            </div>
            <p>
                Built ROS2 pipelines with Intel RealSense cameras to enable real-time robotic vision.
                Collaborated with hardware and software teams to integrate sensing data with navigation and control systems.
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
