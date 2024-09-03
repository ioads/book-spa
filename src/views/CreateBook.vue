<template>
    <div class="w-full mb-8">
      <form @submit.prevent="addBook" class="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
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
          <label for="author" class="block text-sm font-medium text-gray-700">Subtítulo</label>
          <input
            v-model="newBook.subtitle"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Descrição</label>
          <input
            v-model="newBook.description"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Nome do Autor</label>
          <input
            v-model="newBook.author.name"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">CEP</label>
          <input
            v-model="newBook.author.zip_code"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Endereço</label>
          <input
            readonly
            v-model="newBook.author.address"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Cidade</label>
          <input
            readonly
            v-model="newBook.author.city"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Estado</label>
          <input
            readonly
            v-model="newBook.author.state"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
  </template>
  


  <script>
  import api from '@/services/axios';
  
  export default {
    name: 'CreateBook',
    data() {
      return {
        newBook: {
            title: 'teste',
            subtitle: 'teste',
            publication_year: '2008',
            description: 'teste',
            author: {
                name: '',
                zip_code: '41720040',
                address: 'teste',
                city: 'teste',
                state: 'teste'
            },
        },
      };
    },
    mounted() {
    },
    methods: {
        addBook() {
            try {
                api.post('/books', this.newBook);
                alert('Livro cadastrado com sucesso');
            } catch (error) {
                alert('Erro ao cadastrar o livro!');
            }
        },
    },
  };
  </script>