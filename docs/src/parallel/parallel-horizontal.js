/*
 * 平行坐标
 * 描述: 横
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.parallel.horizontal = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "parallel.horizontal";

		this.single = null;

		var indices = {
			name: 0,
			group: 1,
			id: 16
		};

		var lineStyle = {
			normal: {
				width: 0.5,
				opacity: 0.05
			}
		};

		var groupCategories = [];
		var groupColors = [];

		this.option = {
			tooltip: {
				padding: 10,
				backgroundColor: '#222',
				borderColor: '#777',
				borderWidth: 1
			},
			title: [
				{
					text: '',
					top: 5,
					left: 0,
					textStyle: {
						color: '#888',
						fontSize:16
					}
				}
			],
			visualMap: {
				show: true,
				type: 'piecewise',
				categories: groupCategories,
				dimension: indices.group,
				inRange: {
					color: groupColors //['#d94e5d','#eac736','#50a3ba']
				},
				outOfRange: {
					color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
				},
				top: 70,
				left:20,
				itemGap:5,
				textStyle: {
					color: '#888'
				},
				realtime: false
			},
			parallelAxis: null,
			parallel: {
				left: 300,
				top: 30,
				right:200,
				// top: 150,
				// height: 300,
				layout: 'vertical',
				parallelAxisDefault: {
					type: 'value',
					name: 'nutrients',
					nameLocation: 'end',
					nameGap: 20,
					nameTextStyle: {
						color: '#888',
						fontSize: 14
					},
					axisLine: {
						lineStyle: {
							color: '#d7d7d7',
							type: 'solid',
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#888',
						fontSize: '12'
					},
					realtime: false
				}
			},
			animation: false,
			series: [
				{
					name: '',
					type: 'parallel',
					lineStyle: lineStyle,
					inactiveOpacity: 0,
					activeOpacity: 0.01,
					progressive: 500,
					smooth: true,
					data: null
				}
			]

		}

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			// 数据处理
			this.option.title.text = data.title;

			normalizeData(data.data);

			function normalizeData(originData) {
				var groupMap = {};
				originData.forEach(function (row) {
					var groupName = row[indices.group];
					if (!groupMap.hasOwnProperty(groupName)) {
						groupMap[groupName] = 1;
					}
				});

				originData.forEach(function (row) {
					row.forEach(function (item, index) {
						if (index !== indices.name
							&& index !== indices.group
							&& index !== indices.id
						) {
							// Convert null to zero, as all of them under unit "g".
							row[index] = parseFloat(item) || 0;
						}
					});
				});

				for (var groupName in groupMap) {
					if (groupMap.hasOwnProperty(groupName)) {
						groupCategories.push(groupName);
					}
				}
				var hStep = Math.round(300 / (groupCategories.length - 1));
				for (var i = 0; i < groupCategories.length; i++) {
					groupColors.push(echarts.color.modifyHSL('#ed6a81', hStep * i));
				}
			}

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data;

			this.option.parallelAxis = data.parallelAxis;
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
