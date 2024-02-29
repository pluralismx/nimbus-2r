import React, {Component} from 'react'
import './LeadComponent.css';

class LeadComponent extends Component {

    render(){
        return(            
            <div className="lead-container">
                <div className="lead-header">
                    <h3>Juana de la Torre Placencia</h3>
                </div>
                <div className="lead-body">
                    <div className="lead-info">
                        <div>
                            <span className="data-label">Telefono: </span>
                            <br/>
                            <span>+526642522024</span>
                        </div>
                        <div>
                            <span className="data-label">Correo: </span>
                            <br/>
                            <span>juanadelatorre@hotmail.com</span>
                        </div>
                        <div class="div-info">
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
                        <button className="btn-primary">Editar</button>
                        <button className="btn-primary">Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default LeadComponent;