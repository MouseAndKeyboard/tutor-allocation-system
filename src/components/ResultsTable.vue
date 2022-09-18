<template>
  <div class="my-5 w-screen">
    <h2 class="font-bold mb-4 text-2xl">Results</h2>
    <table
      className="border-collapse border border-slate-400 m-auto text-center w-5/6"
    >
      <thead>
        <tr>
          <th
            class="border border-gray-400"
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
        <tr v-for="row in results">
          <td class="border border-slate-400" v-for="val in row">
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import optimal_allocations from "../utils/otpimal_allocations";
const results = optimal_allocations(
  4,
  [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
  ],
  0.4,
  0.6,
  5,
  120
);
for (const row of results) {
  row[1] = row[1] ? "T" : "F";
  row[4] = row[4].toFixed(0);
  row[6] = row[6].toFixed(2);
  row.push(parseFloat(row[5]) + parseFloat(row[6]));
}

export default {
  data: () => ({
    results: results,
  }),
  methods: {
    optimal_allocations,
    simulate() {
      this.result = optimal_allocations(
        4,
        [
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          true,
        ],
        0.4,
        0.6,
        5,
        120
      );
      console.log(results);
    },
  },
};
</script>

<style scoped></style>
