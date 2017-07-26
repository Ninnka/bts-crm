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
            <div class="user-mes">已绑定2张</div>
            <div class="add-card">
              <div class="add-icon">+</div>
              <p>添加银行卡</p>
            </div>
          </li>
          <li class="band-card-list">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in CommonApi.bankList" :key="item.bankCode">
                <div class="band-cards is-flex">
                  <div class="band-card cold-bg">
                    <i class="iconfont item.icon"></i>
                    {{item.bankTitle}}
                    <i class="iconfont icon-shanchu"></i>
                    <div class="card-mes">
                      <p>谢**</p>
                      <p>8634 **** **** 8020</p>
                    </div>
                  </div>
                  <div class="band-card cold-bg">
                    <i class="iconfont item.icon"></i>
                    {{item.bankTitle}}
                    <i class="iconfont icon-shanchu"></i>
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
            <p>邀请链接：https://www.douban.com/group/topic/96482147/</p>
          </div>
          <button class="copy-btn hot-bg">复制推广链接</button>
        </div>
      </article>
      <article class="region my-mt-account">
        <header>我的MT账号</header>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="accountNumber"
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
              <i class="iconfont icon-shanchu"></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="mt-btns is-flex">
          <button class="hot-bg">申请MT账号</button>
          <button class="cold-bg">绑定MT账号</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountCenter',
  data () {
    return {
      tableData: [
        {
          accountNumber: '56735678',
          lever: '1:100',
          mainAccountNumber: true,
          del: ''
        },
        {
          accountNumber: '56735671',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735672',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735673',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735674',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735675',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        }
      ]
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
    changeTableData (value) {
      this.tableData.forEach((item) => {
        if (item.accountNumber !== value.accountNumber) {
          item.mainAccountNumber = false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .account-center {
    padding: 20px;
    align-items:flex-start;
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
              .band-card{
                width: 250px;
                border: 1px solid #55565c;
                border-radius:6px;
                height: 110px;
                color:#fff;
                padding:10px;
                .icon-shanchu {
                  float:right;
                  color: #fff;
                }
                .card-mes{
                  text-align: right;
                  margin-top: 30px;
                  p {
                    font-size: 14px;
                    margin: 10px 0;
                  }
                }
              }
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
