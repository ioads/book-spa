<template>
  <div class="flex flex-col items-center p-4">
    <div class="w-full max-w-2xl mb-8">
      <form @submit.prevent="addBook" class="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4">Cadastrar livro</h2>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
          <input
            v-model="newBook.title"
            id="title"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Autor</label>
          <input
            v-model="newBook.author"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="publication_year" class="block text-sm font-medium text-gray-700">Ano de Publicação</label>
          <input
            v-model="newBook.publication_year"
            id="publication_year"
            type="number"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salvar
        </button>
      </form>
    </div>

    <!-- Tabela para exibir livros -->
    <div class="w-full max-w-2xl">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Título</th>
            <th class="py-2 px-4 border-b">Autores</th>
            <th class="py-2 px-4 border-b">Ano de Publicação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td class="py-2 px-4 border-b">{{ book.title }}</td>
            <td class="py-2 px-4 border-b">{{ book.author }}</td>
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
      newBook: {
        title: '',
        author: '',
        publication_year: '',
      },
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
    addBook() {
      try {
        const response = api.post('/books', this.newBook);
        this.books = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
  },
};
</script>