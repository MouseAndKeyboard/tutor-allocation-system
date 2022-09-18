<script>
export default {
  data() {
    return {
      questionsPerMinuteNoAssessments: 0,
      questionsPerMinuteAssessments: 0,
      tutorHelpRate: 0,
    };
  },
};
</script>

<template>
  <h2 className="text-2xl font-bold">Parameters</h2>
  <form className="grid grid-cols-2">
    <label> Questions per minute (no assessments): </label>
    <input type="number" step=".01" v-model="questionsPerMinuteNoAssessments" />
    <label> Questions per minute (assessments): </label>
    <input type="number" step=".01" v-model="questionsPerMinuteAssessments" />
    <label>Tutor help rate:</label>
    <input type="number" step=".01" v-model="tutorHelpRate" />
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
