<template>
  <div class="container">
    <h1 class="f3e5f5 purple lighten-5 center">本の登録</h1>
    <form class="col">
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
      <button class="btn btn-info waves-effect waves-light" @click="createBook">本を登録</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { Router, useRouter } from 'vue-router';

export default {
  setup() {
    const book = ref({
      title: '',
      author: '',
      publisher: '',
      genre: ''
    });

    const router: Router = useRouter();

    const createBook = () => {
      if (!book.value.title) return;
      axios
        .post('http://localhost:3000/api/books', { book: book.value })
        .then((res) => {
          router.push({ path: '/' });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return { book, createBook };
  }
};
</script>

<style scoped></style>
