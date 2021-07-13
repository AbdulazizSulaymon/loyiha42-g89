import Todo from '../Todo';
import './App.css';

const todos = [
  { title: "task 1" },
  { title: "task 2" },
  { title: "task 3" },
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <Todo todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
