import React from "react";

import { useState, useEffect } from "react";

function App() {
    const [project, setProject] = useState([]);

    const fetchData = () => {
      return fetch("/projects")
            .then((response) => response.json())
            .then((data) => setProject(data));
    }
console.log(project);

useEffect(() => {
    fetchData();
  })

  return (
    <div></div>
  );
}

export default App;
