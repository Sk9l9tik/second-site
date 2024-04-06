<script setup>
  import VHeader from "./components/VHeader.vue";
  import VClassroom from "./components/VClassroom.vue";
  import VLessons from "./components/VLessons.vue";
  import VOpportunities from "./components/VOpportunities.vue";
  import VHowItWork from "./components/VHowItWork.vue";
  import VDistance from "./components/VDistance.vue";
  import VFooter from "./components/VFooter.vue";
</script>


<template>
  <V-Header/>
  <main>
      <V-Classroom/>
      <V-Lessons/>
      <V-Opportunities/>
      <V-HowItWork/>
      <V-Distance/>     
  </main>
  <V-Footer/>
</template>

<style scoped>

</style>
