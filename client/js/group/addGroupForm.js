export default {
  methods: {
    getGroupName (e) {
      this.$store.dispatch('getGroupName', e.target.value)
    },
    addGroup () {
      this.$store.dispatch('addGroup')
    }
  },
  computed: {
    newGroupName () {
      return this.$store.getters.groupName
    }
  }
}
