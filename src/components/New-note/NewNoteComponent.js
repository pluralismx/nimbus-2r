import React, { Component } from 'react';
import axios from 'axios';
import './NewNoteComponent.css';

class NewNoteComponent extends Component {

    state = {
        note: {
            title: '',
            content: ''
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                [name]: value
            }
        }));
    }

    saveNote = () => {

        const { title, content } = this.state.note;
        console.log('Title:', title);
        console.log('Content:', content);
        let id_website = 4;
        let formData = new FormData();
        formData.append('note_title', title);
        formData.append('note_content', content);
        formData.append('id_website', id_website);
        axios.post("http://localhost/api-nimbus-2/note/save", formData)
             .then( res => {
                if(res.data.status === 'succes'){
                    console.log('nota guardada correctamente');
                }
             }).catch( error => {
                console.log(error);
             });

    }

    render(){
        const {title, content} = this.state.note;
        return(
            <div className="new-note-card">
                <div className="new-note-header">
                    <input 
                        type="text"
                        name="title"
                        placeholder="Titulo" 
                        value={title}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="new-note-body">
                    <textarea 
                        name="content"
                        placeholder='contenido' 
                        value={content}
                        onChange={this.handleInputChange}    
                    ></textarea>
                </div>
                <div className="new-note-footer">
                    <button className='btn-primary' onClick={this.saveNote}>guardar</button>
                </div>
            </div>
        );
    }

}
export default NewNoteComponent;