<template>
  <div class="app">
    <TodoModal
      v-if="showModal"
      v-on:addTodo="addTodo"
      v-on:closeModal="showModal = false"
    />
    <div id="homeContainer" class="container col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6">
      <span id="homeDate" class="mx-4">{{ date }}</span>
      <h2 id="homeTitle" class="mb-4 mx-4">Hello, {{ name }}</h2>
      <h3 id="homeDescription" class="mx-4">It's <span>{{ weekDay }}</span>. What's good for today?</h3>
      <div class="row justify-content-center">
        <TodoCard 
          v-for="card in todos" 
          :key="card.title" 
          :cardTitle="card.cardTitle" 
          :todos="card.todos"
          :type="card.cardType"
          v-on:update="getTodos"
          v-on:openModal="openModal"
        />
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
      todoType: "",
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
          morning: { cardTitle: 'Morning', cardType: 'morning', todos:[]}, 
          atWork: { cardTitle: 'At Work', cardType: 'atWork', todos: []}
        }));
      }
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
    openModal(type) {
      this.todoType = type;
      this.showModal = true;
    },
    addTodo(newTodo) {
      var type = this.todoType;
      var todos = JSON.parse(localStorage.getItem('todos'));
      var newId = Math.floor(Math.random() * 1000);
      newTodo.id = newId
      
      todos[type].todos.push(newTodo)

      localStorage.setItem('todos', JSON.stringify(todos))

      this.getTodos()
    }
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
    position: absolute;
    top: 10%;
    left: 50%;
    padding-bottom: 40px;
    transform: translate(-50%);
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
