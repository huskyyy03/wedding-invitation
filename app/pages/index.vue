<template>
  <div class="wedding-invitation">
    <WelcomeSection />
    <WeddingInfo />
    <PhotoGallery />
    <RSVPForm />
    <FamilyInfo />
    <LocationGuide />
  </div>
</template>

<script setup lang="ts">
import WelcomeSection from '../components/WelcomeSection.vue'
import WeddingInfo from '../components/WeddingInfo.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import RSVPForm from '../components/RSVPForm.vue'
import FamilyInfo from '../components/FamilyInfo.vue'
import LocationGuide from '../components/LocationGuide.vue'

useHead({
  title: '지언 ♥ 은지 결혼식 초대',
  meta: [{ name: 'description', content: '2025년 10월 19일, 지언과 은지의 결혼식에 초대합니다.' }],
})
</script>

<style>
.wedding-invitation {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>