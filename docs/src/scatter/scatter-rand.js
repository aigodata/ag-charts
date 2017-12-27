/*
 * 散点图
 * 描述: 散点大小尺寸不一样
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.scatter.rand = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '1990 与 2015 年各国家人均寿命与 GDP',
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
				left: '50',
				right: '40',
				bottom: '38'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: ['1990', '2015'],
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 8,
				itemHeight: 8
			},
			//提示框
			tooltip: {
				trigger: 'item',
				formatter: function (param) {
					return param.data[3];
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
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#e7e7e7'
					}
				},
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
					name: '1990',
					data: null,
					type: 'scatter',
					symbolSize: function (data) {
						return Math.sqrt(data[2]) / 8e2;
					},
					itemStyle: {
						normal: {
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.2)',
							shadowOffsetY: 5,
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(48,168,255,.7)'
							}, {
								offset: 1,
								color: 'rgba(35,237,255,.7)'
							}])
						}
					}
				},
				{
					name: '2015',
					data: null,
					type: 'scatter',
					symbolSize: function (data) {
						return Math.sqrt(data[2]) / 8e2;
					},
					itemStyle: {
						normal: {
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.2)',
							shadowOffsetY: 5,
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(237,46,46,.7)'
							}, {
								offset: 1,
								color: 'rgba(255,106,197,.7)'
							}])
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
