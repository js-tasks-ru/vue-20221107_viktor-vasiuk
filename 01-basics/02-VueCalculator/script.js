import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      left_operand: 0,
      right_operand: 0,
      operator: "sum",
    };
  },

  computed: {
    result () {
      switch(this.operator){
        case "sum":
          return this.left_operand + this.right_operand;
        case "subtract":
          return this.left_operand - this.right_operand;
        case "multiply":
          return this.left_operand * this.right_operand;
        case "divide":
          return this.left_operand / this.right_operand;
        default:
          return "invalid operator";
      }
    }
  },

});

const app = createApp(App);
const vm = app.mount('#app');
//window.vm = vm;
