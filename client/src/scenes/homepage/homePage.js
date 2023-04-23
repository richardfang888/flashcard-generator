import React, { useState } from "react";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const [createMethod, setCreateMethod] = useState(null);
  const [newStudySetName, setNewStudySetName] = useState("");

  const handleNewStudySet = () => {
    if (createMethod === "manual") {
      // handle manual creation
      console.log("Manual creation selected");
      // call a function to create the studySet manually
    } else if (createMethod === "notes") {
      // handle notes creation
      console.log("Notes creation selected");
      // call the generateFlashCards function with the notes as the request
      dispatch(generateFlashCards(newStudySetName));
    }
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => setCreateMethod("dropdown")}>Add New StudySet</button>
      {createMethod === "dropdown" && (
        <div>
          <label htmlFor="studySetName">StudySet Name:</label>
          <input
            type="text"
            id="studySetName"
            name="studySetName"
            value={newStudySetName}
            onChange={(e) => setNewStudySetName(e.target.value)}
          />
          <select onChange={(e) => setCreateMethod(e.target.value)}>
            <option value="" disabled selected hidden>
              Choose creation method
            </option>
            <option value="notes">Create Using Notes</option>
            <option value="manual">Create Manually</option>
          </select>
          <button onClick={handleNewStudySet}>Create StudySet</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
