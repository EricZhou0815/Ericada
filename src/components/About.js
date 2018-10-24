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
                <div className="myPhotoContainer">
                <img src={me} alt="me" className="myPhoto" />
                <div>
                <div className="mySubTittle">Eric Zhou</div>
                    <div className="myIntroduction">                
                        <p>I'm a CS student in Unitec Institute of Technology studying Graduate Diploma in Computing. I was a business consultant in China.</p>
                        <p>I'm currently looking for internship of software developer position.</p>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </div>
         
      );
  }
  

  
  export default About;