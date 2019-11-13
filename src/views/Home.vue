<template>
  <div class="app">
    <div id="homeContainer" class="container col-11 col-sm-9 col-md-6">
      <span class="mx-4">{{ date }}</span>
      <h2 class="mb-5 mx-4">Hello, {{ name }}</h2>
      <h3 class="mx-4">It's {{ weekDay }}. What's good for today?</h3>

      <div class="row justify-content-center">
        <div class="card mt-4 m-2 p-4 col-11 col-md-5 col-sm-12">
          <div class="mb-2" id="cardTitle">
            <h5>Morning</h5>
          </div>
          <div id="todoList">
            <input type="checkbox" name="test" id="test" /> Teste <br />
            <input type="checkbox" name="test" id="test" /> Teste <br />
            <input type="checkbox" name="test" id="test" /> Teste
          </div>
        </div>

        <div class="card mt-4 m-2 p-4 col-11 col-md-5 col-sm-12">
          <div class="mb-2" id="cardTitle">
            <h5>At Work</h5>
          </div>
          <div id="todoList">
            <input type="checkbox" name="test" id="test" /> Teste <br />
            <input type="checkbox" name="test" id="test" /> Teste <br />
            <input type="checkbox" name="test" id="test" /> Teste
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Home",

  data() {
    return {
      name: "",
      data: "",
      weekDay: ""
    };
  },

  methods: {
    getName() {
      if (localStorage.getItem("userName")) {
        this.name = localStorage.getItem("userName");
      } else {
        this.$router.push("/welcome");
      }
    },

    getDate() {
      // moment.locale('pt-br'); --> Adaptação para português
      this.date = moment().format("D MMM YYYY");
      this.weekDay = moment().format("dddd");
    }
  },

  mounted() {
    this.getName();
    this.getDate();
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
</style>
