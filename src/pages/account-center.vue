<template>
  <div class="account-center is-flex">
    <article class="region user-overview">
      <header>用户概览</header>
      <div class="region-main">
        <ul class="user-list">
          <li class="align-top">
            <div class="user-label">用户头像：</div>
            <div class="user-mes">
              <div class="user-img">
                <img src="../assets/img/user.jpg" alt="JOHN DOE" />
              </div>
            </div>
            <button class="modify-btn" type="submit">修改</button>
          </li>
          <li>
            <div class="user-label">交易账号：</div>
            <div class="user-mes">JOHN DOE</div>
          </li>
          <li>
            <div class="user-label">昵称：</div>
            <div class="user-mes">方砖</div>
            <button class="modify-btn" type="submit">修改</button>
          </li>
          <li>
            <div class="user-label">密码：</div>
            <div class="user-mes">********</div>
            <button class="modify-btn" type="submit">修改</button>
          </li>
          <li>
            <div class="user-label">手机号码：</div>
            <div class="user-mes">13600000000</div>
          </li>
          <li>
            <div class="user-label">邮箱地址：</div>
            <div class="user-mes">molehe_1024@163.com</div>
            <button class="modify-btn" type="submit">修改</button>
          </li>
        </ul>

        <ul class="user-list">
          <li>
            <div class="user-label">姓名：</div>
            <div class="user-mes">谢霆锋</div>
          </li>
          <li>
            <div class="user-label">证件编号：</div>
            <div class="user-mes">[身份证]440111111111111111</div>
          </li>
          <li>
            <div class="user-label">证件有效期：</div>
            <div class="user-mes">2025年3月1日</div>
          </li>
          <li class="align-top">
            <div class="user-label">证件照片：</div>
            <div class="user-mes is-flex">
              <div class="add-card-btn">
                <div class="add-icon">+</div>
                <p>添加身份证正面</p>
              </div>
              <div class="add-card-btn">
                <div class="add-icon">+</div>
                <p>添加身份证反面</p>
              </div>
            </div>
          </li>
          <li>
            <div class="user-label">投递地址：</div>
            <div class="user-mes">广东省 广州市 荔湾区1850创意园</div>
            <button class="modify-btn" type="submit">修改</button>
          </li>
        </ul>
        <ul class="user-list">
          <li>
            <div class="user-label">银行卡：</div>
            <div class="user-mes">已绑定{{bankList.length}}张</div>
            <div class="add-card" @click="showAddBank = true">
              <div class="add-icon">+</div>
              <p>添加银行卡</p>
            </div>
          </li>
          <li class="band-card-list">
            <el-carousel height="150px" :autoplay=false>
              <el-carousel-item v-for="item in bankList">
                <div class="band-cards is-flex">
                  <div class="band-card cold-bg">
                    <div class="card-header">
                      <div class="band-name">
                        <svg class="icon" aria-hidden="true">
                          <use :xlink:href="'#'+item.icon"></use>
                        </svg>
                        {{item.bankTitle}}
                      </div>
                      <i class="iconfont icon-shanchu" @click="openDelBank(item)"></i>
                    </div>
                    <div class="card-mes">
                      <p>谢**</p>
                      <p>8634 **** **** 8020</p>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </li>
        </ul>
      </div>
    </article>
    <div class="user-right">
      <article class="region">
        <div class="region-main">
          <div class="img-qrCode">
            <img src="">
          </div>
          <div class="invite-mes">
            邀请码：888888865
            <p>邀请链接：{{inviteUrl}}</p>
          </div>
          <button class="copy-btn hot-bg" v-clipboard="inviteUrl" @success="handleSuccess" @error="handleError">复制推广链接</button>
        </div>
      </article>
      <article class="region my-mt-account">
        <header>我的MT账号</header>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="id"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="lever"
            label="杠杆">
          </el-table-column>
          <el-table-column
            label="主账号">
            <template scope="scope">
              <el-switch v-model="scope.row.mainAccountNumber" off-color="#999" on-color="#00cc00" @change="changeTableData(scope.row)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="del"
            label="操作">
            <template scope="scope">
              <i class="iconfont icon-bianji" @click="showModifyMt = true" ></i>
              <i class="iconfont icon-jinzhi" @click="showDisableMt = true"></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="mt-btns is-flex">
          <button class="hot-bg" @click="showAddMt = true">申请MT账号</button>
          <button class="cold-bg" @click="showBindMt = true">绑定MT账号</button>
        </div>
      </article>
    </div>
    <add-bank :show.sync="showAddBank"></add-bank>
    <popup :show.sync="showDelBank" :needCancel=true :title="'删除银行卡'" v-on:confirmEvent="delBank">
      <p name="content" class="del-text">
        您正在申请删除银行卡：
      </p>
      <div class="band-card cold-bg">
        <div class="card-header">
          <div class="band-name">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#'+selectBank.icon"></use>
            </svg>
            {{selectBank.bankTitle}}
          </div>
          <i class="iconfont icon-shanchu"></i>
        </div>
        <div class="card-mes">
          <p>谢**</p>
          <p>8634 **** **** 8020</p>
        </div>
      </div>
      <p>删除后，您将无法通过此银行卡进行出金，是否要删除该银行卡？</p>
    </popup>
    <modify-mt :show.sync="showModifyMt" v-on:confirmEvent="modifyMt"></modify-mt>
    <bind-mt :show.sync="showBindMt"></bind-mt>
    <popup :show.sync="showDisableMt" :needCancel=true :title="'禁用MT账号'" v-on:confirmEvent="disableMt">
      <p name="content" class="del-text">
        您正在申请禁用MT账号：54321，禁用后，该账号的所有持仓单将会被自动平仓，同时，您将无法再使用该MT账号进行任何交易以及出入金操作，是否继续？
      </p>
    </popup>
    <popup :show.sync="showAddMt" :needCancel=true :title="'申请MT账号'" v-on:confirmEvent="addMt">
      <p name="content" class="del-text">
        本系统限制每个用户每个Book内只允许申请 5 个MT账户，您已经开通了 {{tableData.length}} 个MT账号了，是否继续申请MT账号？
      </p>
    </popup>
  </div>
</template>

<script>
import addBank from '@comps/account-center/add-bank.vue';
import modifyMt from '@comps/account-center/modify-mt.vue';
import bindMt from '@comps/account-center/bind-mt.vue';
import popup from '@comps/popup.vue';
export default {
  name: 'AccountCenter',
  components: {
    'add-bank': addBank,
    'modify-mt': modifyMt,
    'bind-mt': bindMt,
    popup
  },
  data () {
    return {
      showAddBank: false,
      showModifyMt: false,
      showDisableMt: false,
      showAddMt: false,
      showBindMt: false,
      showDelBank: false,
      inviteUrl: 'https://www.douban.com/group/topic/96482147/',
      tableData: [
        {
          id: '56735678',
          lever: '1:100',
          mainAccountNumber: true
        },
        {
          id: '56735671',
          lever: '1:100',
          mainAccountNumber: false
        },
        {
          id: '56735672',
          lever: '1:100',
          mainAccountNumber: false
        },
        {
          id: '56735673',
          lever: '1:100',
          mainAccountNumber: false
        },
        {
          id: '56735674',
          lever: '1:100',
          mainAccountNumber: false
        }
      ],
      selectBank: {}
    };
  },
  computed: {
    bankList () {
      return this.$store.state.bankList;
    }
  },
  created: function () {
    this.$store.commit('updateBankList', this.CommonApi.bankList.filter((item, index) => {
      if (index < 5) {
        return item;
      }
    }));
    this.selectBank = this.bankList[0];
  },
  methods: {
    handleSuccess (e) {
      console.log(e);
    },
    handleError (e) {
      console.log(e);
    },
    changeTableData (value) {
      this.tableData.forEach((item) => {
        if (item.accountNumber !== value.accountNumber) {
          item.mainAccountNumber = false;
        }
      });
    },
    openDelBank (item) {
      this.selectBank = item;
      this.showDelBank = true;
    },
    delBank () {
      this.showDelBank = false;
      this.$store.commit('updateBankList', this.bankList.filter((item) => {
        if (item !== this.selectBank) {
          return item;
        }
      }));
//      this.bankList = this.bankList.filter((item) => {
//        if (item.bankCode !== this.selectBank.bankCode) {
//          return item;
//        } else {
//          var index = this.bankList.indexOf(item);
//          this.bankList.splice(index, 1);
//          return item;
//        }
//      });
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
    },
    disableMt () {
      this.showDisableMt = false;
      this.$message({
        type: 'success',
        message: '禁用成功!'
      });
    },
    addMt () {
      this.showAddMt = false;
      this.$message({
        type: 'success',
        message: '添加成功!'
      });
    }

  }
};
</script>

<style lang="less" scoped>
  .account-center {
    padding: 20px;
    align-items:flex-start;
    .band-card{
      width: 250px;
      border: 1px solid #55565c;
      border-radius:6px;
      height: 110px;
      color:#fff;
      padding:10px;
      .card-header{
        text-align: left;
        display: flex;
        align-items: center;
        .band-name{
          flex:1;
          display: flex;
          align-items:flex-start;
          .icon{
            background:rgba(255,255,255,0.80);
            width:31px;
            height:31px;
            border-radius:100%;
            margin-right:13px;
            use{
              width:27px;
              height:27px;
            }
          }
        }
        .icon-shanchu {
          color: #fff;
          float:right;
        }
      }
      .card-mes{
        text-align: right;
        margin-top: 30px;
        p {
          font-size: 14px;
          margin: 10px 0;
          text-align: right;
        }
      }
    }
    .add-card-btn {
      text-align: center;
      color: #94959a;
      flex: 1;
      margin-right: 20px;
      border:1px solid #55565c;
      border-radius:9px;
      height:130px;
      .add-icon{
        font-size: 60px;
        height: 60px;
        line-height: 60px;
        margin-top: 20px;
      }
      p{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }
    }
    .user-overview{
      text-align: center;
      flex:1;
      margin-right:20px;
      .region-main{
        padding: 0 20px;
        .user-list{
          box-sizing: border-box;
          width:100%;
          height: auto;
          padding: 0px 20px 20px 20px;
          border-bottom: 2px solid #22232a;
          overflow:hidden;
          .align-top{
            align-items: flex-start;
          }
          li{
            width: 100%;
            margin: 10px 0;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .user-label{
              width: 100px;
              font-size:14px;
              color:#94959a;
            }
            .user-mes{
              flex: 1;
              font-size:18px;
              color:#ffffff;
              .user-img{
                width: 70px;
                height: 70px;
                margin-top: -10px;
                border-radius: 50%;
                img{
                  border-radius: 50%;
                }
              }
            }
            .add-card{
              color: #fff;
              display: flex;
              align-items: center;
              .add-icon{
                display: inline-block;
                margin-right: 10px;
                font-size: 20px;
              }
            }
            .modify-btn{
              width: 60px;
              height: 25px;
              line-height: 25px;
              border:1px solid #55565c;
              border-radius:6px;
              background: #272a31;
              color: #94959a;
              fon-size:12px;
            }
          }
          .band-card-list{
            width:100%;
            height:150px;
            display:block;
            .band-cards{
              width: 100%;
              justify-content: space-around;
            }
          }
        }
      }
    }
    .user-right{
      flex: 1;
      .region-main{
        width:100%;
        text-align:center;
        padding-top: 43px;
        padding-bottom:40px;
        .img-qrCode{
          img{
            border:1px solid #55565c;
            width:150px;
            height:150px;
          }
        }
        .invite-mes{
          margin-top: 25px;
          font-size: 18px;
          color:#94959a;
          p{
            margin-top: 10px;
            font-size:14px;
          }
        }
        .copy-btn{
          margin-top: 30px;
          font-size: 16px;
          color: #ffffff;
          width:190px;
          height:40px;
          border-radius: 4px;
        }
      }
      .my-mt-account{
        margin-top: 20px;
        .mt-btns{
          margin-top:48px;
          justify-content: space-around;
          padding-bottom:54px;
          button{
            width:30%;
            height:40px;
            border-radius: 4px;
            font-size:16px;
            color:#fff;
          }
        }
      }
    }
  }

</style>
