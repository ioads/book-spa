<template>
  <div class="flex justify-center">
    <div class="w-1/2">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Título</th>
            <th class="py-2 px-4 border-b">Subtítulo</th>
            <th class="py-2 px-4 border-b">Data da Publicação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td class="py-2 px-4 border-b">{{ book.title }}</td>
            <td class="py-2 px-4 border-b">{{ book.subtitle }}</td>
            <td class="py-2 px-4 border-b">{{ book.publication_year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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