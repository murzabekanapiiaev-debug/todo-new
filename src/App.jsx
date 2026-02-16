import { TodoApp } from "./components/TodoApp"; // Негизги логика жайгашкан компонентти чакырат.

function App() {
  return (
    <div className="App">
      {/* Тиркеменин сырткы кабыгы. */}
      <TodoApp /> {/* Тизме, форма жана башка функциялар ушунун ичинде. */}
    </div>
  );
}

export default App;
