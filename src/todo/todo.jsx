import React, { Component } from 'react'
import PageHeader from '../template/page-header'
import TodoForm from '../todo/todo-form'
import TodoList from '../todo/todo-list'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro">
                </PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}