<template>
  <div>
    this is base template
    <parent>
      <template v-slot:header="{data: ccc}">
        <h1>Here might be a page title</h1>
        this is vue slot, child template
        <input type="text" v-model="ccc.bbb" />
        <p>{{ccc}}</p>
      </template>
    </parent>
  </div>
</template>

<script>
import parent from './parent'
export default {
  components: {
    parent
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="less">
</style>