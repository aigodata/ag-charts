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
			//图例
			legend: {
				top: 20,
				left: 20,
				data: [''],
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 8,
				itemHeight: 8
			},
			series: [
				{
					type: 'tree',
					name: null,
					data: null,
					top: '5%',
					left: 'center',
					bottom: '5%',
					right:'15%',
					symbolSize: 7,
					itemStyle:{
						color:'#ff0',
						borderColor:'#ff0'
					},
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
