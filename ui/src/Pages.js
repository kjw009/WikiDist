// Import react components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// /Pages component
const Pages = () => {
  // Assign JSON to state variable
  const [titles, setTitles] = useState([]);

  // Fetch JSON data from backend /pages endpoint on the first render
  useEffect(() => {
    fetch("/pages").then((res) =>
      res.json().then((data) => {
        setTitles(data.titles);
      })
    );
  }, []);

  // Return
  return (
    <>
      <h1>Documents:</h1>
      <ul>
        {titles.map((title) => {
          const link = `/page/${title}/latest`;
          return (
            <Link to={link}>
              <h3>{title}</h3>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Pages;
