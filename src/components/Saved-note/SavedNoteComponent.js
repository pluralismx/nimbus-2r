import React, { Component } from 'react';
import axios from 'axios';
import './SavedNoteComponent.css'

class SavedNoteComponent extends Component {

    state = {
        note: this.props.note
    }

    componentDidUpdate(prevProps) {
        // Check if the note prop has changed
        if (prevProps.note !== this.props.note) {
            // Update the note state
            this.setState({
                note: this.props.note
            });
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                [name]: value
            }
        }));
    }

    deleteNote = () => {
        const { id_note } = this.state.note;
        let formData = new FormData();
        formData.append('id_note', id_note);

        axios.post("http://localhost/api-nimbus-2/note/delete", formData)
            .then(res => {
                if (res.data.status === 'succes') {
                    this.props.updateNotes();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    editNote = () => {
        const { id_note, title, content } = this.state.note;
        let formData = new FormData();
        formData.append('id_note', id_note);
        formData.append('title', title);
        formData.append('content', content);
        axios.post("http://localhost/api-nimbus-2/note/update", formData)
            .then(res => {
                if(res.data.status === 'succes'){
                    this.props.updateNotes();
                }
            })

    }

    render() {
        const { title, content } = this.state.note;
        return (
            <div className="saved-note-card">
                <div className="saved-note-header">
                    <input
                        placeholder={title}
                        name="title"
                        value={title}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="saved-note-body">
                    <textarea
                        placeholder={content}
                        name="content"
                        value={content}
                        onChange={this.handleInputChange}
                    ></textarea>
                </div>
                <div className="saved-note-footer">
                    <button className='btn-primary'>copiar</button>
                    <button className='btn-primary' onClick={this.editNote}>editar</button>
                    <button className='btn-warn' onClick={this.deleteNote}>eliminar</button>
                </div>
            </div>
        );
    }
}
export default SavedNoteComponent;