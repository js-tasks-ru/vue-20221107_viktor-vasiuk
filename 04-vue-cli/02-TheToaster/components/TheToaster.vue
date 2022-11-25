<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasts.values()" :key="toast.timer" :icon="toast.icon" :type="toast.type">
      {{ toast.message }}
    </ui-toast>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: {
    UiToast,
  },

  data() {
    return {
      toasts: new Map(),
    };
  },

  methods: {
    success(v) {
      let prop = {
        message: v,
        icon: 'check-circle',
        type: 'toast_success',
        lifetime: 5000,
      };
      this.visible(prop);
    },
    error(v) {
      let prop = {
        message: v,
        icon: 'alert-circle',
        type: 'toast_error',
        lifetime: 5000,
      };
      this.visible(prop);
    },
    visible(prop) {
      prop.timer = setTimeout(() => this.invisible(prop), prop.lifetime);
      this.toasts.set(prop.timer, prop);
    },
    invisible(prop) {
      this.toasts.delete(prop.timer);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast_success {
  color: var(--green);
}

.toast_error {
  color: var(--red);
}
</style>
