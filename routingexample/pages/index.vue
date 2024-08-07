<template>
  <ul>
    <li v-for="(item, index) in note.notes" :key="index">{{ item.title }}</li>
  </ul>
</template>

<script lang="ts" setup>
import NoteService from "~/services/NoteService";
import { onMounted, ref } from "vue";
import type INote from "../interfaces/INote";

const note = ref<{ notes: INote[] }>({ notes: [] });
const noteService = new NoteService();

onMounted(async () => {
  note.value = await noteService.GetNote();
});
</script>
