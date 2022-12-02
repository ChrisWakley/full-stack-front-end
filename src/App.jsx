import "./App.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";

function App() {
    return (
        <div className='app'>
            <Header />
            <Nav />
            <Landing />
        </div>
    );
}

export default App;
