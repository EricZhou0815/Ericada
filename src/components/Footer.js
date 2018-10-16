import React from 'react';

const Footer=()=> {
      return (
        <footer className="page-footer font-small bg-dark myFooter">
                <div className="mySocialMedia">
                    <a href="https://github.com/EricZhou0815" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/eric-zhou-09288815b/"  target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            <div className="footer-copyright text-center py-3 text-light">© 2018 Copyright: Eric Zhou. Backed by ReactJS.</div>
        </footer>
      );
  }
  
  export default Footer;