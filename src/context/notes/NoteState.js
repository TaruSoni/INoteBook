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

  const [notes, setNotes] = useState(notesInitial)

  return (
   <NoteContext.Provider value={{notes, setNotes}}>
       {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState
