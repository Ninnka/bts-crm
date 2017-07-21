<template>
  <div class="tab">
    <recharge :show.sync="showRecharge"></recharge>
    <header class="tab-head is-flex">
      <h1>
        <img src="../assets/img/logo.png" :alt="DeployApi.SystemName">
      </h1>
      <h2>{{DeployApi.SystemName}}</h2>
      <nav class="is-flex">
        <ul class="is-flex">
          <li v-for="item in navList" :key="item.icon" @click="userAction(item.index)">
            <i class="iconfont" :class="item.icon"></i>
          </li>
        </ul>
        <div class="user-menu">
          <el-dropdown @command="userAction">
          <span class="el-dropdown-link">
            <img src="../assets/img/user.jpg" />
            {{user.name}}
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userCenter">个人信息</el-dropdown-item>
              <el-dropdown-item command="book">切换Book</el-dropdown-item>
              <el-dropdown-item command="changePas">修改密码</el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </nav>
    </header>
    <div class="tab-main">
      <div class="tab-nav">
        <el-menu :default-active="defaultRoute" class="el-menu-vertical-demo" @select="goRouter">
          <el-menu-item v-for="item in navLeftList" :key="item.index" :index="item.index">
            <i class="iconfont" :class="item.icon"></i>
            {{item.text}}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="tab-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import recharge from '@comps/recharge.vue';
export default {
  name: 'Tab',
  components: {
    recharge
  },
  data () {
    return {
      defaultRoute: 'index',
      user: {
        name: 'zhou'
      },
      navList: [
        {
          icon: 'icon-churujinguanli',
          index: 'recharge'
        },
        {
          icon: 'icon-churujinguanli',
          index: 'mention'
        }
      ],
      navLeftList: [
        {
          index: 'index',
          icon: 'icon-shouye',
          text: '首页'
        },
        {
          index: 'analysis-transaction',
          icon: 'icon-jiaoyifenxi',
          text: '交易记录'
        },
        {
          index: 'fund-management',
          icon: 'icon-churujinguanli',
          text: '资金管理'
        },
        {
          index: 'report',
          icon: 'icon-baobiao',
          text: '报表'
        },
        {
          index: 'test',
          icon: 'icon-baobiao',
          text: '公共样式'
        }
      ],
      showRecharge: false
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
    userAction (command) {
      switch (command) {
        case 'recharge' :
          this.showRecharge = true;
          break;
        case 'mention' :
          this.$router.push('/tab/account-center');
          break;
        case 'userCenter' :
          this.$router.push('/tab/account-center');
          break;
        case 'book' :
          this.$router.push('/tab/user');
          break;
        case 'changePas' :
          this.$router.push('/tab/user');
          break;
        case 'exit' :
          this.$router.push('/tab/user');
          break;
      }
    },
    goRouter (index) {
      this.$router.push('/tab/' + index);
    }
  }
};
</script>

<style lang="less" scoped>
.tab {
  width: 100%;
  height: 100%;
  position: relative;
  .tab-head{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #000;
    position: relative;
    color:#94959a;
    background:#23262d;
    box-sizing: border-box;
    h1{
      width: 60px;
      margin: 0 20px;
      height: auto;
    }
    h2{
      height: 100%;
      font-size:18px;
      font-weight: 600;
      color:#00a4ca;
    }
    nav{
      position: absolute;
      width: auto;
      height: 60px;
      line-height: 60px;
      right: 30px;
      top: 0;
      color: #94959a;
      ul{
        flex: 1;
        justify-content: space-around;
        li{
          margin-right: 40px;
          width: 25px;
          height: auto;
          i{
            font-size: 25px;
          }
        }
      }
      .user-menu{
        width: auto;
        height: 60px;
        display: flex;
        img{
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .icon{
          width: 30px;
          height: 30px;
        }
        .el-dropdown{
          width: auto;
          height: 60px;
          line-height: 60px;
          color: #94959a;
          text-align: left;
          font-size: 16px;
          i{
            font-size: 12px;
          }
        }
      }
    }
  }
  .tab-main{
    width: 100%;
    height: calc(~"100% - 60px");
    display: flex;
    .tab-nav{
      width: 100px;
      height: 100%;
      background:#30333c;
      .el-menu{
        background:#30333c;
        font-size:14px;
        line-height:14px;
      }
      .el-menu-item{
        color:#5e718d;
        height: 100px;
        text-align: center;
        line-height: 20px;
        overflow: hidden;
        i{
          display: block;
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 30px;
          margin-top: 25px;
        }
      }
      .el-menu-item:nth-of-type(1){
        text-indent: 0;
      }
      .el-menu-item:hover{
        color:#52e3ff;
        background:#30333c;
      }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        color: #52e3ff;
        background: #26282f;
      }
    }
    .tab-content{
      flex: 1;
      background: #212227;
      box-shadow: inset 4px 2px 4px 0 rgba(0,0,0,0.50);
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
