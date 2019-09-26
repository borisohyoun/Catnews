<template>
  <div id="todo-list-example">
    <input  v-model="newTodoText"
            v-on:keyup.enter="addnewTodo"
            placeholder="add things here">
    <ul>
        <li is="todo-item"
            v-for="(todo, index) in todos"
            v-bind:key="todo.id"
            v-bind:title="todo.title"
            v-on:remove="todos.splicd(index,1)">
        </li>
    </ul>
  </div>
</template>

<script>
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

export default {
  name: 'Watch',
  data () {
    return {
        newTodoNext:'',
        todos:[
            {
                id:1,
                title:'Do'
            }
        ],
        nextTodoId
    }
  },
  methods:{
      addnewTodo:function(){
          this.todos.push({
              id:this.nextTodoID++,
              title:this.newTodoText
          })
          this.newTodoText=""
      }
  }
  
}
</script>

<style scoped>
