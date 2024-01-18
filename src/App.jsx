import React from "react";
import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidv4()}`} />
        </Route>
        <Route path="/documents/:id" component={TextEditor} />
      </Switch>
    </Router>
  );
};

export default App;
