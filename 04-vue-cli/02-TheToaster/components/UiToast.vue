<template>
  <ui-icon class="toast__icon" :icon="icon" />
  <span><slot /></span>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.toast__icon {
  margin-right: 12px;
}
</style>
