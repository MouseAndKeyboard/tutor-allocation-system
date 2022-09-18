<template>
  <div class="my-5 w-screen">
    <h2 class="font-bold mb-4 text-2xl">Results</h2>
    <table className="border-collapse m-auto text-center w-5/6">
      <thead>
        <tr>
          <th
            class="border-y-2 border-gray-400"
            v-for="header in [
              'Week',
              'Assignment',
              'No. of Tutors',
              'No. of Labs',
              'Total Wait Time',
              'Total Wages Cost',
              'Total Delay Cost',
              'Total Overall Cost',
            ]"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="row in results" class="even:bg-gray">
          <td class="border-y-2 border-slate-400" v-for="val in row">
            {{ val }}
          </td>
        </tr> -->
        {{
          results
        }}
      </tbody>
    </table>
  </div>
</template>

<script>
import optimal_allocations from "../utils/otpimal_allocations";
// const results = optimal_allocations(
//   4,
//   [
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     true,
//     false,
//     false,
//     false,
//     false,
//     true,
//   ],
//   0.4,
//   0.6,
//   5,
//   120
// );
// for (const row of results) {
//   row[1] = row[1] ? "T" : "F";
//   row[4] = row[4].toFixed(0);
//   row[6] = row[6].toFixed(2);
//   row.push(parseFloat(row[5]) + parseFloat(row[6]));
// }

export default {
  data: () => ({
    results: "live",
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
      this.results = optimal_allocations(
        tutorSalary,
        delayCost,
        num_labs,
        assignment_schedule,
        baseline_join_rate,
        assignment_join_rate,
        tutor_help_rate,
        queuelength
      );
      console.log(this.results);
    },
  },
};
</script>

<style scoped></style>
