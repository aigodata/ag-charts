/*
 * 折线图
 * 描述: 渐变
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.line.gradient = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '折线图渐变',
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
				left: '58',
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
				itemWidth: 12,
				itemHeight: 6
			},
			//提示框
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				backgroundColor: 'rgba(0,0,0,.7)'
			},
			//x轴
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['2000-06-05', '2000-06-12', '2000-06-19', '2000-06-26', '2000-07-03', '2000-07-10', '2000-07-17','2000-07-24'],
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
					type: 'line',
					symbol: 'circle',
					symbolSize: 2,
					itemStyle: {
						normal: {
							color: '#d04399'
						}
					},
					lineStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0, 0, 1, 0,
								[
									{offset: 0, color: '#30a8ff'},
									{offset: 1, color: '#ff257c'}

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
