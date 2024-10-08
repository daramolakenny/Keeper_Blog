import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import "../style.css";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

  return (
    <div className='note'>
        <h1 className=''>{props.title}</h1>
        <p className=''>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon />
        </button>
    </div>
  )
}

export default Note;