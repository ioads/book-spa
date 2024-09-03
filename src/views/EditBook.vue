<template>
    <div class="w-full mb-8">
      <form @submit.prevent="updateBook" class="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
          <input
            v-model="book.title"
            id="title"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Subtítulo</label>
          <input
            v-model="book.subtitle"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="publication_year" class="block text-sm font-medium text-gray-700">Ano de Publicação</label>
          <input
            v-model="book.publication_year"
            id="publication_year"
            type="number"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-4">
            <div v-if="this.book.image" class="mb-2">
                <img :src="this.book.image" alt="Book Image" class="max-w-xs" style="max-width: 150px; max-height: 150px;"/>
            </div>
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Descrição</label>
          <input
            v-model="book.description"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Nome do Autor</label>
          <input
            v-model="book.author.name"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">CEP</label>
          <input
            v-model="book.author.zip_code"
            @input="onCepInput"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Endereço</label>
          <input
            required
            v-model="book.author.address"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Cidade</label>
          <input
            required
            v-model="book.author.city"
            id="author"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium text-gray-700">Estado</label>
          <input
            required
            v-model="book.author.state"
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
        book: {
            title: '',
            subtitle: '',
            publication_year: '',
            description: '',
            author: {
                name: '',
                zip_code: '',
                address: '',
                city: '',
                state: ''
            },
        },
      };
    },
    mounted() {
        this.getBook();
    },
    methods: {
        async getBook() {
            try {
                const response = await api.get('/books/'+this.$route.params.id);
                this.book.title = response.data.data.title;
                this.book.subtitle = response.data.data.subtitle;
                this.book.publication_year = response.data.data.publication_year;
                this.book.description = response.data.data.description;
                this.book.author.name = response.data.data.author ? response.data.data.author.name : ''
                this.book.author.zip_code = response.data.data.author ? response.data.data.author.zip_code : ''
                this.book.author.address = response.data.data.author ? response.data.data.author.address : ''
                this.book.author.city = response.data.data.author ? response.data.data.author.city : ''
                this.book.author.state = response.data.data.author ? response.data.data.author.state : ''
                this.book.image = response.data.data.image;
            } catch (error) {
            console.error('Erro ao buscar livros:', error);
            }
        },
        updateBook() {
            try {
                api.put('/books/'+this.$route.params.id, this.book);
                alert('Livro atualizado com sucesso');
            } catch (error) {
                alert('Erro ao atualizar o livro!');
            }
        },
        onCepInput() {
          if (this.book.author.zip_code.replace(/\D/g, '').length === 8) {
            this.searchCep();
          }
        },
        async searchCep() {
          try {
            const cepFormatted = this.book.author.zip_code.replace(/\D/g, '');
            if (cepFormatted.length !== 8) {
              alert('CEP deve ter 8 dígitos.');
              return;
            }

            const response = await api.get(`https://viacep.com.br/ws/${cepFormatted}/json/`);
            if (response.data.erro) {
              alert('CEP não encontrado.');
              return;
            }
            
            this.book.author.address = response.data.logradouro;
            this.book.author.city = response.data.localidade;
            this.book.author.state = response.data.estado;
          } catch (error) {
            alert('Ocorreu um erro ao buscar o CEP.');
          }
        },
    },
  };
  </script>