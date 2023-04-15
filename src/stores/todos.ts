import { reactive } from 'vue'
import { defineStore } from 'pinia'

export class Todo {
  id: string
  isComplete = false
  task: string
  constructor(task: string) {
    this.id = Math.random().toString()
    this.task = task
  }
}

export const useTodosStore = defineStore('todos', () => {
  let todos = reactive<Todo[]>([])

  const addTodo = (todo: string) => {
    todos.push(new Todo(todo))
  }

  const removeTodo = (id: string) => {
    const index = todos.findIndex((item) => item.id === id)
    todos.splice(index)
  }

  const removeDone = () => {
    todos = todos.filter(todo => !todo.isComplete)
  }

  return { todos, addTodo, removeTodo, removeDone }
})
