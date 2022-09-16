import React, { useEffect, useState } from "react";

const Hello = () => {
  // Store JSON data using state variable
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");

  // Fetch latest revision of Hello document on first render
  useEffect(() => {
    fetch("/page/hello/latest").then((res) =>
      res.json().then((data) => {
        setData(data.data);
        setTitle(data.title);
        console.log(data);
      })
    );
  }, []);

  //Return
  return (
    <>
      <h1>
        <u>{title}</u>
      </h1>
      <p>{data}</p>
    </>
  );
};

export default Hello;
