import './App.css';

//创建外壳组件
//有多种暴露方式
import React, {Component} from "react";
import {HelloReact} from "./components/HelloReact/HelloReact";
import {Welcome} from "./components/Welcome";

//创建并暴露App组件
export class App extends Component {
    render() {
        return (
            <div>
                <HelloReact/>
                <Welcome/>
            </div>
        )}
}

export default App;
