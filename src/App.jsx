import { Route, Routes } from "react-router-dom";
import "./App.scss";
import StatCheck from "./pages/StatCheck/StatCheck";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Compare from "./pages/Compare/Compare";
import DataForm from "./pages/DataForm/Form";
import DeleteForm from "./pages/DeleteForm/DeleteForm";

const App = () => {
    return (
        <Routes>
            <>
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
            <>
                <Route
                    path='/delete'
                    element={
                        <>
                            <Header />
                            <Nav />
                            <DeleteForm />
                        </>
                    }
                />
            </>
        </Routes>
    );
};

export default App;
