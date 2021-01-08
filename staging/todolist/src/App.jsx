import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    //    	1- 静态页面
    //     	2- 状态中的数据驱动页面展示
    //
    //     	此时并不了解 同级组件间通信 子组件A ===> 父组件 ===> 子组件B

    // 初始化state数据
    state = {
        todoLists: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false}
        ]
    }

    render() {
        const {todoLists} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List todoLists={todoLists}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
