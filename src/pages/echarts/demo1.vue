<template>
  <div>
      <!-- 柱状图 -->
    <div ref="chartBox" class="chart-box"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      options: {
        color: ["#3ab0e6", " #ec7291", "#61a0a8"],
        backgroundColor: "#FFFFFF",
        barWidth: 10,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "0%",
          icon: "circle",
          textStyle: {
            //图例文字的样式
            color: "#8C8C8C",
            fontSize: 12,
          },
          data: ["图例1", "图例2"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false, // 去除网格线
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#BFBFBF", // 坐标线的颜色
              width: "1",
            },
          },
          axisLabel: {
            color: "#595959", //坐标值的颜色
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length; //总字数
              var provideNumber = 5; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
          },
          boundaryGap: [0, 0.01],
          data: ["事业部1", "事业部2", "事业部3", "事业部4", "事业部5"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            // show: false // 去除网格线
            lineStyle: {
              color: "#E8E8E8",
              type: "dashed", //设置间隔线为虚线
            },
          },
          axisTick: {
            show: false, //小横线
          },
          splitArea: {
            // show: true // 保留网格区域
          },
          axisLine: {
            show: false, // 去除纵向边框线
            lineStyle: {
              type: "solid",
              color: "#BFBFBF", // 坐标线的颜色
              width: "1",
            },
          },
          axisLabel: {
            color: "#595959", //坐标值的颜色
          },
        },
        series: [
          {
            name: "图例1",
            type: "bar",
            label: {
              show: false,
              position: "right", // 位置
              color: "#3ab0e6",
              fontSize: 12,
              fontWeight: "normal", // 加粗
              distance: 5, // 距离
              offset: [0, 1], // 偏移距离[横向，纵向]
            }, // 柱子上方的数值
            data: [175, 170, 330, 70, 250],
          },
          {
            name: "图例2",
            type: "bar",
            label: {
              show: false,
              position: "right", // 位置
              color: "#ec7291",
              fontSize: 12,
              fontWeight: "normal", // 加粗
              distance: 5, // 距离
              offset: [0, 2], // 偏移距离[横向，纵向]
            }, // 柱子右方的数值
            data: [140, 240, 270, 120, 220],
          },
        ],
      },
    }
  },
  components: {},
  mounted() {
    this.chartInit()
  },
  methods: {
    chartInit() {
      this.$nextTick(() => {
        this.chartBox = echarts.init(this.$refs.chartBox)
        let options = this.options
        this.chartBox.setOption(options)
      })
    },
    chartDestroy() {
      this.chartBox.dispose()
    },
    handleResize() {
      this.chartDestroy()
      this.chartInit()
    },
    chartResize() {
      this.chartBox.resize()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/overview/header.scss";

.chart-box {
  width: 50%;
  height: 300px;
  border: 8px solid #f0f2f5;
}
</style>
