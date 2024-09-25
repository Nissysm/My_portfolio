import React from 'react'
import '../components/Skills.css'

const Skills = () => {
  return (
    <div className='main'>

        <h1 style={{color:"yellow"}}>Professional <span>Skillset</span></h1>


      



      <div className="card-container">
       





        {/* Second card */}
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">BACK-END</h5>
            <p className="card-text">
           <button type="button" class="btn btn-outline-light">JAVA</button>
           <button type="button" class="btn btn-outline-info">PYTHON</button>
           
            </p>
            
          </div>
        </div>


        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">FROND-END</h5>
            <p className="card-text">
             

           <div className='oneone'>
            
           <button type="button" class="btn btn-outline-info">HTML</button>
           <button type="button" class="btn btn-outline-light">CSS</button>
           <button type="button" class="btn btn-outline-dark">BOOSTRAP</button>

           </div>

           <div className='onetwo'>
           <button type="button" class="btn btn-outline-success">JAVASCRIPT</button>
           <button type="button" class="btn btn-outline-danger"> REACT JS</button>
           <button type="button" class="btn btn-outline-warning">C/C++</button>
           </div>
            </p>
          </div>
        </div>





        {/* Third card */}
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">DATABASE</h5>
            <p className="card-text">
           <button type="button" class="btn btn-outline-light">MY SQL</button>
           <button type="button" class="btn btn-outline-light"><main>MONGO DB</main></button>
              

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






      






         
    
  

      










export default Skills