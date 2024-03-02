import React, { Component } from 'react';
import axios from 'axios';
import './LeadNotesModal.css';

class LeadNotesModal extends Component {

    state = {
        lead: this.props.data
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            lead: {
                ...prevState.lead,
                [name]: value
            }
        }));
    }

    editLead = () => {
        const { id_lead, name, phone, email, status } = this.state.lead;
        let formData = new FormData();
        formData.append('id_lead', id_lead);
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('status', status);

        axios.post("http://localhost/api-nimbus-2/lead/updateLead", formData)
            .then(res => {
                if(res.data.status === 'succes'){
                    this.props.updateLeads();
                    this.props.toggleModal();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { id_lead, name, phone, email, status } = this.state.lead;
        return (
            <div className="modal-window-container">
                <div className="modal-container">
                    <div className="modal-header">
                        <div><span>Lead #</span><span>{id_lead}</span></div>
                        <span onClick={this.props.toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className='field-block'>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Telefono: </label>
                            <input
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Correo: </label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Status: </label>
                            <input
                                type="text"
                                name="status"
                                value={status}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-primary" onClick={this.props.toggleModal}>cancelar</button>
                        <button className="btn-warn" onClick={this.editLead}>guardar</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LeadNotesModal;
