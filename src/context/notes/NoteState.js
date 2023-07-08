import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "649aff00ce0483ea0a6cc382",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Title",
      "description": "Wake up early",
      "tag": "personal",
      "date": "2023-06-27T15:23:44.633Z",
      "__v": 0
    },
    {
      "_id": "649c57efbb534e97a214e769",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Note",
      "description": "This is my note",
      "tag": "Yeah Baby",
      "date": "2023-06-28T15:55:27.499Z",
      "__v": 0
    },
    {
      "_id": "649aff00ce0483ea0a6cc382",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Title",
      "description": "Wake up early",
      "tag": "personal",
      "date": "2023-06-27T15:23:44.633Z",
      "__v": 0
    },
    {
      "_id": "649c57efbb534e97a214e769",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Note",
      "description": "This is my note",
      "tag": "Yeah Baby",
      "date": "2023-06-28T15:55:27.499Z",
      "__v": 0
    },
    {
      "_id": "649aff00ce0483ea0a6cc382",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Title",
      "description": "Wake up early",
      "tag": "personal",
      "date": "2023-06-27T15:23:44.633Z",
      "__v": 0
    },
    {
      "_id": "649c57efbb534e97a214e769",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Note",
      "description": "This is my note",
      "tag": "Yeah Baby",
      "date": "2023-06-28T15:55:27.499Z",
      "__v": 0
    },
    {
      "_id": "649aff00ce0483ea0a6cc382",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Title",
      "description": "Wake up early",
      "tag": "personal",
      "date": "2023-06-27T15:23:44.633Z",
      "__v": 0
    },
    {
      "_id": "649c57efbb534e97a214e769",
      "user": "6492857cfc735039bd2e5c2a",
      "title": "My Note",
      "description": "This is my note",
      "tag": "Yeah Baby",
      "date": "2023-06-28T15:55:27.499Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial);

  // ADD A NOTE
      const addNote = (title, description, tag)=>{
      // TODO: API call 
      console.log("Adding a new note") 
        const note = {
          "_id": "649c57efbb534e97a214e769",
          "user": "6492857cfc735039bd2e5c2a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-06-28T15:55:27.499Z",
          "__v": 0
        };
         setNotes(notes.concat(note))
      }


  // DELETE A NOTE
      const deleteNote = ()=>{
          
      }


  // EDIT A NOTE
      const editNote = ()=>{
          
      }


  return (
   <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
       {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState
