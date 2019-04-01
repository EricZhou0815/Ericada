import React from 'react';
import me from '../images/me.png';

const About =()=> {
      return (
        <div id="aboutSection">
        <div className="myContainer">
            <div className="hero-image heroAbout">
                <div className="hero-text">
                    <div className="myTittle heroAboutText">ABOUT ME</div>
                </div>
            </div>
            <div className="container-fluid padding">
                <div className="mySubTittle">Eric Zhou</div>
                    <div className="myIntroduction">                
                        <p>Recent graduate with Graduate Diploma in Computing in Unitec with average grade of A-.</p>
                        <p>Five years of experience working in a multinational business environment.</p>
                        <p>Able to leverage frameworks to build responsive websites and REST API.</p>
                        <p>Experience of building application front-end with React / Angular.</p>
                        <p>Local developer intern and international developer volunteering experience.</p> 
                        <p>Passionate about solving real-world problems with new technologies.</p>
                    </div>

            </div>
        </div>
        
        </div>
    
         
      );
  }
  

  
  export default About;