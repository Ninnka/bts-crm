<template>
  <div class="content--main">
    <div class="content--main__item account">
      <article class="item__header">
        <header>
          用户概览
        </header>
      </article>
      <div class="item__wrap user--profile is-flex">
        <div class="profile--summary">
          <div class="profile--avatarinfo">
            <img src="../assets/img/index-avatar.png" alt="user--avatar">
            <div class="disp-ib">
              <p>JOHN DOE</p>
              <p>1234666688</p>
              <p>邀请码：8888888886</p>
            </div>
            <i class="el-icon-setting posi-abs custom-icon-setting"></i>
          </div>
          <div class="invite--link">
            <p>邀请链接：https://www.douban.com/group/topic/97123912</p>
          </div>
        </div>
        <div class="profile--account is-flex">
          <div class="account--item">
            <img src="../assets/img/Mt.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
          <div class="account--item">
            <img src="../assets/img/hold-account.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
          <div class="account--item">
            <img src="../assets/img/icon-documentary.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-flex assets--dealer">
      <div class="content--main__item assets">
        <article class="item__header">
          <header>
            资产概况
            <div class="posi-abs header__more">
              <i class="iconfont icon-more"></i>
            </div> 
          </header>
        </article>
        <div class="item__wrap">
          <pie-echart-comp ref="positionStructureComp" :pieOption="positionsStructureOption"></pie-echart-comp>
          <div class="posi-abs asset--status">
            <p>总资产</p>
            <p>$888,888,888</p>
          </div>
          <div class="posi-abs asset--money">
            <p class="">$123,123,212</p>
            <p class="">$453,465</p>
            <p class="">$548,343</p>
            <p class="">$12,213</p>
          </div>
        </div>
      </div>
      <div class="dealer--entry">
        <div class="content--main__item dealer">
          <article class="item__header">
            <header>
              交易概况
              <div class="posi-abs header__more">
                <i class="iconfont icon-more"></i>
              </div>
            </header>
          </article>
          <div class="is-flex dealer--content">
            <div class="">
              <p>总开仓数：12</p>
              <p>$999,999.00</p>
            </div>
            <div class="">
              <p>总平仓数：13</p>
              <p>$999,999.00</p>
            </div>
          </div>
        </div>
        <div class="is-flex entry--leave">
          <div class="entry">
            <p>出金总数：$6,545.00</p>
            <div class="btn entry--btn">出金</div>
          </div>
          <div class="leave">
            <p>入金总数：$6,545.00</p>
            <div class="btn leave--btn">入金</div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-flex positions--commission">
      <div class="content--main__item positions">
        <article class="item__header">
          <header>
            持仓概况
            <div class="posi-abs header__more">
              <i class="iconfont icon-more"></i>
            </div>
          </header>
        </article>
        <div class="positions--summary">
          <p>
            <span>占用保证金：$222,222.00</span>
            <span>跟单手数：$22,222.00</span>
          </p>
          <p>浮动盈亏：<span class="positions--summary--hightlight">$88,888.00</span></p>
        </div>
        <div class="positions-chart">
          <trend-line-echart-comp :positionsOptions="positionsOptions"></trend-line-echart-comp>
        </div>
      </div>
      <div class="commission--activity">
        <div class="content--main__item commission">
          <article class="item__header">
            <header>
              我的佣金
              <div class="posi-abs header__more">
                <i class="iconfont icon-more"></i>
              </div>
            </header>
          </article>
          <div class="is-flex commission__promote--distribution">
            <div class="promote">
              <p>推广赠金</p>
              <p>$888,788.00</p>
            </div>
            <div class="distribution">
              <p>分销赠金</p>
              <p>$88,788.00</p>
            </div>
          </div>
        </div>
        <div class="content--main__item activity">
          <article class="item__header">
            <header>
              最新活动
              <div class="posi-abs header__more">
                <i class="iconfont icon-more"></i>
              </div>
            </header>
          </article>
          <div class="activity--wrap">
            <swiper :options="activitySwiperOption">
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>

    <div class="content--main__item calendar--news__wrap">
      <article class="item__header">
        <header>
          时事日历
          <div class="posi-abs header__more">
            <i class="iconfont icon-more"></i>
          </div>
        </header>
      </article>
      <div class="item__wrap is-flex calendar--news">
        <div class="calendar__wrap">
          <calendar-comp :date="dateToSet" :newsTableData="newsTableData"></calendar-comp>
        </div>
        <div class="news__wrap">
          <el-table id="news-table" :data="newsTableData" style="width: 100%" max-height="320" header-align="center" :row-class-name="tableRowClassName">
            <el-table-column prop="time" label="时间" min-width="75" width="115">
              <template scope="scope">
                {{ formatDate(scope.row.time) }}
              </template>
            </el-table-column>
            <el-table-column prop="country" label="国家/地区" min-width="96">
              <template scope="scope">
                <img :src="scope.row.countryIcon" alt="" class="country--icon">
              </template>
            </el-table-column>
            <el-table-column prop="theme" label="指标名称" min-width="160">
              <template scope="scope">
                <a :href="scope.row.link" target="_blank">{{scope.row.theme}}</a>
              </template>
            </el-table-column>
            <el-table-column prop="level" label="重要程度" width="170">
              <template scope="scope">
                <el-rate v-model="scope.row.level" disabled text-color="#ff9900"></el-rate>
              </template>
            </el-table-column>
            <el-table-column prop="influence" label="影响" width="110" :render-header="newsTablerenderHeader">
              <template scope="scope">
                <div class="influence--item" :class="scope.row.status > 0 ? 'up' : 'down'">{{scope.row.status > 0 ? '↑' : '↓'}} {{ scope.row.influence }} {{influenceStatus}}</div>
              </template>
            </el-table-column>
            <el-table-column label="分享" width="74">
              <template scope="scope">
                <i class="el-icon-share" @click="shareNews"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="content--main__item dealer--detail__wrap">
      <article class="item__header">
        <header>
          交易行情
          <div class="posi-abs add--more" @click="showPopup">
            <span>添加行情</span>
            <i class="el-icon-plus"></i>
          </div>
        </header>
      </article>
      <div class="item__wrap is-flex dealer--detail">
        <dealer-detail-comp v-for="(item, index) in dealerDetailArr" :key="index" :compOption="item" :dealerDetailOption="dealerDetailOption"></dealer-detail-comp> 
      </div>
    </div>

    <!-- <div v-if="" class="posi-abs popup-wrap">

    </div> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import dealerDetailComp from '@comps/dealer-detail-comp';
import calendarComp from '@comps/calendar-comp';
import pieEchartComp from '@comps/pie-echart-comp';
import trendLineEchartComp from '@comps/trend-line-echart-comp';

import tmpDataMixin from '@mixins/tmp-data-mixin';

import moment from 'moment';

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    calendarComp,
    pieEchartComp,
    trendLineEchartComp,
    dealerDetailComp
  },
  mixins: [tmpDataMixin],
  data () {
    return {
      dateToSet: new Date(),
      dealerDetailArr: [
        {
          selectedInterval: '1M',
          yAxisName: '美元/日元'
        },
        {
          selectedInterval: '5M',
          yAxisName: '美元/欧元'
        }
      ],
      influenceStatus: '原油',
      aClassfyArr: ['金银', '原油', '欧元', '铂钯', '铜', '英镑', '日元', '瑞郎', '澳元'],
      bClassfyArr: ['美元', '加元']
    };
  },
  computed: {
  },
  created: function () {
  },
  mounted () {
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 1) {
        return 'even-row';
      }
      return 'odd-row';
    },
    formatDate (time) {
      return moment(time).format('hh:mm');
    },
    shareNews () {
      console.log('shareNews');
    },
    showPopup () {
      console.log('showPopup');
    },
    addMoreQuotation () {
      console.log('addMoreQuotation');
    },
    newsTablerenderHeader (createElement, { column }) {
      let aClassfies = this.aClassfyArr.map((currentValue, index, array) => {
        return createElement('el-radio', {
          class: {
            radio: true
          },
          props: {
            label: currentValue,
            value: this.influenceStatus
          },
          on: {
            input: (label) => {
              this.influenceStatus = label;
            }
          }
        }, [currentValue]);
      });
      let bClassfies = this.bClassfyArr.map((currentValue, index, array) => {
        return createElement('el-radio', {
          class: {
            radio: true
          },
          props: {
            label: currentValue,
            value: this.influenceStatus
          },
          on: {
            input: (label) => {
              this.influenceStatus = label;
            }
          }
        }, [currentValue]);
      });
      return createElement(
        'el-dropdown', {
          attrs: {
            trigger: 'click'
          },
          props: {
            isVisible: false
          }
        }, [
          createElement('span', [
            column.label,
            createElement('i', {
              class: {
                'el-icon-arrow-down': true,
                'el-icon--right': true
              }
            })
          ], {
            class: {
              'el-dropdown-link': true
            }
          }),
          createElement('el-dropdown-menu', {
            slot: 'dropdown'
          }, [
            createElement('el-dropdown-item', {
              class: {
                'is-flex': true
              },
              style: {
                'align-items': 'flex-start'
              }
            }, [
              'A类：',
              createElement('div', {
                style: {
                  'max-width': '200px'
                }
              }, [...aClassfies])
            ]),
            createElement('el-dropdown-item', {
              class: {
                'is-flex': true
              }
            }, [
              'B类：',
              createElement('div', {
                style: {
                  'max-width': '200px'
                }
              }, [...bClassfies])
            ])
          ]
          )
        ]
      );
    }
  }
};
</script>

<style lang="less">
@main-theme-sub: #94959a;

.disp-ib {
  display: inline-block;
}
.posi-abs {
  position: absolute;
}
.text-center {
  text-align: center;
}
.content--main {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}
.content--main__item {
  background:#272a31;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 1;
}
.item__header{
  header{
    height: 45px;
    line-height: 45px;
    text-align: left;
    font-size:16px;
    color: #ffffff;
    position: relative;
    &:before{
      content:'';
      display: inline-block;
      vertical-align: top;
      margin-right: 10px;
      width: 4px;
      height: 100%;
      background-image: linear-gradient(-180deg, #00e2b8 0%, #009acd 100%);
    }
  }
  .header__more {
    top: 0;
    right: 16px;
    height: 24px;
    width: 10px;
    i {
      color: #454b58 !important;
      font-size: 24px;
    }
  }
}
.item__wrap{
  min-height: 40px;
  position: relative;
  height: calc(~"100% - 45px");
}

.echarts {
  width: 100% !important;
  height: 100% !important;
}

// --------------------

.account {
  margin-bottom: 14px;
}
.user--profile {
  height: 155px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 0 8px 42px;
  > div {
    height: 100%;
    flex-shrink: 1;
    flex-grow: 1;
  }
}

.profile--summary {
  width: 38.22%;
  box-sizing: border-box;
  border-right: 2px solid #1d2027;
  height: 100px;
  position: relative;
  text-align: left;
  > div {
    width: 100%;
  }
}

.profile--avatarinfo {
  margin-bottom: 20px;
  > img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    vertical-align: top;
  }
  div:nth-child(2) {
    margin-left: 20px;
    color: white;
    line-height: 1.4;
    > p:not(:first-child) {
      color: @main-theme-sub;
    }
  }
}
.invite--link {
  font-size: 14px;
  color: #94959a;
  text-align: left;
}

.custom-icon-setting {
  top: 0;
  right: 12%;
  width: 18px;
  height: 20px;
  color: @main-theme-sub;
}

.profile--account {
  width: 60%;
  justify-content: space-around;
  align-items: center;
  > div {
    flex-basis: 33%;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.account--item {
  .item-desc {
    margin-left: 25px;
    text-align: left;
    p:nth-child(1) {
      font-size: 14px;
      color: @main-theme-sub;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      font-size: 18px;
      color: #ffffff;
      span:first-child {
        font-size: 32px;
        margin-right: 8px;
      }
    }
  }
  > img {
    max-width: 68px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}

// ---------------------

.assets--dealer {
  justify-content: space-between;
  margin-bottom: 14px;
}

.assets {
  width: 49%;
  max-width: 49%;
  height: 284px;
  // margin-right: 16px;
}

.dealer--entry {
  width: 50%;
  height: 284px;
}

.dealer {
  height: 146px;
  margin-bottom: 14px;
}

.asset--status {
  top: 80px;
  left: 120px;
  color: #ffffff;
  > p{
    &:first-child {
      font-size: 14px;
    }
    &:last-child {
      font-size: 24px;
      max-width: 120px;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
}

.asset--money {
  top: 45px;
  right: 90px;
  color: #ffffff;
  p {
    margin-bottom: 23px;
  }
}

.dealer--content {
  box-sizing: border-box;
  justify-content: space-between;
  padding-bottom: 10px;
  height: 101px;
  text-align: left;
  > div {
    width: 50%;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      border-right: 2px solid #1d2027;
    }
  }
  p {
    &:first-child {
      font-size: 18px;
      color: #00dfb9;
      margin-left: 41px;
      margin-bottom: 12px;
    }
    &:last-child {
      font-size: 32px;
      color: #ffffff;
      margin-left: 63px;
    }
  }
}

.entry--leave {
  height: 124px;
  justify-content: space-between;
  color: #ffffff;
  .btn {
    cursor: pointer;
  }
  > div {
    background: #272a31;
    flex-basis: 50%;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      margin-right: 13px;
    }
    > p {
      font-size: 18px;
      margin: 22px 0 22px;
    }
  }
}

.entry--btn {
  background-image: linear-gradient(-90deg, #00e2b8 0%, #009acd 100%);
  border-radius: 4px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: auto;
}

.leave--btn {
  background-image: linear-gradient(-90deg, #ff5862 0%, #e54f9a 100%);
  border-radius: 4px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: auto;
}

// -------------------------

.positions--commission {
  justify-content: space-between;
  margin-bottom: 14px;
}

.positions {
  width: 49%;
  max-width: 49%;
  height: 465px;
  // margin-right: 16px;
  text-align: left;
}

.positions--summary {
  box-sizing: border-box;
  margin-top: 12px;
  padding-left: 35px;
  color: #ffffff;
  p {
    font-size: 14px;
    &:first-child {
      margin-bottom: 26px;
      span:first-child {
        margin-right: 60px;
      }
    }
  }
  &--hightlight {
    color: red;
  }
}

.positions-chart {
  height: 340px;
}

.commission--activity {
  width: 50%;
  height: 465px;
}

.commission {
  height: 146px;
  margin-bottom: 13px;
}

.commission__promote--distribution {
  height: 101px;
  justify-content: space-between;
  text-align: left;
  box-sizing: border-box;
  padding-bottom: 9px;
  > div {
    height: 100%;
    width: 50%;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      border-right: 2px solid #1d2027;
    }
    p {
      margin-left: 53px;
      &:first-child {
        font-size: 14px;
        color: @main-theme-sub;
        margin-bottom: 9px;
        margin-top: 20px;
      }
      &:last-child {
        color: #ffffff;
        font-size: 32px;
      }
    }
  }
}

.activity {
  height: 307px;
}

.activity--wrap {
  height: 262px;
  box-sizing: border-box;
  padding: 17px 11px 14px;
}

.swiper-container {
  height: 100% !important;
}
.swiper-slide {
  img {
    width: 100%;
  }
}

// --------------------------

.calendar--news__wrap {
  height: 420px;
  margin-bottom: 14px;
}

.calendar--news {
  height: calc(~"100% - 45px");
  box-sizing: border-box;
  padding: 22px 51px 0 57px;
  justify-content: space-between;
  > div {
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.calendar__wrap {
  flex-basis: 27.61%;
  max-width: 27.61%;
}

.news__wrap {
  flex-basis: 64%; 
  max-width: 64%;
  a {
    &:hover {
      color: #333333;
    }
  }
}

.influence--item {
  padding: 0 4px;
  border-radius: 3px;
  width: 70px;
  height: 24px;
  font-size: 12px;
  &.up {
    border: 1px solid #00dfb9;
    color: #00dfb9;
  }
  &.down {
    border:1px solid #ff3b6a;
    color: #ff3b6a;
  }
}

.country--icon {
  width: 38px;
}

.el-table {
  background: #272a31 !important;
  text-align: center;
  color: #ffffff;
  border-width: 0;
  *:not(.influence--item) {
    border-width: 0 !important;
  }
}

.el-table .odd-row {
  background: #272a31;
}

.el-table .even-row {
  background: #22252d;
}

.el-table__header .el-dropdown {
  color: @main-theme-sub;
}

.el-table__header tr {
  background-color: #1e2128 !important;
}

.el-table__header tr th {
  background-color: #1e2128 !important;
}

.el-table__header-wrapper thead div {
  background-color: #1e2128 !important;
}

.el-table th>.cell {
  text-align: center;
  color: @main-theme-sub;
}

.el-table td, .el-table th.is-leaf {
  border-width: 0 !important;
}

.el-table::after, .el-table::before {
  background-color: transparent !important;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background: initial;
}

.el-table__row {
  a:hover {
    color: #ffffff;
  }
}

.el-table td, .el-table th {
  padding: 7px 0;
}

.el-dropdown-menu__item {
  .el-radio {
    margin: 0 15px 0 0;
    min-width: 51px;
  }
}

// --------------------------

.dealer--detail__wrap {
  min-height: 465px;
}

.dealer--detail {
  min-height: calc(~"100% - 45px");
  justify-content: space-between;
  margin-top: 20px;
  > div {
    margin: 0 1.2% 2.2%;
    flex-basis: 50%;
    flex-shrink: 1;
    flex-grow: 1;
    height: 360px;
    max-width: 50%;
    position: relative;
    overflow: hidden;
  }
}

.dealer--detail--dropdown {
  top: 18px;
  right: 3%;
  .el-dropdown-link {
    color: @main-theme-sub;
  }
}

.add--more {
  right: 38px;
  top: 0;
  color: @main-theme-sub;
  cursor: pointer;
  * {
    vertical-align: middle;
  }
  span {
    font-size: 14px;
  }
  i {
    font-size: 11px;
    margin-left: 9px;
  }
}

// ------------------------
.popup-wrap {
  margin: 0 auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>
