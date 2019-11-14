<template>
  <div id="modalContainer">
    <div id="modalWrapper" class="container">
      <div id="modalHeader">
        <button @click="$emit('closeModal')" id="closeModal">+</button>
      </div>
      <div id="modalContent">
        <form @submit="sendTodo">
          <input 
            type="text"
            v-model="title"
            name="userName"
            id="modalInput"
            placeholder="What's the task?">
          <div id="modalDetail"></div>
          <button type="submit" id="modalButton">Add +</button>
          <div v-if="error" id="modalError">
            <span id="errorMessage">Please, tell me the name of the task!</span>
          </div>
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
      title: '',
      error: false
    }
  },
  methods: {
    sendTodo(event) {
      event.preventDefault();
      
      if(this.title) {
        const newTodo = {
          title: this.title,
          completed: false
        };
  
        this.$emit('addTodo', newTodo);
        this.$emit('closeModal');
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style>
  #modalContainer {
    width: 100vw;
    height: 100vh;
    position: fixed;
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
    width: 100%;
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

  @keyframes error {
  from {opacity: 0}
  to {opacity: 1}
  }

  @-webkit-keyframes error {
  from {opacity: 0}
  to {opacity: 1}
  }

  #modalError {
    margin: 35px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation-name: error; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
    animation-name: error;
    animation-duration: 1s;
  } #errorMessage {
    color: rgb(189, 79, 79);
    font-weight: 600;
    text-align: center;
  }
</style>