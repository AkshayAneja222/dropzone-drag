import './App.css';
import DragAndDropZone from "./DragAndDropZone";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Drag and drop
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <DragAndDropZone />
      </div>
    </div>
  );
}

export default App;
