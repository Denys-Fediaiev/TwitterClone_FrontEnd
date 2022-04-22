import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm'
import LoginForm from "./components/LoginForm";



function App() {
    return (
        <div className="App">
            <Header/>
            <RegistrationForm/>
            {/*<LoginForm/>*/}
        </div>
    );
}

export default App;

