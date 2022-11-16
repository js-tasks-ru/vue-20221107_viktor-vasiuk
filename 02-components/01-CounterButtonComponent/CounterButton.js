import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    click(value) {
      this.$emit('update:count', value);
    },
  },

  template: `<button type="button" style="width: 50px" @click="click(count+1)">{{ count }}</button>`,
});
