/*
 * 柱图
 * 描述: 堆叠柱状图
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.bar.group = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '分组柱状图',
				textStyle: {
					color: '#888',
					fontWeight: 'normal',
					fontSize: 12
				},
				top: '20',
				left: '20'
			},
			//网格
			grid: {
				top: '70',
				left: '60',
				right: '40',
				bottom: '38'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: ['联盟广告', '视频广告'],
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 10,
				itemHeight: 3
			},
			//提示框
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				backgroundColor: 'rgba(0,0,0,.7)',
			},
			//x轴
			xAxis: {
				type: 'category',
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				scale: true,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#efefef',
						type: 'solid',
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#888',
						fontSize: '12'
					}
				}
			},
			//y轴
			yAxis: {
				type: 'value',
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#e7e7e7'
					}
				},
				min: 0,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#888',
						fontSize: '12'
					}
				},
				scale: true
			},
			//系列列表
			series: [
				{
					name: '联盟广告',
					data: null,
					type: 'bar',
					barWidth: 16,
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0],
							color: '#6bd3ff'
						}
					}
				},
				{
					name: '视频广告',
					data: null,
					type: 'bar',
					barWidth: 16,
					itemStyle: {
						normal: {
							barBorderRadius: [6, 6, 0, 0],
							color: '#ff7b7c'
						}
					}
				}]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			this.option.title.text = data.title;
			this.option.legend.data = data.legend;

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data[0];

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = data.data[1];
		};

		this.setStyle = function () {

		};

		this.resize = function () {
			this.single.resize();
		};
	}

	chart.prototype = agChart.common;
	chart.prototype.constructor = chart;

	return new chart();
});
