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
  const todos = reactive<{value: Todo[]}>({value: []})

  const addTodo = (todo: string) => {
    todos.value.push(new Todo(todo))
  }

  const removeTodo = (id: string) => {
    const index = todos.value.findIndex((item) => item.id === id)
    todos.value.splice(index, 1)
  }

  const removeDone = () => {
    todos.value = todos.value.filter(todo => !todo.isComplete)
  }

  return { todos, addTodo, removeTodo, removeDone }
})
