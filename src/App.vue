<script setup>
import { Scheduler } from "@progress/kendo-vue-scheduler";
import "@progress/kendo-theme-default/dist/all.css";

import AssessmentInput from "./components/AssessmentInput.vue";
import InputParameters from "./components/InputParameters.vue";
import Schedule from "./components/Schedule.vue";
</script>

<template>
  <main>
    <div className="bg-[url('../assets/CFC_Hackathon.png')] w-screen">
      <h1 className="text-4xl font-bold">Tutor Allocation System</h1>
      <InputParameters />
      <h2 className="text-2xl font-bold">Enter Assessment Dates</h2>
      <AssessmentInput />
      <h2 className="text-2xl font-bold">Schedule</h2>
      <Schedule />
    </div>
  </main>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
