<template>
  <div class="popup" v-show="show">
    <article class="popup-main">
      <header>
        头部信息
        <i class="close" @click="contralPopup">×</i>
      </header>
      <div class="popup-content">
        <button>确认按钮</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'report',
  data () {
    return {
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
</style>
