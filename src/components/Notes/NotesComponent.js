import React, { Component } from 'react';
import axios from 'axios';
import './NotesComponent.css';
import '../New-note/NewNoteComponent';
import NewNoteComponent from '../New-note/NewNoteComponent';
import SavedNoteComponent from '../Saved-note/SavedNoteComponent';

class NotesComponent extends Component {

    state = {
        notes: [],
        status: null,
        newNoteToggle: false
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

    newNoteToggle = () => {
        this.setState(prevState => ({
            newNoteToggle: !prevState.newNoteToggle
        }));
    }

    render() {
        const { notes, newNoteToggle } = this.state;
        return (
            <div className='notes-container'>
                <div className="notes-container-header">
                    <h1>Notes</h1>
                    <button className="btn-warn" onClick={this.newNoteToggle}>add</button>
                </div>
                <div className="notes-container-body">
                    {newNoteToggle && <NewNoteComponent updateNotes={this.getNotes} />}
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