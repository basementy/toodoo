<template>
  <div id="modalContainer">
    <div id="modalWrapper" class="container">
      <div id="modalHeader">
        <button @click="$emit('closeModal')" id="closeModal">+</button>
      </div>
      <div id="modalContent">
        <form>
          <input 
            type="text"
            v-model="title"
            name="userName"
            id="modalInput"
            placeholder="What's the task?">
          <div id="modalDetail"></div>
          <button type="submit" id="modalButton">Add +</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(event) {
      event.preventDefault();

      const newTodo = {
        title: this.title,
        completed: false
      }

      this.$emit('addTodo', newTodo)
    }
  }
}
</script>

<style>
  #modalContainer {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.918);
    z-index: 10;
  }

  #modalWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #modalHeader {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  } #closeModal {
    transform: rotate(45deg);
    background-color: unset;
    border: none;
    outline: none;
    color: #8A6BF2;
    font-size: 52px;
    cursor: pointer;
  }

  #modalContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #modalInput {
    width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    background-color: unset;
    color: rgb(175, 156, 240);
  }::placeholder {
    color: rgb(210, 196, 255);
  }

  #modalDetail {
    width: 100%;
    height: 5px;
    background-color: #8A6BF2;
  }

  #modalButton {
    width: 100%;
    height: 65px;
    margin-top: 40px;
    border: none;
    outline: none;
    background-color: #8A6BF2;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  } #modalButton:hover {
    transform: translateY(-3px);
  }
</style>