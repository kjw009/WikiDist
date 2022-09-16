import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hello1490112640 = () => {
  // Store JSON data from api endpoints using state variable
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [revisions, setRevisions] = useState([]);

  // Fetch latest revision of the Hello document on first render
  useEffect(() => {
    fetch("/page/hello/1490112640").then((res) =>
      res.json().then((data) => {
        setData(data.data);
        setTitle(data.title);
      })
    );
  }, []);

  // Fetch revisions of the Hello document on first render
  useEffect(() => {
    fetch("/page/hello").then((res) =>
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
      <p style={dataStyle}>{data}</p>
      <h2>
        <u>Revisions:</u>
        <ul>
          {revisions.map((revision) => {
            const link = `/page/hello/${revision}`

            const date = new Date(revision);
            const dateString = date.toString();
            return <Link to={link}><p style={revisionStyle}>{dateString}</p></Link>;
          })}
        </ul>
      </h2>
    </>
  );
};

export default Hello1490112640;