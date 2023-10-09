<template>
  <div class="container">
    <h1 class="f3e5f5 purple lighten-5 center">本の編集</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field">
          <input placeholder="Title" type="text" class="validate" v-model="book.title" required />
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Author" type="text" class="validate" v-model="book.author" required />
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Publisher" type="text" class="validate" v-model="book.publisher" required />
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Genre" type="text" class="validate" v-model="book.genre" required />
        </div>
      </div>
      <div class="btn" @click="updateBook(book.id)">本の情報を変更</div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  genre: string;
}

export default defineComponent({
  name: 'BookEdit',
  data() {
    return {
      id: this.$route.params.id,
      book: {
        id: '',
        title: '',
        author: '',
        publisher: '',
        genre: '',
      } as Book,
    };
  },
  mounted() {
    this.setBookEdit(this.id);
  },
  methods: {
    async setBookEdit(id: string) {
      try {
        const response = await axios.get<Book>(`http://localhost:3000/api/books/${id}.json`);
        const data = response.data;
        this.book.id = data.id;
        this.book.title = data.title;
        this.book.author = data.author;
        this.book.publisher = data.publisher;
        this.book.genre = data.genre;
      } catch (error) {
        console.error(error);
      }
    },
    async updateBook(id: string) {
      if (!this.book.title) return;
      try {
        await axios.put(`http://localhost:3000/api/books/${id}`, { book: this.book });
        this.$router.push({ path: '/' });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped></style>
