<template>
  <div class="revision2" :style="{'background-color': colorInfo.HEX}">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
import colordata from './colorData.json'
import annulus from '@com/canvas/annulus'
import barBhart from '@com/canvas/barBhart'

export default {
  name: 'revision2',
  components: {
    annulus,
    barBhart
  },
  created() {
    this.colordata = colordata
  },
  data() {
    return {
      colordata: [],
      colorInfo: {
        cmyk: [],
        rgb: [],
        HEX: '#64363C',
        mainText: '紅梅',
        subText: 'KOHBAI'
      },
    }
  },
  methods: {
    filterTextColor(index) {
      let color = ''
      switch (index) {
        case 0:
          color = '#0093d3'
          break;
        case 1:
          color = '#cc006b'
          break;
        case 2:
          color = '#fff10c'
          break;
        case 3:
          color = '#000000'
          break;
        default:
          color = '#ffffff'
          break;
      }
      return color
    },
  },
}
</script>

<style lang="less" scoped>
.revision2 {
}
</style>