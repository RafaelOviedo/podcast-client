<template>
  <div id="formComponent">
    <h1 id="title">New Episode Every Week!</h1>
    <h3 id="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam asperiores<br>odit maiores odio eveniet</h3>
    
    <form id="formContainer" @submit.prevent="submitForm">
      <input id="mailInput" type="text"  placeholder="Type your mail" v-model="email">
      <button id="submitButton" type="submit">
          <b>Subscribe</b>&nbsp;&nbsp;&nbsp;
          <span id="arrow">&#8594;</span>
      </button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'EmailForm',
  data() {
    return {
      v$: useValidate(),
      email: '',
      url: '/wp-json/contact-form-7/v1/contact-forms/68/feedback',
    }
  },
  validations() {
    return {
      email: { required, email },
    }
  },
  methods: {
    async submitForm() {
      this.v$.$validate();
      if(!this.v$.$error) {
        let result = await axios.post(this.url, { email: this.email })
        console.log("RESULT", result)
        alert('Submitted!')
      } else {
        alert('Email must be valid');
      }
    }
  },
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
    color: #9B9B9B;
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

@media (max-width: 1135px) {
  #formContainer {
    width: 110%;
  }
}
@media (max-width: 768px) {
  #formComponent {
    width: 90% !important;
    height: 13%;
    left: 5%;
    top: 3970px;
    height: 400px;
  }
  #title {
    text-align: center;
  }
  #formContainer {
    width: 90%;
  }
  #mailInput {
    width: 60%;
    height: 60%;
  }
  #submitButton {
    width: 35%;
    height: 60%;
  }
}
</style>