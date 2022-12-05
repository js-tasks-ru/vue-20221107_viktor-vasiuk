<template>
  <ui-input ref="input" :model-value="valueString" :type="type" @input="onInput($event)">
    <template v-if="$slots['left-icon']" #left-icon>
      <slot name="left-icon" />
    </template>
    <template v-if="$slots['left-icon']" #right-icon>
      <slot name="right-icon" />
    </template>
  </ui-input>
</template>

<script>
import UiInput from './UiInput';

export default {
  name: 'UiInputDate',

  components: { UiInput },

  props: {
    modelValue: [Number, String],

    type: {
      type: String,
      default: 'date',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      value: null,
    };
  },

  computed: {
    valueString() {
      switch (this.type) {
        case 'date':
          return this.modelValue ? new Date(this.modelValue).toISOString().slice(0, -14) : '';
        case 'time':
          return this.modelValue ? new Date(this.modelValue).toISOString().slice(11, -8) : '';
        case 'datetime-local':
          return this.modelValue ? new Date(this.modelValue).toISOString().slice(0, -8) : '';
        default:
          return '';
      }
    },
  },

  methods: {
    onInput(event) {
      if (event.target.value === '') {
        this.$emit('update:modelValue', null);
        return;
      }

      this.$emit('update:modelValue', event.target.valueAsNumber);
    },
  },
};
</script>
