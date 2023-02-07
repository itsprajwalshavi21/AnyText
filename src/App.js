// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
    return (
        <>
            <Navbar title="AnyText" about="About" />
            <div className="container my-3">
                <TextArea />
            </div>
        </>
    );
}

export default App;
