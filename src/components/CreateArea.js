import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea({ onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleExpanded() {
    setIsExpanded(true);
  }

  function submitButton(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  console.log(note);

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
            name="content"
            placeholder="Write your note here..."
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
