<template>
  <div class="v-table-row">
    <div class="text row__name">{{ row_data.name }}</div>
    <div class="text row__earned">{{ row_data.points_earned }}</div>
    <div class="text row__spent">{{ row_data.points_spent }}</div>
    <div class="text row__date">{{ row_data.registration_date }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text{
  text-align: left;
  flex-basis: 25%;
  padding: 0.5rem  1rem;
}
.v-table-row {
  display: flex;
  justify-content: space-around;
}
</style>