import ImprimeHeader from "./components/header"
import Planets from "./components/planets/planets"


const ShowMessage = () => {
  console.log("evento")
}

function App() {
    return (
        <div className="box">
          <h1>Planet list</h1>
          <button onClick={ShowMessage}></button>
        <ImprimeHeader></ImprimeHeader>
        <Planets name="Jupiter"
        description="lorem ipsum .... lorem ipsum .... lorem ipsum .... lorem ipsum ... lorem ipsum ...."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/800px-Nasa_blue_marble.jpg"></Planets>
        <Planets name="Jupiter"
        description="lorem ipsum .... lorem ipsum .... lorem ipsum .... lorem ipsum ... lorem ipsum ...."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/800px-Nasa_blue_marble.jpg"></Planets>
        <Planets name="Jupiter"
        description="lorem ipsum .... lorem ipsum .... lorem ipsum .... lorem ipsum ... lorem ipsum ...."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/800px-Nasa_blue_marble.jpg"></Planets>
        

        </div>
    )
}

export default App