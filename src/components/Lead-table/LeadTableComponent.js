import React, { Component } from 'react';
import axios from 'axios';
import LeadCardComponent from '../Lead-card/LeadCardComponent';
import LeadEditModal from '../Lead-edit-modal/LeadEditModal';
import LeadAddModal from '../Lead-add-modal/LeadAddModal';
import './LeadTableComponent.css';

class LeadTableComponent extends Component {

    state = {
        leads: [],
        editLead: null,
        editLeadToggle: false,
        addLeadToggle: false
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
    }

    addLeadToggle = () => {
        this.setState(prevState => ({
            addLeadToggle: !prevState.addLeadToggle
        }));
    }

    render() {
        const { leads, editLead, editLeadToggle, addLeadToggle } = this.state;
        return (
            <div className="lead-table-container">
                <div className="leads-table-header">
                    <h1>Prospectos</h1>
                    <button className="btn-warn" onClick={this.addLeadToggle}>add</button>
                    <button className="btn-primary">A-Z</button>
                    <button className="btn-primary">Z-A</button>
                    <input type="text" placeholder='search by, email, name, number, etc...'/>
                    <button className="btn-primary">search</button>
                    <label>Results per page:</label>
                    <select>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <button className='btn-primary'>&lt;</button>
                    <button className='btn-primary'>&gt;</button>
                </div>
                <div className="leads-table-body">
                    {leads.length > 0 ? (
                        leads.map((lead, index) => (
                            <LeadCardComponent key={index} lead={lead} editLead={this.handleEditLead} deleteLead={this.getLeads} updateLead={this.getLeads}/>
                        ))
                    ) : (
                        <div>There are currently no leads</div>
                    )}
                </div>
                {editLeadToggle && <LeadEditModal data={editLead} toggleModal={this.handleToggleEditLead} updateLeads={this.getLeads} />}
                {addLeadToggle && <LeadAddModal toggleModal={this.addLeadToggle} updateLeads={this.getLeads}/>}
            </div>
        );
    }

}

export default LeadTableComponent;