import React, { Component } from 'react';
import me from '../images/me.png';

class Home extends Component {
    render() {
      return (
    <section id="homeSection">
        <div className="hero-image heroPrim">
            <div className="hero-text">
                <div className="myPhotoContainer">
                    <img src={me} alt="me" className="myPhoto" />
                </div>
                <div className="myName">ERIC ZHOU</div>
                <h4>SOFTWARE DEVELOPER</h4>
                <h5>Javascript | C# | PHP | Python</h5>
                <h5>React | ASP.net | Laravel | Django | Bootstrap | RESTapi | MSSQL/MySQL</h5>
            </div>
        </div>
    </section>
      );
    }
  }
  
  export default Home;