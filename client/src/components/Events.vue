<template>
  <div>
    <el-timeline>
      <el-timeline-item
        v-for="event in eventList"
        :key="event._id"
        :icon="iconForEvent(event)"
        :type="typeForEvent(event)"
        :timestamp="event.time"
        size="large"
      >
        {{ event.type }} user {{ event._author }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style scoped>

</style>
<script>
  import { mapState } from 'vuex';

  import { Timeline, TimelineItem } from 'element-ui';

  export default {
    components: {
      [Timeline.name]: Timeline,
      [TimelineItem.name]: TimelineItem,
    },
    data() {
      return {};
    },
    computed: {
      ...mapState(['eventList']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchEventList');
    },
    methods: {
      iconForEvent(event) {
        const iconMap = {
          create: 'el-icon-plus',
          update: 'el-icon-edit',
          delete: 'el-icon-delete',
          view: 'el-icon-view',
        }

        return iconMap[event.type];
      },
      typeForEvent(event) {
        const typeMap = {
          create: 'success',
          update: 'warning',
          delete: 'danger',
          view: 'primary',
        }

        return typeMap[event.type];
      }

    }
  }
</script>
