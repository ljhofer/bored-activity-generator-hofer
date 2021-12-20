import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Styling for the HTML elements generated with this component
const styles = {
    footerIcon: {
        margin: 25,
        fontSize: '2em',
        color: 'black'
    },
    footer: {
        backgroundColor: '#8d968e',
        textAlign:"center"
    },
    h3: {
        paddingTop: 25
    }
  };

function Footer () {




    return (
        <footer style={styles.footer} className="footer">
            <h3 style={styles.h3}>Created by Laura Hofer</h3>
            <div className="container text-center">
            <a 
                href="https://github.com/ljhofer" 
                target="_blank" rel="noreferrer">
                    <FaGithub style={styles.footerIcon}/>
            </a>
            <a 
                href="https://www.linkedin.com/in/laura-hofer/" 
                target="_blank" rel="noreferrer">
                    <FaLinkedin style={styles.footerIcon} />
            </a>
            <a 
                href="mailto:ljhofer@gmail.com" 
                target="_blank" rel="noreferrer">
                    <FaEnvelope style={styles.footerIcon} />
            </a>
            </div>
      </footer>
    )
}

export default Footer; 
