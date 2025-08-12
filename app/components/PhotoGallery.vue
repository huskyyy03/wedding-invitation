<template>
  <section class="photo-gallery bg-gray-50 py-12 mx-auto w-[430px]">
    <div class="container mx-auto px-6 max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-8">우리의 이야기</h2>
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div v-for="(photo, index) in photos" :key="index" class="aspect-square rounded-lg overflow-hidden">
          <NuxtImg :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" @click="openModal(index)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const photos = ref([
  { src: '/photos/1.jpg', alt: '첫 만남' },
  { src: '/photos/5.jpg', alt: '데이트' },
  { src: '/photos/3.jpg', alt: '프러포즈' },
  { src: '/photos/4.jpg', alt: '약혼' }
])

const openModal = (index: number) => {
  // ここに拡大やモーダル表示機能を追加可能
}
</script>
