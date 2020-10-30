import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";
import Header from "./common/header";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" exact component={Header} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
