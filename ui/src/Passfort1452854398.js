// Import react modules
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// Passfort document component
const Passfort1452854398 = () => {
  // Store JSON data using state variable
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [revisions, setRevisions] = useState([]);

  // Fetch latest revision of Passfort document on first render
  useEffect(() => {
    fetch("/page/passfort/1452854398").then((res) =>
      res.json().then((data) => {
        setData(data.data);
        setTitle(data.title);
      })
    );
  }, []);

  // Fetch revisions of the Hello document on first render
  useEffect(() => {
    fetch("/page/passfort").then((res) =>
      res.json().then((data) => {
        setRevisions(data.revisions);
      })
    );
  }, []);

  // Styling for document data
  const dataStyle = {
    fontSize: "30px",
  };

  // Styling for revisions data
  const revisionStyle = {
    fontSize: "13px",
  };

  // Styling for the ul element surrounding the revisions
  const listStyle = {
    padding: "0px",
  };

  //Return
  return (
    <>
      <h1>
        <u>{title}</u>
      </h1>
      <p>{data}</p>
      <h2>
        <u>Revisions:</u>
        <ul>
          {revisions.map((revision) => {
            const link = `/page/passfort/${revision}`;

            const date = new Date(revision);
            const dateString = date.toString();
            return (
              <Link to={link}>
                <p style={revisionStyle}>{dateString}</p>
              </Link>
            );
          })}
        </ul>
      </h2>
    </>
  );
};

export default Passfort1452854398;
