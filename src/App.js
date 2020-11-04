import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";

import Home from "./home";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" exact component={Home} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
