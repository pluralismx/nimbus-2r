import React, { Component } from 'react';
import './NewNoteComponent.css';

class NewNoteComponent extends Component {

    render(){
        return(
            <div className="new-note-card">
                <div className="new-note-header">
                    <input placeholder='Titulo'></input>
                </div>
                <div className="new-note-body">
                    <textarea placeholder='contenido'>

                    </textarea>
                </div>
                <div className="new-note-footer">
                    <button className='btn-primary'>guardar</button>
                </div>
            </div>
        );
    }

}
export default NewNoteComponent;