import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component{
    
    render() {
        const githubIcon = <FontAwesomeIcon icon={faGithub}/>
        return(
            <div id='footer'>
                <a href='https://github.com/AndrewLin95/memory_game' target="_blank" rel='noreferrer'>{githubIcon}</a>
                <div>Test for GH Actions Deploy with test script</div>
            </div>
        )
    }
}

export default Footer;