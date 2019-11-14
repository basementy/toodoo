<template>
	<div class="app">
		<div id="welcomeContainer" class="container col-11 col-sm-8 col-md-4">
      <form @submit="addName" id="welcomeForm">
        <h1 id="welcomeTitle">Welcome,</h1>
        <h3 id="welcomeDescription">That's your personal task manager!</h3>
        <input 
          type="text" 
          v-model="name" 
          name="userName" 
          id="welcomeInput" 
          placeholder="Tell me your name">
        <div id="welcomeDetail"></div>
        <button type="submit" id="welcomeButton">Let's Start!</button>
        <div v-if="error" id="errorContainer">
          <span id="errorMessage">Please, tell me your name!</span>
        </div>
      </form>
    </div>
	</div>
</template>

<script>
export default {
	name: 'Welcome',

  data() {
    return {
      name: '',
      error: false
    };
  },

  methods: {
    addName(event) {
      event.preventDefault();
			
			if(this.name.length > 0) {
				var newName = this.name;
				localStorage.setItem('userName', newName);
	
				this.$router.push('/');
			} else {
				this.error = true
			}
		},
		
		checkName() {
			if(localStorage.getItem('userName')) {
				this.$router.push('/')
			}
		}
	},
	
	mounted() {
		this.checkName()
	}
}
</script>

<style scoped>
  #welcomeContainer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #welcomeForm {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  #welcomeTitle {
    font-size: 30px;
    font-weight: 900;
    color: #8A6BF2;
  }

  #welcomeDescription {
    font-size: 22px;
    font-weight: 600;
    color: rgb(151, 151, 151);
  }

  #welcomeInput {
    width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: rgb(175, 156, 240);
  }::placeholder {
    color: rgb(210, 196, 255);
  }

  #welcomeDetail {
    width: 100%;
    height: 5px;
    background-color: #8A6BF2;
  }

  #welcomeButton {
    height: 60px;
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
  } #welcomeButton:hover {
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

  #errorContainer {
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