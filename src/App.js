import './App.css';
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <header className="shadow">
        <div className="container py-3 d-flex align-items-center">
          <img src={logo} className="logo" alt="" />
          <p className="fw-bold mb-0 me-5">React App 1</p>

          <ul className="d-flex">
            <li className="d-block"><a href="#" className="text-secondary p-3">Home</a></li>
            <li className="d-block"><a href="#" className="text-secondary p-3">Service</a></li>
            <li className="d-block"><a href="#" className="text-secondary p-3">About</a></li>
          </ul>
        </div>
      </header>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <p className="text-primary fw-bold">Roberto Carlos</p>
            <h1>Visual Designer
              & Developer</h1>
            <p className="text-secondary">Hello I'm Roberto Carlos. I design interfaces - the metaphors that humanize them, and the systems that scale them.
              Let's create something together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
