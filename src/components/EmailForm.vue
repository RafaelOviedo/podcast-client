<template>
  <div id="formComponent">
    <h1 id="title">New Episode Every Week!</h1>
    <h3 id="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam asperiores<br>odit maiores odio eveniet</h3>
    <form id="formContainer" action="">

      <input id="mailInput" type="text"  placeholder="Type your mail">

      <button @click.prevent="submitForm" id="submitButton" type="submit">
          <b>Subscribe</b>&nbsp;&nbsp;&nbsp;
          <span id="arrow">&#8594;</span>
      </button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'EmailForm',
  data() {
    return {
      submitForm() {
        console.log('submitted');
      }
    }
  }
}
</script>

<style scoped>
#formComponent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 310vh;
  left: 24.5vw;
  width: 50%;
  height: 35vh;
}
#title {
  margin: 0;
}
#subtitle {
  font-size: 15px;
  text-align: center;
  color: #9B9B9B;
}
#formContainer {
  width: 70%;
  height: 20%;
}
#mailInput {
  width: 70%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  border: none;
  background: #fff;
  outline: none;
} #mailInput::placeholder {
    margin-left: 10px;
  }
#submitButton {
  width: 29%;
  height: 104%;
  border-radius: 0 5px 5px 0;
  border: none;
  background: #f13c45;
  color: #fff;
  cursor: pointer;
} #arrow {
  font-size: 15px;
}
</style>