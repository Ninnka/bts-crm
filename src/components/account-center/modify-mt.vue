<template>
  <article class="popup modify-mt" v-show="show">
    <div class="popup-main">
      <header>
        编辑MT账号
        <i class="close" @click="close">×</i>
      </header>
      <div class="popup-content">
        <el-form v-model="form" label-width="100px">
          <el-form-item label="MT账号">
            <el-input v-model="form.id" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.pas" placeholder="请输入新的MT账号交易密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="form.surePas" placeholder="请再次输入交易密码"></el-input>
          </el-form-item>
          <el-form-item label="交易杠杆">
            <el-select v-model="form.leverage" placeholder="请选择交易杠杆">
              <el-option  v-for="item in leverageList" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="验证码" class="verify-input">
            <el-input v-model="form.verify" placeholder="请输入右侧验证码"></el-input>
            <div class="verify-img">
              <img src="../../assets/img/logo.png"/>
            </div>
          </el-form-item>
        </el-form>
        <div class="popup-btns">
          <button class="hot-bg" @click="close">取消</button>
          <button class="cold-bg" @click="modifyMt">确定</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'modify-mt',
  data () {
    return {
      selectMt: {},
      form: {
        id: '',
        pas: '',
        surePas: '',
        leverage: '',
        verify: ''
      },
      leverageList: [
        '1:100',
        '1:200',
        '1:300',
        '1:400'
      ]
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    seletMt: {
      type: Object,
      default: {}
    }
  },
  computed: {
    MtList () {
      return this.$store.state.MtList;
    }
  },
  created: function () {
  },
  watch: {
    seletMt: {
      handler: function (val) {
        this.form.id = val.id;
        this.form.leverage = val.lever;
      },
      deep: true
    }
  },
  methods: {
    close () {
      for (let item in this.form) {
        this.form[item] = '';
      };
      this.$emit('update:show', false);
    },
    modifyMt () {
      if (this.form.pas === '' || this.form.surePas === '') {
        this.$message({
          type: 'success',
          message: '内容不许为空!'
        });
      } else {
        this.$store.commit('updateModifyMt', this.form);
        this.$message({
          type: 'success',
          message: '修改成功'
        });
        this.close();
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .modify-mt{
    .verify-input{
      text-align: left;
      .el-input{
        width: 60%;
        margin-right: 5%;
      }
      .verify-img{
        display: inline-block;
        width: 24%;
        height: auto;
      }
    }
  }
</style>
