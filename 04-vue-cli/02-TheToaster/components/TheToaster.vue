<template>
  <div class="toasts">
    <div v-for="toast in toasts.values()" :key="toast.timer" class="toast" :class="toast.type">
      <ui-toast :icon="toast.icon">{{ toast.message }}</ui-toast>
    </div>
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
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
