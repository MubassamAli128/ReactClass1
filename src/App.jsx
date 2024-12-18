import Success from "./components/Alert/Success";
import Danger from "./components/Alert/Danger";
import Warn from "./components/Alert/Warning";

function App(){
  return(
    <div>
      <Success text="Record Added Successfully" />
      <Danger text="Record Deleted Successfully" />
      <Warn text="Record Deleted Successfully" />
    </div>
  );
}
export default App;
