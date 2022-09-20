<template>
  <div class="border-t-2 border-grey my-6 mx-6 w-auto">
    <h2 class="font-bold my-4 text-2xl">Results</h2>
    <table className="border-collapse m-auto text-center w-11/12">
      <thead>
        <tr class="border-y-2">
          <th
            class="bg-blue1 border-x-[1px] border-white font-bold"
            v-for="header in [
              'Week',
              'Assignment',
              'No. of Tutors',
              'No. of Labs',
              'Total Wait Time (mins)',
              'Total Wages Cost ($)',
              'Total Delay Cost ($)',
              'Total Overall Cost ($)',
            ]"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in results" class="w-full even:bg-grey-light">
          <td class="border-y-[1px] border-slate-400" v-for="val in row">
            {{ val }}
          </td>
        </tr>
        <tr v-if="results.length > 0" class="border-t-2">
          <td colspan="6"></td>
          <td class="border-b-2 font-bold">Sem Cost:</td>
          <td class="border-b-2 font-bold">{{ semCost }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import optimal_allocations from "../utils/otpimal_allocations";

export default {
  data: () => ({
    results: [],
    semCost: 0,
  }),
  methods: {
    optimal_allocations,
    simulate(
      tutorSalary,
      delayCost,
      num_labs,
      assignment_schedule,
      baseline_join_rate,
      assignment_join_rate,
      tutor_help_rate,
      queuelength
    ) {
      let results = optimal_allocations(
        tutorSalary,
        delayCost,
        num_labs,
        assignment_schedule,
        baseline_join_rate,
        assignment_join_rate,
        tutor_help_rate,
        queuelength
      );
      this.semCost = 0;
      for (const row of results) {
        row[1] = row[1] ? "T" : "F";
        row[4] = row[4].toFixed(0);
        row[6] = row[6].toFixed(2);
        row.push(
          parseFloat((parseFloat(row[5]) + parseFloat(row[6])).toFixed(2))
        );
        this.semCost += parseFloat(row[7]);
      }
      this.semCost = this.semCost.toFixed(2);
      this.results = results;
    },
  },
};
</script>

<style scoped></style>
