<template>
   <div id="todoItem" :class="{'is-complete': todo.completed}">
    <div id="itemContainer">
      <button id="checkbox" @click="markComplete(todo.id, type)" :class="{'checked': todo.completed}"></button>
      <div id="titleContainer">
        <span id="itemTitle">{{ todo.title }}</span>
      </div>
      <button @click="deleteTodo(todo.id, type)" id="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: [
    "todo", 
    "type"
  ],
  methods: {
    markComplete(id, type) {
      var data = JSON.parse(localStorage.getItem('todos'));
      var todos = data[type].todos;
      var todoIndex = todos.findIndex(todo => todo.id == id)
      data[type].todos[todoIndex].completed = !data[type].todos[todoIndex].completed

      localStorage.setItem('todos', JSON.stringify(data));

      this.$emit('update');
    },
    deleteTodo(id, type) {
      var data = JSON.parse(localStorage.getItem('todos'));
      var updatedTodos = data[type].todos.filter(todo => todo.id != id);

      data[type].todos = updatedTodos;

      localStorage.setItem('todos', JSON.stringify(data));

      this.$emit('update');
    },
  }
}
</script>

<style scoped>
  .is-complete {
    color: rgb(165, 165, 165);
    text-decoration: line-through;
  }

  .is-complete #checkbox {
    background-color: #8A6BF2;
    border: 1.5px solid rgb(108, 80, 199);
    -webkit-box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.15);
  }

  #todoItem {
    margin-bottom: 10px;
  }

  #itemContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }


  #checkbox {
    cursor: pointer;
    margin: auto 0;
    width: 16px;
    height: 16px;
    background-color: unset;
    outline: none;
    border: 1.5px solid rgb(63, 63, 63);
    border-radius: 50%;
  }

  #titleContainer {
    flex: 1;
    margin: 0px 15px;
    display: flex;
    justify-content: flex-start;
  }

  #itemTitle {
    font-weight: 500;
  }

  #delete {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    background: none;
    color: rgb(193, 176, 248);
    border: none;
    outline: none;
    cursor: pointer;
    float: right;
    transition: all 0.3s;
  } #delete:hover {
    transform: rotate(-10deg);
  }
</style>