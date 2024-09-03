<template>
    <div>
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
  </template>
  
  <script>
  export default {
    name: 'BookPage',
  };
  </script>
  