import React, { Component } from 'react';
import LeadComponent from '../Lead/LeadComponent';
import LeadNotesModal from '../Lead-notes-modal/LeadNotesModal';
import './LeadTableComponent.css';

class LeadTableComponent extends Component {

    contador = 0;

    constructor(props){
        super(props);
        this.state = {
            modalIsActive: false
        }
    }

    showModal(){
        this.setState({
            modalIsActive: (this.state.modalIsActive = true)
        });
    }
    hideModal(){
        this.setState({
            modalIsActive: (this.state.modalIsActive =  false)
        });
    }


    render(){
        return(
            <div className="lead-table-container">
                <LeadComponent/>
                {/* <LeadNotesModal/> */}
            </div>   
        );
    }

}

export default LeadTableComponent;