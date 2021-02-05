import React from "react";
import {render} from "react-dom";

import App from "./app/containers/App";
import store from "./app/store"
import {Provider} from "react-redux";

const initialState = {
    result: 1,
    lastValues: []
}

render(
    <Provider store={store}><App /></Provider>,
    window.document.getElementById('app'));

