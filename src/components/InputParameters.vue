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


  <form>

    <div class="flex justify-start pb-1">
      <label class="w-80">Question rate/no assessments (per min):</label>
      <input
        type="number"
        min="0"
        step=".01"
        v-model="questionsPerMinuteNoAssessments"
        class="rounded-md"
      />
    </div>

    <div class="flex justify-start pb-1">
      <label class="w-80">Question rate/assessments (per min):</label>
      <input
        type="number"
        min="0"
        step=".01"
        v-model="questionsPerMinuteAssessments"
        class="rounded-md"
      />
    </div>
    <div class="flex justify-start pb-1">
      <label class="w-80">Average tutor help time (mins):</label>
      <input type="number" min="0" step=".01" v-model="avgTutorHelpTime" class="rounded-md" />
    </div>

    <div class="flex justify-start pb-1">
      <label class="w-80">Lab duration (mins):</label>
      <input type="number" min="0" v-model="labDuration" class="rounded-md" />
    </div>

  </form>

</template>

<style scoped>

input {
  border: 1px solid lightgrey;
}
</style>
