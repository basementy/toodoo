<template>
  <div class="card mt-4 mb-4 m-2 col-9 col-md-5 col-sm-12 pb-5" id="todoCard">
    <div id="cardTitle">
      <h5 id="cardTitle">{{ cardTitle }}</h5>
    </div>
    <div id="todoList" :key="todo.id" v-for="todo in todos">
      <TodoItem :todo="todo" :type="type" v-on:update="$emit('update')" v-on:deleteTodo="$emit('deleteTodo', todo.id, type)"/>
    </div>
    <button @click="$emit('openModal', type)" id="addButton">+</button>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: "TodoCard",
  props: [
    "cardTitle",
    "todos",
    "type"
  ],
  components: {
    TodoItem
  }
}
</script>

<style scoped>
  #todoCard {
    padding: 0px 30px;
    background-color: rgb(244, 241, 255);
    border: none;
    border-radius: 10px;
  }

  #cardTitle {
    margin-top: 15px;
    margin-bottom: 10px;
    color: #8A6BF2;
    font-size: 16px;
    font-weight: 600;
  }

  #addButton {
    cursor: pointer;
    width: 45px;
    height: 45px;
    position: absolute;
    right: 30px;
    bottom: -20px;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: #8A6BF2;
    color: white;
    font-size: 22px;
    font-weight: 600;
    -webkit-box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.1);
  }
</style>