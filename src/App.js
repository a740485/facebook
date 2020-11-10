import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";

import Login from "./login";
import Home from "./home";
import Watch from "./watch";
import Market from "./market";
import Societies from "./societies";
import Game from "./game";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/login" exact component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/watch" exact component={Watch} />
                    <Route path="/market" exact component={Market} />
                    <Route path="/societies" exact component={Societies} />
                    <Route path="/game" exact component={Game} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
