<template>
  <h2>{{ customTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      validator(value) {
        return value > 0;
      }
    },
  },
  data() {
    return {
      counter: this.start,
    }
  },
  computed: {
    squareCounter() {
      console.log('computed square counter');
      return this.counter * this.counter;
    },

    customTitle() {
      return this.title || 'Counter';
    }
  },
  methods: {
    getSquare() {
      console.log('get square counter');
      return this.counter * this.counter;
    },

    increase() {
      this.counter++;
    },

    decrease() {
      this.counter--;
    }
  }
}
</script>

<style>
  button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    padding: 4px 16px;
    margin: 0 4px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5AA67B;
    transition: 0.3s ease-in-out;
  }
</style>