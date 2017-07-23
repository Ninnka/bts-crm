export default {
  data () {
    let xAxisData = [];
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        xAxisData.push('0' + i + ':00');
      } else {
        xAxisData.push(i + ':00');
      }
    }
    return {
      positionsStructureOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          align: 'left',
          orient: 'vertical',
          x: 'right',
          y: 'center',
          left: '55%',
          top: '16%',
          data: ['可用资金', '占用保证金', 'MT帐余额', '赠金'],
          itemGap: 20,
          itemWidth: 20,
          itemHeight: 20,
          textStyle: {
            color: '#ffffff'
          }
        },
        series: [
          {
            name: '持仓组成',
            type: 'pie',
            radius: ['55%', '75%'],
            center: [180, '50%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: false,
                position: 'inside',
                formatter: function (params) {
                  return params.percent.toFixed(0) + '%';
                },
                textStyle: {
                  fontSize: 12
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '可用资金'},
              {value: 310, name: '占用保证金'},
              {value: 234, name: 'MT帐余额'},
              {value: 135, name: '赠金'}
            ]
          }
        ]
      },
      positionsOptions: {
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['占用'],
        //   orient: 'vertical',
        //   x: 'right',
        //   y: 'center',
        //   align: 'left',
        //   right: '10',
        //   textStyle: {
        //     color: '#94959a'
        //   }
        // },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        containLabel: true,
        grid: {
          top: '10%',
          left: 65
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisLabel: {
              textStyle: {
                color: '#94959a'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#94959a'
              }
            }
          }
        ],
        series: [
          {
            name: '时间',
            type: 'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 134, 90, 230, 210],
            lineStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#413e8a' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#f95b85' // 100% 处的颜色
                  }]
                }
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#413e8a' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#f95b85' // 100% 处的颜色
                  }]
                }
              }
            }
          }
        ]
      },
      newsTableData: [
        {
          time: 1500220800,
          country: '中国',
          countryIcon: 'http://www.caijingriliba.com/app/Tpl/Index/Picture/img/zhongguo.png',
          theme: '中国6月以美元计算贸易帐（亿美元）',
          influence: '利空',
          level: 3,
          link: '',
          status: 5
        },
        {
          time: 1500566400,
          country: '美国',
          countryIcon: 'http://www.caijingriliba.com/app/Tpl/Index/Picture/img/meiguo.png',
          theme: '美国7月年度USDA小麦产量预估（亿蒲式耳）',
          influence: '利空',
          level: 4,
          link: '',
          status: -3
        },
        {
          time: 1500603945,
          country: '中国',
          countryIcon: 'http://www.caijingriliba.com/app/Tpl/Index/Picture/img/zhongguo.png',
          theme: '中国6月以美元计算贸易帐（亿美元）',
          influence: '利空',
          level: 2,
          link: '',
          status: -1
        },
        {
          time: 1500602645,
          country: '中国',
          countryIcon: 'http://www.caijingriliba.com/app/Tpl/Index/Picture/img/zhongguo.png',
          theme: '中国6月以美元计算贸易帐（亿美元）',
          influence: '利空',
          level: 1,
          link: '',
          status: 2
        },
        {
          time: 1501084800,
          country: '中国',
          countryIcon: 'http://www.caijingriliba.com/app/Tpl/Index/Picture/img/zhongguo.png',
          theme: '中国6月以美元计算贸易帐（亿美元）',
          influence: '利空',
          level: 5,
          link: '',
          status: 1
        }
      ],
      dealerDetailOption: {
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['占用'],
        //   orient: 'vertical',
        //   x: 'right',
        //   y: 'center',
        //   align: 'left',
        //   right: '10',
        //   textStyle: {
        //     color: '#94959a'
        //   }
        // },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        containLabel: true,
        grid: {
          bottom: '8%',
          left: '5%',
          width: '92%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisLabel: {
              textStyle: {
                color: '#94959a'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '美元/日元',
            nameTextStyle: {
              color: '#52e3ff'
            },
            nameGap: 30,
            axisLabel: {
              textStyle: {
                color: '#94959a'
              }
            }
          }
        ],
        series: [
          {
            name: '时间',
            type: 'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 134, 90, 230, 210],
            lineStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#00e2b8' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#009acd' // 100% 处的颜色
                  }]
                }
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#00e2b8' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#009acd' // 100% 处的颜色
                  }]
                }
              }
            }
          }
        ]
      },
      activitySwiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      }
    };
  }
};
