import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    //对接收的props进行：类型、必要性限制
    static propTypes = {
        todoLists: PropTypes.array.isRequired
    }

    render() {

        //从属性中获取todoLists列表
        const {todoLists} = this.props;

        return (

            <ul className="todo-main">
                {
                    todoLists.map(todo => {
                        //便利map时 todoLists不允许为null
                        //并且每一个循环体都必须要有唯一标识
                        //  ...对象展开式
                        return <Item key={todo.id} {todo}/>
                    })
                }
                <Item/>
            </ul>
        )
    }
}