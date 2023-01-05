const content = document.getElementById("container")

function App() {
    const [project, setProject] = useState([]);

    const fetchData = () => {
      return fetch("https://localhost:7000/")
            .then((response) => response.json())
            .then((data) => setProject(data));
    }
console.log(project);

useEffect(() => {
    fetchData();
  },[])

  return (
    <div id="container"></div>
  );
}

export default App;
