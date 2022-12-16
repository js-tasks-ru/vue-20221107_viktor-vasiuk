<template>
  <div class="pagination-container">
    <ul>
      <li v-for="item in pageItems" :key="item.id">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },
    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pageItems() {
      const start = this.perPage * (this.page - 1);
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
  },
};
</script>

<style></style>
