<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">Name
        <span class="material-icons">
          unfold_more
        </span>
      </p>
      <p @click="sortByPointsEarned">Points earned <span class="material-icons">
          unfold_more
        </span></p>
      <p @click="sortByPointsSpent">Points spent <span class="material-icons">
          unfold_more
        </span></p>
      <p @click="sortByDate">Registration date <span class="material-icons">
          unfold_more
        </span></p>
    </div>
    <div class="v-table__body">
      <v-table-row
          v-for="row in paginatedUsers"
          :key="row.id"
          :row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div class="page"
           v-for="page in pages"
           :key="page"
           :class="{'current__page':page===pageNumber}"
           @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import VTableRow from "@/components/table/v-table-row";


export default {
  name: "v-table",
  components: {VTableRow},
  data: () => ({
    usersPerPage: 10,
    pageNumber: 1
  }),
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {

    pages() {
      return Math.ceil(this.users_data.length / this.usersPerPage)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage
      let to = from + this.usersPerPage
      return this.users_data.slice(from, to)
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page
    },
    sortByName() {
      this.users_data.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortByPointsEarned() {
      this.users_data.sort((a, b) => a.points_earned - b.points_earned)
    },
    sortByPointsSpent() {
      this.users_data.sort((a, b) => a.points_spent - b.points_spent)
    },
    sortByDate() {
      this.users_data.sort((a, b) => a.registration_date.localeCompare(b.registration_date))
    }
  },
}
</script>

<style lang="scss" scoped>

.v-table {
  max-width: 1200px;
  margin: 0 auto;
}

.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #42b983;
}

.v-table__header p {
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: left;
}

.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.875rem;
}

.page {
  margin-right: 0.2rem;
  padding: 0.5rem;
  border: 1px solid #42b983;

  &:hover {
    cursor: pointer;
    background: #b4ced9;
  }
}

.current__page {
  background: #b4ced9;
}
</style>










