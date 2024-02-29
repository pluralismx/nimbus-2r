import React, { Component } from 'react';
import './LeadNotesModal.css';

class LeadNotesModal extends Component {

    render(){
        return(
            <div className="modal-background">
                <div className="modal-window-container">
                    <div className="lead-notes-header"></div>
                    <div className="lead-notes-body"></div>
                    <div className="lead-notes-footer"></div>
                </div>
            </div>
        );
    }

}
export default LeadNotesModal;
 