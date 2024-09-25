import React from 'react'
import '../components/About.css';


const About = () => {
    return (
        <div className='content'>

            <h1>About Me</h1><hr />
            <h2>Web Developer</h2>
            <p>
                
                Hi Everyone, I am <span>NISSY SM</span> from <span>Thiruvananthapuram, India.</span><br />
               I am currently taking a course in Java Full Stack Developer. <br/>
             I have completed MCA in 2024 from Kerala Technical University.<br/>
             I can able to work in REACT JS, Front-end developer and web development.
            </p>

    {/* Education Section */}
    <div className='edu'>
                <div className="container mt-4">
                    <div className="row">
                        {/* Box 1 */}
                        <div className="col-md-6 mb-4">
                            <div className="box">
                                <h2 className="box-heading"><span>MCA-</span>Master of Computer Application </h2>
                                <p className="box-score"> <span>CGPA:</span>8.16</p>
                                <p className="box-text">Kerala Technical University</p>
                                <br />
                                <button type="button" class="btn btn-primary btn-sm">2022-2024</button>




                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="col-md-6 mb-4">
                            <div className="box">
                                <h2 className="box-heading"><span>BCA-</span>Bachilor of Computer Application </h2>
                                <p className="box-score"> <span>CGPA:</span>8.60</p>
                                <p className="box-text">Punjab Technical University</p>
                                <br />
                                <button type="button" class="btn btn-primary btn-sm">2018-2021</button>




                            </div>
                        </div>
                        {/* Box 3 */}

                        <div className="col-md-6 mb-4">
                            <div className="box">
                                <h2 className="box-heading"><span>XII-</span>Higher Secondary School </h2>
                                <p className="box-score"> <span>Score:</span>75%</p>
                                <p className="box-text">Kerala Higher Secondary Board</p>
                                <br />
                                <button type="button" class="btn btn-primary btn-sm">2015-2017</button>




                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="col-md-6 mb-4">
                            <div className="box">
                                <h2 className="box-heading"><span>X-</span>SSLC High School </h2>
                                <p className="box-score"> <span>Score:</span>86%</p>
                                <p className="box-text">Kerala  board</p>
                                <br />
                                <button type="button" class="btn btn-primary btn-sm">2014-2015</button>




                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;