export default {

  methods: {
    selectGroup: function (index) {
      this.$store.dispatch('setCurrentGroup', index)
    }
  },
  computed: {
    groups () {
      return this.$store.getters.groups
    }
  }
}
