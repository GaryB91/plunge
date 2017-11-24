import React from "react";
import {render} from "react-dom";


class App extends React.Component {

    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}


window.addEventListener("load", () => {
    var target = document.getElementById("app");
    if (target) {
        render(<App/>, target);
    }
});
