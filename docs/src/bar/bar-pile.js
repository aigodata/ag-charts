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
		global.agChart.bar.pile = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "bar.pile";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '堆叠柱状图（访问量/天）',
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
				data: ['邮件营销','联盟广告','视频广告'],
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
				transitionDuration: 0.15,
				textStyle: {
					fontSize: 11
				},
				padding: [8,15]
			},
			//x轴
			xAxis: {
				type: 'category',
				data: null,
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
					color: '#888',
					fontSize: '12'
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
					color: '#888',
					fontSize: '12'
				},
				scale: true
			},
			//系列列表
			series: [
				{
					name: '邮件营销',
					stack: '堆叠柱状图',
					data: null,
					type: 'bar',
					barWidth: 22,
					itemStyle: {
						normal: {
							color: '#4eaffa'
						}
					}
				},
				{
					name: '联盟广告',
					stack: '堆叠柱状图',
					data: null,
					type: 'bar',
					barWidth: 22,
					itemStyle: {
						normal: {
							color: '#fedb37'
						}
					}
				},
				{
					name: '视频广告',
					stack: '堆叠柱状图',
					data: null,
					type: 'bar',
					barWidth: 22,
					itemStyle: {
						normal: {
							color: '#ff6c6d'
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

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = data.data[2];

			this.option.xAxis.data = data.xAxis;
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
