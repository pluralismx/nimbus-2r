import React, {Component} from 'react'
import axios from 'axios';
import './LeadComponent.css';

class LeadComponent extends Component {

    state = {
        lead: this.props.lead
    }

    componentDidUpdate(prevProps) {
        if(prevProps.lead !== this.props.lead){
            this.setState({
                lead: this.props.lead
            });
        }
    }

    editLead = () => {
        const lead = this.state.lead;
        this.props.editLead(lead);
    }

    deleteLead = () => {
        const { id_lead } = this.state.lead;
        let formData = new FormData();
        formData.append('id_lead', id_lead);
        axios.post("http://localhost/api-nimbus-2/lead/deleteLead", formData)
            .then(res=>{
                console.log(res.data);
                if(res.data.status === "succes"){
                    this.props.deleteLead();
                }
            })
            .catch(error=>{
                console.log(error);
            });
    }

    render(){
        const { name, phone, email, content, status } = this.state.lead;
        return(            
            <div className="lead-container">
                <div className="lead-header">
                    <h3>{name}</h3>
                </div>
                <div className="lead-body">
                    <div className="lead-info">
                        <div>
                            <span className="data-label">Telefono: </span>
                            <br/>
                            <span>{phone}</span>
                        </div>
                        <div>
                            <span className="data-label">Correo: </span>
                            <br/>
                            <span>{email}</span>
                        </div>
                        <div className="div-info">
                            <span className="data-label">Status: </span>
                            <select>
                                <option>Activo</option>
                                <option>Activo</option>
                                <option>Activo</option>
                                <option>Activo</option>
                            </select>
                        </div>
                    </div>
                    <div className="lead-actions">
                        <button className="btn-warn">Llamar</button>
                        <button className="btn-primary">Notas</button>
                        <button className="btn-primary" onClick={this.editLead}>Editar</button>
                        <button className="btn-primary" onClick={this.deleteLead}>Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LeadComponent;