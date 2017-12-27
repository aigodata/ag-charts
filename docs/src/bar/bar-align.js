/*
 * 柱图
 * 描述: 坐标轴刻度与标签对齐
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.bar.align = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '坐标轴刻度与标签对齐',
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
				left: '55',
				right: '40',
				bottom: '38'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: [''],
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
					name: '',
					data: null,
					type: 'bar',
					barWidth: 22,
					itemStyle: {
						normal: {
							barBorderRadius: [4, 4, 0, 0],
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#ff659b'},
									{offset: 1, color: '#65caff'}

								]
							)
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
