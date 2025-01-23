<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import { reactive } from 'vue'

defineProps<{
  produits: {
    id: number
    nom: string
    description: string
    prix: number
    stock: number
    image: string
    createdAt: Date
  }[]
}>()

const toLocaleDate = (date: Date) => new Date(date).toLocaleDateString('fr-FR')

const form = reactive<{
  nom: string
  description: string
  prix: number
  stock: number
  image: string
}>({
  nom: '',
  description: '',
  prix: 0,
  stock: 0,
  image: 'https://placehold.co/600x400.png',
})
const submit = () => {
  router.post('/produits', form)
}
</script>

<template>
  <AppHead title="Produits" description="Liste des produits" />

  <h1 class="text-3xl text-red-400 my-12">Produits</h1>

  <form @submit.prevent="submit" class="max-w-md mx-auto mb-8 space-y-4">
    <div class="flex flex-col">
      <label for="nom" class="mb-1 text-sm font-medium text-gray-700">Nom</label>
      <input
        type="text"
        id="nom"
        v-model="form.nom"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <div class="flex flex-col">
      <label for="description" class="mb-1 text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        v-model="form.description"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      ></textarea>
    </div>
    <div class="flex flex-col">
      <label for="prix" class="mb-1 text-sm font-medium text-gray-700">Prix</label>
      <input
        type="number"
        id="prix"
        v-model="form.prix"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <div class="flex flex-col">
      <label for="stock" class="mb-1 text-sm font-medium text-gray-700">Stock</label>
      <input
        type="number"
        id="stock"
        v-model="form.stock"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <div class="flex flex-col">
      <label for="image" class="mb-1 text-sm font-medium text-gray-700">Image URL</label>
      <input
        type="url"
        id="image"
        v-model="form.image"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
    >
      Créer le produit
    </button>
  </form>

  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <li
      v-for="produit in produits"
      :key="produit.id"
      class="border rounded-lg shadow-md overflow-hidden"
    >
      <img :src="produit.image" :alt="produit.nom" class="w-full h-48 object-cover" />
      <div class="p-4 space-y-2">
        <h2 class="text-xl font-semibold text-gray-800">{{ produit.nom }}</h2>
        <p class="text-gray-600">{{ produit.description }}</p>
        <p class="text-lg font-bold text-red-400">Prix : {{ produit.prix }}€</p>
        <p class="text-sm text-gray-500">Il reste {{ produit.stock }} produits en stock.</p>
        <p class="text-xs text-gray-400">
          Dernier check des stocks : {{ toLocaleDate(produit.createdAt) }}
        </p>
      </div>
    </li>
  </ul>
</template>
