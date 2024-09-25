import React from 'react'
import '../components/Home.css';

const Home = () => {
    return (
        <div className='content'>

            <h1>Hello, I'm NISSY SM <br />Web Developer</h1>


            <div className='btn'>
                
                {/* <button type="button btn1" class="btn btn-outline-success" >Hire Me</button> */}
                <a href="Contact.jsx" class="btn btn-outline-success" role="button">Hire Me</a>


                {/* <button type="button" class="btn btn-outline-warning">Download Resume</button> */}
                <a href="C:\Users\nissy\OneDrive\Desktop\NISSYSMresume.pdf" class="btn btn-outline-warning" download>Download Resume</a>


            </div>



            

            </div>



    )
}

export default Home