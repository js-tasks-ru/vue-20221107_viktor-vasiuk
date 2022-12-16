<template>
  <slot :name="state" :error="error" :result="result" />
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },

  data() {
    return {
      state: ref(null),
      error: ref(null),
      result: ref(null),
    };
  },

  watch: {
    promise: {
      immediate: true,
      handler(p) {
        this.state = 'pending';
        p.then((result) => {
          this.state = 'fulfilled';
          this.result = result;
        }).catch((error) => {
          this.state = 'rejected';
          this.error = error;
        });
      },
    },
  },
};
</script>
