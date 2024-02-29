import React, { Component } from 'react';
import './NotesComponent.css';
import '../New-note/NewNoteComponent';
import NewNoteComponent from '../New-note/NewNoteComponent';
import SavedNoteComponent from '../Saved-note/SavedNoteComponent';

class NotesComponent extends Component {

    render(){
        return(
            <div className='notes-container'>
                <div class="new-note-container">
                    <NewNoteComponent/>
                </div>
                <div className='saved-notes-container'>
                    <SavedNoteComponent/>
                </div>
            </div>
        );
    }

}

export default NotesComponent;