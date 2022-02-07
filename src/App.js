import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Registration from './RegistrationAssignment';
import Footer from './FooterAssignment';
import Native from './NativeAssignment';
import Hobby from './HobbyAssignment';
import Login from './LoginAssignment';
import Counter from "./CounterAssignment";

function App() {
  return (
   <><div className="App">
      <h1>Welcome to react</h1>
      <div className="App-div">Assignments 7 Feb 2022</div>
    </div>
    <Menu></Menu>
    <Registration></Registration>
    <Hobby></Hobby>
    <Native></Native>
    <Login></Login>
    <Counter></Counter>
    <Footer></Footer>
    </>
  );
}

export default App;
