import React, {Component} from 'react'
import './LeadComponent.css';

class LeadComponent extends Component {

    state = {
        lead: this.props.lead
    }

    editLead = () => {
        console.log('working');

        const lead = this.state.lead;
        this.props.editLead(lead);
    }

    render(){
        const { id_user, id_website, id_lead, name, phone, email, content, status } = this.state.lead;
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
                        <button className="btn-primary">Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LeadComponent;