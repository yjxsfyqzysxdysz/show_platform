<template>
  <div class="revision3">
revision3
  </div>
</template>

<script>
import colordata from './colorData.json'

export default {
  name: 'revision3',
  created() {
    this.colordata = colordata
    console.log('revision3-created')
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.revision3 {
}
</style>