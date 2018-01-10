/*
 * 树状图
 *  描述: 散
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.tree.loose = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "tree.loose";

		this.single = null;

		this.option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			legend: {
				top: '2%',
				left: '3%',
				orient: 'vertical',
				data: null,
				borderColor: '#c23531',
				icon: 'rectangle'
			},
			series: [
				{
					type: 'tree',
					name: null,
					data: null,
					top: '5%',
					left: '7%',
					bottom: '2%',
					right: '60%',
					symbolSize: 7,
					label: {
						normal: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right'
						}
					},
					leaves: {
						label: {
							normal: {
								position: 'right',
								verticalAlign: 'middle',
								align: 'left'
							}
						}
					},
					expandAndCollapse: true,
					animationDuration: 550,
					animationDurationUpdate: 750

				},
				{
					type: 'tree',
					name: null,
					data: null,
					top: '20%',
					left: '60%',
					bottom: '22%',
					right: '18%',
					symbolSize: 7,
					label: {
						normal: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right'
						}
					},

					leaves: {
						label: {
							normal: {
								position: 'right',
								verticalAlign: 'middle',
								align: 'left'
							}
						}
					},

					expandAndCollapse: true,

					animationDuration: 550,
					animationDurationUpdate: 750
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// 数据处理
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
