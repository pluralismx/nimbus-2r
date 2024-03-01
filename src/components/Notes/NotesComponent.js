import React, { Component } from 'react';
import axios from 'axios';
import './NotesComponent.css';
import '../New-note/NewNoteComponent';
import NewNoteComponent from '../New-note/NewNoteComponent';
import SavedNoteComponent from '../Saved-note/SavedNoteComponent';

class NotesComponent extends Component {

    state = {
        notes: [],
        status: null
    }

    getNotes = () => {
        let formData = new FormData();
        formData.append('id_website', 4);
        axios.post("http://localhost/api-nimbus-2/note/getNotes", formData, { withCredentials: true })
            .then(res => {
                this.setState({
                    notes: res.data,
                    status: 'succes'
                });
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getNotes();
    }

    render() {
        const { notes } = this.state;
        return (
            <div className='notes-container'>
                <div className="new-note-container">
                    <NewNoteComponent updateNotes={this.getNotes} />
                </div>
                <div className='saved-notes-container'>
                    {notes.length > 0 ? (
                        notes.map((note, index) => (
                            <SavedNoteComponent key={index} note={note} updateNotes={this.getNotes} />
                        ))
                    ) : (
                        <div>No notes found. Create a new note!</div>
                    )}
                </div>
            </div>
        );
    }

}

export default NotesComponent;