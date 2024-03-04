import React, { Component } from 'react';
import axios from 'axios';
import './LeadAddModal.css';

class LeadAddModal extends Component {

    state = {
        lead: {
            name: null,
            phone: null,
            email: null,
            status: null,
            details: null
        }
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

    addLead = () => {
        const { name, phone, email, status, details } = this.state.lead;
        
        let formData = new FormData();

        formData.append('id_website', 4);
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('status', status);
        formData.append('content', details);

        axios.post("http://localhost/api-nimbus-2/lead/addleadManually", formData)
            .then(res => {
                if(res.data.status === 'success'){
                    this.props.updateLeads();
                    this.props.toggleModal();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        //const { id_lead, name, phone, email, status } = this.state.lead;
        return (
            <div className="modal-window-container">
                <div className="modal-container">
                    <div className="modal-header">
                        <div>Agregar lead manualmente</div>
                        <span onClick={this.props.toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className='field-block'>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Telefono: </label>
                            <input
                                type="text"
                                name="phone"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Correo: </label>
                            <input
                                type="text"
                                name="email"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Status: </label>
                            <input
                                type="text"
                                name="status"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='field-block'>
                            <label>Detalles: </label>
                            <textarea
                                name="detalles"
                                onChange={this.handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-primary" onClick={this.props.toggleModal}>cancelar</button>
                        <button className="btn-warn" onClick={this.addLead}>guardar</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LeadAddModal;