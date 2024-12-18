import logo from './logo.svg';
import './App.css';


function Welcome(props){
  return(
    <div>
      <h1>welcome Back {props.username}</h1>
    </div>
  );
}


function App(){
  return(
    <div>
      <Welcome username="Mubassam Ali" />
    </div>
  );
}
export default App;
