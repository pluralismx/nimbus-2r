import React, {Component} from 'react'
import axios from 'axios';
import './LeadCardComponent.css';

class LeadCardComponent extends Component {

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
        const id_lead = this.state.lead;
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

    handleSelectChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            lead: {
                ...prevState.lead,
                [name]: value
            }
        }), () => {
            this.updateStatus();
        });
    }

    updateStatus = () => {
        const { id_lead, status } = this.state.lead;

        let formData = new FormData();
        formData.append('id_lead', id_lead);
        formData.append('status', status);
        
        axios.post("http://localhost/api-nimbus-2/lead/leadStatusUpdate", formData)
            .then(res=>{
                if(res.data.status === 'success'){
                    this.props.updateLead();
                }
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render(){
        const { name, phone, email, status } = this.state.lead;
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
                            <select name="status" value={status} onChange={this.handleSelectChange}>
                                <option value="nuevo">nuevo</option>
                                <option value="presentacion">presentacion</option>
                                <option value="cotizacion">cotizacion</option>
                                <option value="negociacion">negociacion</option>
                                <option value="cierre">cierre</option>
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
export default LeadCardComponent;