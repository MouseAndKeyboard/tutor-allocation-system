<script>
export default {
  data() {
    return {
      avgTutorHelpTime: 0,
      labDuration: 120,
      questionsPerMinuteNoAssessments: 0,
      questionsPerMinuteAssessments: 0,
    };
  },
};
</script>

<template>
  <h2 className="text-2xl font-bold">Parameters</h2>
  <form className="grid grid-cols-2">
    <label>Question rate/no assessments (per min):</label>
    <input
      type="number"
      min="0"
      step=".01"
      v-model="questionsPerMinuteNoAssessments"
    />
    <label>Question rate/assessments (per min):</label>
    <input
      type="number"
      min="0"
      step=".01"
      v-model="questionsPerMinuteAssessments"
    />
    <label>Average tutor help time (mins):</label>
    <input type="number" min="0" step=".01" v-model="avgTutorHelpTime" />
    <label>Lab duration (mins):</label>
    <input type="number" min="0" v-model="labDuration" />
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
