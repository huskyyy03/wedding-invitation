<template>
  <section class="min-h-screen flex justify-center items-center bg-white mx-auto w-[430px]">
    <!-- 幅430pxの中央コンテナ -->
    <div
      class="relative bg-white rounded-xl overflow-hidden"
      style="width: 430px; height: 720px;"
    >
      <!-- ドア 左 -->
      <div
        :class="[
          'absolute top-0 left-0 h-full transition-all duration-1000 ease-in-out z-50',
          doorOpen ? '-translate-x-full opacity-100 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'
        ]"
        style="width: 215px; background: #ececec; border-top-right-radius: 50px; border-bottom-right-radius: 50px;"
      ></div>
      <!-- ドア 右 -->
      <div
        :class="[
          'absolute top-0 right-0 h-full transition-all duration-1000 ease-in-out z-50',
          doorOpen ? 'translate-x-full opacity-100 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'
        ]"
        style="width: 215px; background: #ececec; border-top-left-radius: 50px; border-bottom-left-radius:50px;"
      ></div>

      <!-- 中央写真 -->
      <div
        class="w-48 h-48 mx-auto rounded-xl overflow-hidden shadow-none border border-gray-200 bg-gray-100 mb-8"
        style="box-shadow: -18px 0 48px -8px rgba(80,80,80,0.14), 18px 0 48px -8px rgba(80,80,80,0.14);"
      >
        <NuxtImg
          src="/photos/couple-main.jpg"
          alt="지언과 은지 結婚写真"
          class="w-full h-full object-cover"
          width="192"
          height="192"
        />
      </div>

      <!-- タイトル -->
      <h1
        class="text-2xl font-bold text-gray-800 mb-4 tracking-wide text-center"
        style="box-shadow: -18px 0 48px -8px rgba(80,80,80,0.14), 18px 0 48px -8px rgba(80,80,80,0.14);"
      >
        지언 ♥ 은지
      </h1>

      <!-- テキスト -->
      <div
        class="text-center px-2 max-w-xs"
        style="margin: 0 auto; box-shadow: -18px 0 48px -8px rgba(80,80,80,0.14), 18px 0 48px -8px rgba(80,80,80,0.14);"
      >
        <div class="text-gray-700 text-lg leading-relaxed mb-6 font-serif">
          <p class="mb-2">저희가 사랑으로 맺어진 인연을</p>
          <p class="mb-2">이제 영원한 약속으로 이어가려 합니다</p>
          <p class="mb-4">귀한 걸음 하시어 축복해 주시면</p>
          <p class="text-sm text-gray-400">더없는 기쁨으로 간직하겠습니다</p>
        </div>
      </div>

      <!-- アイコン -->
      <div
        class="mt-6 animate-bounce"
        style="box-shadow: -18px 0 48px -8px rgba(80,80,80,0.14), 18px 0 48px -8px rgba(80,80,80,0.14);"
      >
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const doorOpen = ref(false)
const handleScroll = () => { doorOpen.value = window.scrollY > 100 }
onMounted(() => { window.addEventListener('scroll', handleScroll, { passive: true }) })
onBeforeUnmount(() => { window.removeEventListener('scroll', handleScroll) })
</script>
