import React, { useEffect, useState } from "react";

// /Pages component
const Pages = () => {
  // Assign JSON to state variable
  const [data, setData] = useState([]);

  // Fetch JSON data from backend /pages endpoint on the first render
  useEffect(() => {
    fetch("/pages").then((res) =>
      res.json().then((data) => {
        setData(data.titles);
        console.log(data);
      })
    );
  }, []);

  // Return
  return (
    <>
    <h1>Documents:</h1>
    <ul>
      {data.map((title) => (
        <h3>{title}</h3>
      ))}
    </ul>
    </>
  );
};

export default Pages;
