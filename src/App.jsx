import { Route, Routes } from "react-router-dom";
import "./App.scss";
import StatCheck from "./pages/StatCheck/StatCheck";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Compare from "./pages/Compare/Compare";
import DataForm from "./pages/DataForm/Form";

const App = () => {
    return (
        <Routes>
            <>
                <Route
                    path='/landing'
                    element={
                        <>
                            <Header />
                            <Nav />
                            <Landing />
                        </>
                    }
                />
            </>
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
            <>
                <Route
                    path='/compare'
                    element={
                        <>
                            <Header />
                            <Nav />
                            <Compare />
                        </>
                    }
                />
            </>
            <>
                <Route
                    path='/form'
                    element={
                        <>
                            <Header />
                            <Nav />
                            <DataForm />
                        </>
                    }
                />
            </>
        </Routes>
    );
};

export default App;
