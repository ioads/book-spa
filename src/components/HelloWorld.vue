<template>
  <div>
    <h1>Livros</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} by {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/axios';

export default {
  name: 'Books',
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await api.get('/books');
        this.books = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
  },
};
</script>