<script></script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Number of Tutors</th>
          <th>Max. Wait Time</th>
          <th>Av. Wait Time</th>
          <th>Money Spent</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="num in Array.from({ length: 12 }, (_, i) => i + 1)">
          {{
            num
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
