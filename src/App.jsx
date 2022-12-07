import { Route, Routes } from "react-router-dom";
import "./App.scss";
import StatCheck from "./pages/StatCheck/StatCheck";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";

const App = () => {
    return (
        <Routes>
            <Route
                path='*'
                element={
                    <>
                        <Header />
                        <Nav />
                        <Landing />
                    </>
                }
            />
            <>
                <Route
                    path='/database'
                    element={
                        <>
                            <Header />
                            <Nav />
                            <StatCheck />
                        </>
                    }
                />
            </>
        </Routes>
    );
};

export default App;
