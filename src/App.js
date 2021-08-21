import react from"./reactSrc.png"
import './App.css';

function App() {
  return (

    <div className="App">
      
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 class="title red">Your name here</h1>
   
    <br />
   
    <img src={react} />
   
    <br/>
   
    <img src="/logo512.png" />
   
   </div>
   
   <video width="320" height="240" controls>
   
    <source src="myVideo.mp4" type="video/mp4" />
   
   </video>
     
     
    </div>
  )


    }



    export default App;
