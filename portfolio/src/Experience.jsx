import "./Experience.css"

const ExperiencePage = () => 
{
    return (
        <div className="content-wrapper"> 
            <h1>Experience</h1>
            <p> Below is a list of my professional experience. Feel free to also check out my LinkedIn for more information.</p>
            <hr/>
            <div className="education-wrapper"> 
                <u><h2>Education</h2></u>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>University of California, Los Angeles (UCLA)</p></b>
                        <p>B.S. Computer Science </p>
                    </div>
                    <div className="experience-right">
                        <i><p>September 2023  - exp. June 2027</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
            </div>
            <p className="coursework-p">
                <b>Coursework:</b> Software Construction, Machine Learning, Deep Learning for Computer Vision, Data Management Systems, Data Structures &amp; Algorithms, Programming Languages, Computer Network Fundamentals, Operating Systems, Computer Architecture, Linear Algebra
            </p>

            <hr/>
            <div className="professional-wrapper">
                <u><h2>Research Experience</h2></u>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>Undergraduate Researcher</p></b>
                        <p>Image Super-Resolution with Hybrid and Sparse Transformers</p>
                    </div>
                    <div className="experience-right">
                        <i><p>November 2025  -  December 2025</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <p>
                    Implemented a modified Hybrid Attention Transformer (HAT-S) for 4× upscaling using Adaptive Sparse Self-Attention (ASSA) and Feature Refinement Feed-forward Network (FRFN), advancing high-fidelity image reconstruction for downstream computer vision tasks.
                    Benchmarked model on standard SR datasets (Set5, Set14, BSD100, Urban100, Manga109) using PSNR, demonstrating comparable benchmark results.
                </p>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>Undergraduate Researcher</p></b>
                        <p>UCLA Security and Networking (ScaN) Lab</p>
                    </div>
                    <div className="experience-right">
                        <i><p>December 2024  -  June 2025</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <p>
                    Authored Python scripts for automated data collection, processing, and statistical analysis of satellite hop latency across multiple Starlink network paths.
                    Uncovered correlations between latency anomalies and service disruptions through data-driven analysis, contributing findings to ongoing lab research.
                </p>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>Student Researcher</p></b>
                        <p>Cyber Summer Research Fellowship (CSURF)</p>
                    </div>
                    <div className="experience-right">
                        <i><p>June 2024  - August 2024</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <p>
                    Collaborated within a multidisciplinary team to develop a multipart system for dynamic analysis of cryptographic misuses in Node.js applications.
                    Conducted in-depth analysis using a modular checker to identify critical vulnerabilities.
                    Spearheaded the development of CamNode, a Java-based port of the CamBench benchmark for detecting cryptographic API misuse.
                </p>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>Adblock Lab Lead</p></b>
                        <p>Association for Computing Machinery | Cyber</p>
                    </div>
                    <div className="experience-right">
                        <i><p>September 2024  - December 2024</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <p>
                    Spearheaded a team of 20+ students in developing dynamic Adblock software using JavaScript.
                    Guided peers through all stages of project development, providing technical mentorship and support.
                </p>
            </div>
            <p></p>

            <hr/>
            <div className="workexperience-wrapper" >
                <u><h2>Work Experience</h2></u>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>Stockroom Assistant</p></b>
                        <p>UCLA Samueli School of Engineering</p>
                    </div>
                    <div className="experience-right">
                        <i><p>September 2024  - Present</p></i>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <p>
                    Provided hands-on training in soldering and electronics repair while demonstrating strong communication and mentorship skills. 
                    Assisted students with lab project completion and troubleshooting.
                    Managed and organized lab kits to maintain workflow efficiency and ensure resource availability.
                </p>
                <div className="experience-card">
                    <div className="experience-left">
                        <b><p>IT Technician</p></b>
                        <p>ND Auto Smog & Repair</p>
                    </div>
                    <div className="experience-right">
                        <i><p>August 2023  - Present</p></i>
                        <p>Pomona, California</p>
                    </div>
                </div>
                <p>
                    Diagnosed and resolved hardware and software issues on legacy computer systems. 
                    Performed ongoing maintenance, including component replacements and system upgrades.
                </p>
            </div>
            <hr/>
        </div>
    )
}

export default ExperiencePage
