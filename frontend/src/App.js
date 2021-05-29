import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./views"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        </Switch>
        </BrowserRouter>
  );
}

export default App;
