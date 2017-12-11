/*
	*散点图
*/

$(function () {

	//每个散点图
	var scatter_size_rand = echarts.init(document.getElementById('scatter-size-rand'));

	var data = [
		[[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
		[[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
	];

	var option = {
		title: {
			text: '1990 与 2015 年各国家人均寿命与 GDP',
			textStyle: {
				color: '#888',
				fontWeight: 'normal',
				fontSize: 12
			},
			top: '10',
			left: '10'
		},
		grid: {
			top: '60',
			left: '40',
			right: '30',
			height: '186'
		},
		legend: {
			top: 10,
			right: 10,
			data: ['1990', '2015'],
			itemGap: 18,
			textStyle: {
				color: '#888',
				fontSize: 12
			},
			itemWidth: 8,
			itemHeight: 8
		},
		tooltip: {
			trigger: 'item',
			formatter: '{c}',
			backgroundColor: 'rgba(0,0,0,.7)'
		},
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
		series: [{
			name: '1990',
			data: data[0],
			type: 'scatter',
			symbolSize: function (data) {
				return Math.sqrt(data[2]) / 8e2;
			},
			label: {
				emphasis: {
					show: true,
					formatter: function (param) {
						return param.data[3];
					},
					position: 'top'
				}
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
		}, {
			name: '2015',
			data: data[1],
			type: 'scatter',
			symbolSize: function (data) {
				return Math.sqrt(data[2]) / 8e2;
			},
			label: {
				emphasis: {
					show: true,
					formatter: function (param) {
						return param.data[3];
					},
					position: 'top'
				}
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

	scatter_size_rand.setOption(option);


	//每个散点图
	var scatter_size_equality = echarts.init(document.getElementById('scatter-size-equality'));

	function random() {
		var r = Math.round(Math.random() * 100);
		return (r * (r % 2 == 0 ? 1 : 1));
	}

	function randomDataArray() {
		var d = [];
		var len = 24;
		while (len--) {
			d.push([
				random(),
				random(),
				Math.abs(random()),
			]);
		}
		return d;
	}

	var option = {
		title: {
			text: '1990 与 2015 年各国家人均寿命与 GDP',
			textStyle: {
				color: '#888',
				fontWeight: 'normal',
				fontSize: 12
			},
			top: '10',
			left: '10'
		},
		grid: {
			top: '60',
			left: '40',
			right: '30',
			height: '186'
		},
		legend: {
			top: 10,
			right: 10,
			data: ['男性', '女性'],
			itemGap: 18,
			textStyle: {
				color: '#888',
				fontSize: 12
			},
			itemWidth: 8,
			itemHeight: 8
		},
		tooltip: {
			trigger: 'item',
			formatter: '{c}',
			backgroundColor: 'rgba(0,0,0,.7)'
		},
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
		series: [
			{
				name: '男性',
				type: 'scatter',
				symbolSize: 10,
				itemStyle: {
					normal: {
						opacity: 1
					}
				},
				data: randomDataArray()
			},
			{
				name: '女性',
				type: 'scatter',
				symbolSize: 10,
				itemStyle: {
					normal: {
						opacity: 1
					}
				},
				data: randomDataArray()
			}
		]
	};


	scatter_size_equality.setOption(option);


//当窗口变动时重新加载echarts图表
	window.onresize = function () {
		scatter_size_rand.resize();
		scatter_size_equality.resize();
	}

});
