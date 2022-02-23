import "./App.css";
import Home from "./components/Home";

function App() {

  const headingStyle = {
    flex:"0.452",
    backgroundColor:"#3772FF",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }
	return (
		<div className="App">
			<h4 style={headingStyle}>Lorem Ipsum is simply dummy text of the printing</h4>
			<Home />
		</div>
	);
}

export default App;
