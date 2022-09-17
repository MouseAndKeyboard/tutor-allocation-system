<script>
export default {
  data() {
    return {
      questionsPerMinuteNoAssessments: 0,
      questionsPerMinuteAssessments: 0,
    };
  },
};
</script>

<template>
  <h2 className="text-2xl font-bold">Parameters</h2>
  <form>
    <label>
      Questions per minute (no assessments):
      <vue-number-input
        v-model="questionsPerMinuteNoAssessments"
        controls
      ></vue-number-input>
    </label>
    <label>
      Questions per minute (assessments):
      <vue-number-input
        v-model="questionsPerMinuteAssessments"
        controls
      ></vue-number-input>
    </label>
  </form>
</template>
