import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextWrapper } from "../../core/Context";
import { paths } from "../../constants/paths";
import { Header } from "../components/HOC/header/Header";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Header>
          <Switch>
            {paths.map((el, idx) => (
              <Route key={idx} path={el.path} component={el.element} exact></Route>
            ))}
          </Switch>
        </Header>
      </ContextWrapper>
    </BrowserRouter>
  );
}

export default App;
