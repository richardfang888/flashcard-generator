import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";


const HomePage = () => {
  const [showGForm, setShowGForm] = useState(false);
  const [showMForm, setShowMForm] = useState(false);
  const [mtopic, setMTopic] = useState("");
  const [gtopic, setGTopic] = useState("");
  const [notes, setNotes] = useState("");
  const user = useSelector((state) => state.user)
  const studySets = user.studySets

  const handleGTopicChange = (event) => {
    setGTopic(event.target.value);
  };

  const handleMTopicChange = (event) => {
    setMTopic(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleGenerate = async (event) => {
    // event.preventDefault();
    console.log(`Topic: ${gtopic}, Notes: ${notes}`);
    const response = await fetch("http://localhost:3001/studysets/generate", {
      mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gtopic, notes }),
    });
    console.log(response)
    setGTopic("");
    setNotes("");
    setShowGForm(false);
  };

  const handleManual = async (event) => {
    const response = await fetch("http://localhost:3001/studysets", {
      mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mtopic, notes }),
    });
    setMTopic("");
    setShowMForm(false);
    console.log(response)
  }
  
  return (
    <div>
      <h1>Your Study Sets</h1>
      <button onClick={() => setShowMForm(true)}>Create New Study Set</button>
      {showMForm && (
        <form onSubmit={handleManual}>
          <label htmlFor="topicInput">Topic:</label>
          <input
            type="text"
            id="topicInput"
            value={mtopic}
            onChange={handleMTopicChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <button onClick={() => setShowGForm(true)}>Generate Study Set From Text</button>
      {showGForm && (
        <form onSubmit={handleGenerate}>
          <label htmlFor="topicInput">Topic:</label>
          <input
            type="text"
            id="topicInput"
            value={gtopic}
            onChange={handleGTopicChange}
          />
          <br />
          <label htmlFor="notesInput">Notes:</label>
          <textarea
            id="notesInput"
            value={notes}
            onChange={handleNotesChange}
            style={{ height: "200px", width: "500px" }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {console.log(studySets)}
      {
      studySets.map((studySet) => (
        <Box sx={{ p: 2 }} key={studySet._id}>
          <Typography variant="h5">
            <Link to={`/${studySet._id}`} style={{ textDecoration: "none" }}>
              {studySet.title}
            </Link>
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default HomePage;
