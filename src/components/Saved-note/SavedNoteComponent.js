import React, {Component} from 'react';
import './SavedNoteComponent.css'

class SavedNoteComponent extends Component {
    render(){
        return(
            <div className="saved-note-card">
                <div className="saved-note-header">
                    <input placeholder='Titulo'></input>
                </div>
                <div className="saved-note-body">
                    <textarea placeholder='contenido'>

                    </textarea>
                </div>
                <div className="saved-note-footer">
                    <button className='btn-primary'>copiar</button>
                    <button className='btn-primary'>editar</button>
                    <button className='btn-warn'>eliminar</button>
                </div>
        </div>
        );
    }
}
export default SavedNoteComponent;