<template>
  <img v-if="image" :src="image" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input type="text" placeholder="Ask a question..." v-model="question">
    <p>End your question with a ? mark</p>

    <div v-if="isValidQuestion">
      <h2>{{question}}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValidQuestion: false,
    }
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = 'Thinking...';
        const {answer, image} = await fetch('https://yesno.wtf/api').then( resp => resp.json() )
        this.answer = answer;
        this.image = image;
      } catch (e) {
        this.answer = 'error';
        this.img = null;
      }
    }
  },
  watch: {
    question: function (value) {
      this.isValidQuestion = false;
      console.log({value})
      if(!value.includes('?')) return;
      this.isValidQuestion = true;
      this.getAnswer();
    }
  }
}
</script>

<style>
  img, .bg-dark {
    height: 100vh;
    left: 0;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  .bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .indecision-container {
    position: relative;
    z-index: 99;
  }

  input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }
  input:focus {
    outline: none;
  }

  p {
    color: white;
    font-size: 20px;
    margin-top: 0;
  }

  h1, h2 {
    color: white;
  }

  h2 {
    margin-top: 150px;
  }
</style>