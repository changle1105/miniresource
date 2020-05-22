import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['资源总数', '浏览总数', '收藏总数']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: [],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '资源总数',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: []
      },
      {
        name: '浏览总数',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: []
      },
      {
        name: '收藏总数',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: []
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
 data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
}
})
