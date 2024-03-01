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
                if (res.data.status === 'succes') {
                    this.setState({
                        leads: res.data.leads
                    })
                    console.log('leads cargados correctamente');

                }
            }).catch(error => {
                console.log(error);
            });
    }

    handleEditLead = (lead) => {
        console.log('Data received from child component:', lead);
        this.setState({
            editLead: lead,
            editLeadToggle: true
        });
    }

    handleToggleModal = () => {
        this.setState({
            editLeadToggle: false
        });
    }

    componentDidMount() {
        this.getLeads();
    }

    render() {
        const { leads, editLead, editLeadToggle } = this.state;
        return (
            <div className="lead-table-container">
                {leads.length > 0 ? (
                    leads.map((lead, index) => (
                        <LeadComponent key={index} lead={lead} editLead={this.handleEditLead} />
                    ))
                ) : (
                    <div>There are currently no leads</div>
                )}
                {editLeadToggle && <LeadNotesModal data={editLead} toggleModal={this.handleToggleModal} updateLeads={this.getLeads} />}
            </div>
        );
    }

}

export default LeadTableComponent;