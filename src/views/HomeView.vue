<template>
  <div class="home">
    <v-table
        :users_data="USERS"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import VTable from "@/components/table/v-table";


export default {
  name: 'HomeView',
  components: {VTable},
  data: () => ({}),
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>
