import React from "preact/compat";
import { h, render } from "preact";

const App = () => {
    return <div>Hello preact in GAS!!!</div>
}

render(<App />, document.getElementById('app'));
