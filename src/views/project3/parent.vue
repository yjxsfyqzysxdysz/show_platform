<template>
  <div>
    this is vue slot, father template
    <input type="text" v-model="obj.aaa" />
    <p>{{obj}}</p>
    <slot name="header" :data="obj">
      slot header
    </slot>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      obj: {
        aaa: 1, bbb: 2
      }
    }
  },
}
</script>
