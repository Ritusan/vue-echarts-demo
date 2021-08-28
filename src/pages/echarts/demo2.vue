<template>
  <div>
    <!-- 实心饼图 -->
    <div ref="chartBox" class="chart-box"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      options: {
        color: [
          "#3ab0e6",
          "#ec7291",
          "#fbc96d",
          "#dc4053",
          "#96b637",
          "#ed744c",
          "#f3a29a",
          "#9073b2",
          "#c1db81",
        ],
        backgroundColor: "#FFFFFF",
        barWidth: 8,
        tooltip: {
          axisPointer: {
            type: "shadow",
          },
          trigger: "item",
          formatter: "{b} : {c}%",
        },
        legend: {
          icon: "circle",
          type: "scroll",
          // type: 'plain',
          orient: "vertical",
          right: 20,
          top: "10%",
          // bottom: 0,
          data: [
            "IT",
            "金融",
            "医药",
            "军工",
            "建筑",
            "能源",
            "房地产",
            "消费",
            "半导体",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [0, 80],
            center: ["50%", "50%"],
            itemStyle: {
              borderWidth: 1,
              borderColor: "#fff",
            },
            emphasis: {
              itemStyle: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              //去除饼图的指示折线
              normal: {
                show: false,
                // position: 'inside',
                formatter: "{b}:{d}",
              },
              emphasis: {
                show: false,
              },
            },
            data: [
              { value: 120, name: "IT" },
              { value: 100, name: "金融" },
              { value: 125, name: "医药" },
              { value: 125, name: "军工" },
              { value: 120, name: "建筑" },
              { value: 135, name: "能源" },
              { value: 130, name: "房地产" },
              { value: 140, name: "消费" },
              { value: 140, name: "半导体" },
            ],
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
      });
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
  }
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
