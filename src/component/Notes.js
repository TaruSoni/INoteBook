import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';


const Notes = () => {

    const context = useContext(noteContext);
    const {notes, addNote } = context;

  return (
    <>
      <AddNote />
      <div className="row">  
          <h1>Your Notes</h1>
          {notes.map((note, i)=>{
              return <Noteitem note={note} key={i}/>;
          })}
      </div>
    </>  
  )
}

export default Notes
