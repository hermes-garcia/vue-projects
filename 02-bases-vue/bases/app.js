const app = Vue.createApp({
    data() { //App State
        return {
            message: 'Hello world!' //reactive object
        }
    },
    methods: {
        changeMessage( event ) {
            console.log('hello world!')
            this.message = 'hello world from vue'

            this.capitalize();
        },
        capitalize() {
            this.message = this.message.toUpperCase();
        }
    }
});

app.mount('#app');