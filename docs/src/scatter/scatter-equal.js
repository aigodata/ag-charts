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
		global.agChart.scatter.equal = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "scatter.band";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '男性女性身高体重分布',
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
				left: '65',
				right: '40',
				bottom: '38'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: ['男性', '女性'],
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
				formatter: function (params) {
					if (params.value.length > 1) {
						return params.seriesName + ' :<br/>'
							+ params.value[0] + 'cm '
							+ params.value[1] + 'kg ';
					}
					else {
						return params.seriesName + ' :<br/>'
							+ params.name + ' : '
							+ params.value + 'kg ';
					}
				},
				backgroundColor: 'rgba(0,0,0,.7)',
			},
			//x轴
			xAxis: {
				type: 'value',
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
					formatter: '{value}cm',
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
					formatter: '{value}kg',
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
					name: '男性',
					data: null,
					type: 'scatter',
					itemStyle: {
						normal: {
							color: '#30a8ff'
						}
					}
				},
				{
					name: '女性',
					data: null,
					type: 'scatter',
					itemStyle: {
						normal: {
							color: '#f53e3e'
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
