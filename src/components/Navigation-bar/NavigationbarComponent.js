import React, { Component } from 'react';
import './NavigationbarComponent.css';

import { Link } from 'react-router-dom';

// icons
import WhiteNoteIcon from '../../assets/images/white-note.png';
import WhiteFunelIcon from '../../assets/images/white-funel.png';
import WhiteEmailIcon from '../../assets/images/white-email.png';
import WhiteLogoutIcon from '../../assets/images/white-logout.png';

class NavigationbarComponent extends Component {

    render(){
        return(
            <nav>

                <ul className="ul-top">
                    <li>Nimbus CRM</li>
                    <li>
                        <select>
                            <option>pluralis.com</option>
                            <option>noticias.com</option>
                        </select>
                    </li>
                </ul>

                <ul className="ul-bottom">   
                    <li><Link to="/notes"><img className="mobile-nav-icon" src={WhiteNoteIcon} alt="Note Icon" /></Link></li>
                    <li><Link to="/lead-table"><img className="mobile-nav-icon" src={WhiteFunelIcon}/></Link></li>
                    <li><Link to="/email-campaign"><img className="mobile-nav-icon" src={WhiteEmailIcon}/></Link></li>
                    <li><img className="mobile-nav-icon" src={WhiteLogoutIcon}/></li>
                </ul>

            </nav>
        );
    }

}

export default NavigationbarComponent;