<template>
  <div class="app">
    <TodoModal v-if="showModal" v-on:closeModal="showModal = false"/>
    <div id="homeContainer" class="container col-11 col-sm-9 col-md-6 col-lg-6 col-xl-4">
      <span id="homeDate" class="mx-4">{{ date }}</span>
      <h2 id="homeTitle" class="mb-4 mx-4">Hello, {{ name }}</h2>
      <h3 id="homeDescription" class="mx-4">It's <span>{{ weekDay }}</span>. What's good for today?</h3>
      <div class="row justify-content-center">
        <TodoCard 
          v-for="card in todos" 
          :key="card.title" 
          :title="card.cardTitle" 
          :todos="card.todos"
          :type="card.cardType"
          v-on:openModal="showModal = true"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCard from "../components/TodoCard.vue";
import TodoModal from '../components/TodoModal.vue';

import moment from "moment";

export default {
  name: "Home",
  components: {
    TodoCard,
    TodoModal
  },
  data() {
    return {
      name: "",
      date: "",
      weekDay: "",
      showModal: false,
      todos: {}
    };
  },
  methods: {
    getTodos() {
      if(localStorage.getItem('todos')) {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } else {
        localStorage.setItem('todos', JSON.stringify({ 
          morning: { cardTitle: 'Morning', cardType: 'morning', todos:[{ id: 1, title: 'Teste', completed: false }]}, 
          atWork: { cardTitle: 'At Work', cardType: 'atWork', todos: []}
        }));
      }

      console.log(this.todos)
    },
    getName() {
      if (localStorage.getItem("userName")) {
        this.name = localStorage.getItem("userName");
      } else {
        this.$router.push("/welcome");
      }
    },
    getDate() {
      this.date = moment().format("D MMM YYYY");
      this.weekDay = moment().format("dddd");
    },
    // markComplete(id, type) {
    //   console.log('Working');
      
    //   var todos = JSON.parse(localStorage.getItem('todos'));
    //   todos.type.todos[id].completed = !todos.type.todos[id].completed;

    //   localStorage.setItem('todos', JSON.stringify(todos));

    //   this.getTodos()
    // },
    // deleteTodo(id) {
    //   var todo = this.todos.morning.filter(todo => todo.id == id)
    //   todo.completed = !todo.completed
    // }
  },
  mounted() {
    this.getName();
    this.getDate();
    this.getTodos();
  }
};
</script>

<style scoped>
  #homeContainer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #homeDate {
    font-size: 14px;
    font-weight: 500;
    color: rgb(165, 165, 165);
  }

  #homeTitle {
    font-weight: 700;
    color: #8A6BF2;
  }

  #homeDescription {
    font-size: 22px;
    font-weight: 700;
  } #homeDescription span {
    color: #8A6BF2;
  }
</style>
