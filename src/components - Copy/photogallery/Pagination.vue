<template>
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <a class="page-link" @click="changePage(currentPage - 1)">Previous</a>
    </li>
    <li class="page-item" v-for="n in totalPages" :key="n" :class="{ active: n === currentPage }">
      <a class="page-link" @click="changePage(n)">{{ n }}</a>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
      <a class="page-link" @click="changePage(currentPage + 1)">Next</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
props: {
  total: Number,
  perPage: Number,
},
data() {
  return {
    currentPage: 1,
  };
},
computed: {
  totalPages() {
    return Math.ceil(this.total / this.perPage);
  },
},
methods: {
  changePage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.$emit('page-changed', page);
  },
},
};
</script>

<style scoped>
.pagination {
justify-content: center;
}
</style>