import "./App.css";
import {Switch, Route} from 'react-router-dom';
import {JsGrid} from './components/JsGrid/JsGrid.js'

export function App() {
  return (
    <div>
        <Route path="/">
          <JsGrid />
        </Route>
    </div>
  );
}

export default App;
