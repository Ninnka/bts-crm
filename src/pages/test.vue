<template>
  <div class="test">
    <button class="cold-bg">冷色渐变</button>
    <button class="hot-bg">热色渐变</button>
    <div class="is-flex test-main">
      <article class="region">
      <header>
        模块一
      </header>
      <div class="region-main">

      </div>
      </article>
      <article class="region">
      <header>
        模块二
      </header>
      <div class="region-main">

      </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      show: false
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
    contralPopup () {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .test{
    .test-main{
      width: 100%;
      .region{
        flex: 1;
        margin:0 10px;
      }
    }
    button{
      width: 100px;
      height: 40px;
    }
  }
</style>
