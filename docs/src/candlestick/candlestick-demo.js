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
		global.agChart.candlestick.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "candlestick.demo";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: '上证指数',
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
				left: '68',
				right: '40',
				bottom: '118'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: ['日K', 'MA5', 'MA10'],
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
				backgroundColor: 'rgba(0,0,0,.7)',
				transitionDuration: 0.15,
				textStyle: {
					fontSize: 11
				},
				padding: [8, 15]
			},
			//x轴
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: null,
				scale: true,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#efefef',
						type: 'solid'
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
			// 缩放组件
			dataZoom: [{
				textStyle: {
					color: '#888'
				},
				backgroundColor: '#fff',
				handleSize: '80%',
				dataBackground: {
					areaStyle: {
						color: '#efefef'
					},
					lineStyle: {
						color: '#efefef'
					}
				},
				fillerColor: 'rgba(210,235,252,.5)',
				borderColor: '#efefef',
				handleStyle: {
					color: '#a7b8c5'
				},
				start: 20,
				end: 90,
				bottom: 32
			}, {
				type: 'inside'
			}],
			// 颜色
			color: ['#30a8ff', '#f4bf1f'],
			// 系列列表
			series: [
				{
					type: 'candlestick',
					name: '日K',
					data: null,
					itemStyle: {
						normal: {
							color: '#ff5050',
							color0: '#9bd80a',
							borderColor: '#ff5050',
							borderColor0: '#9bd80a'
						}
					}
				},
				{
					name: 'MA5',
					type: 'line',
					data: null,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 2
				},
				{
					name: 'MA10',
					type: 'line',
					data: null,
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 2
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			this.option.title.text = data.title;
			this.option.legend.data = data.legend;

			// series第一组的data
			var firstData = data.data.map(function (item) {
				return [+item[1], +item[2], +item[5], +item[6]];
			});

			function calculateMA(dayCount, firstData) {
				var result = [];
				for (var i = 0, len = firstData.length; i < len; i++) {
					if (i < dayCount) {
						result.push('-');
						continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
						sum += firstData[i - j][1];
					}
					result.push(sum / dayCount);
				}
				return result;
			};

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = firstData;

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = calculateMA(5, firstData);

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = calculateMA(10, firstData);

			this.option.xAxis.data = data.data.map(function (item) {
				return item[0];
			});

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
