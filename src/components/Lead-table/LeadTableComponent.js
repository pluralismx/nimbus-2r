import React, { Component } from 'react';
import axios from 'axios';
import LeadComponent from '../Lead/LeadComponent';
import LeadNotesModal from '../Lead-notes-modal/LeadNotesModal';
import './LeadTableComponent.css';

class LeadTableComponent extends Component {

    state = {
        leads: [],
        editLead: null,
        editLeadToggle: false
    }

    getLeads = () => {
        let id_website = 4;
        let formData = new FormData();
        formData.append("id_website", id_website);
        axios.post("http://localhost/api-nimbus-2/lead/getLeads", formData)
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'succes') {
                    this.setState({
                        leads: res.data.leads
                    })
                }
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getLeads();
    }

    handleEditLead = (lead) => {
        this.setState({
            editLead: lead,
        });
        this.handleToggleEditLead();
    }

    handleToggleEditLead = () => {
        this.setState(prevState => ({
          editLeadToggle: !prevState.editLeadToggle
        }));
      };

    render() {
        const { leads, editLead, editLeadToggle } = this.state;
        return (
            <div className="lead-table-container">
                <div className="leads-table-header">
                    <h1>Prospectos</h1>
                    <button className="btn-warn" onClick={this.newNoteToggle}>add</button>
                </div>
                <div className="leads-table-body">
                    {leads.length > 0 ? (
                        leads.map((lead, index) => (
                            <LeadComponent key={index} lead={lead} editLead={this.handleEditLead} deleteLead={this.getLeads}/>
                        ))
                    ) : (
                        <div>There are currently no leads</div>
                    )}
                    {editLeadToggle && <LeadNotesModal data={editLead} toggleModal={this.handleToggleEditLead} updateLeads={this.getLeads} />}
                </div>
            </div>
        );
    }

}

export default LeadTableComponent;