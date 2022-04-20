var gotData = {
	connected: false,
	elementChanges: [],
	//forms: [],
	formsSize: 0,
	numSoldiers: {
		plt1size: 0,
		plt2size: 0,
		plt3size: 0,
		plt4size: 0,
		pltseniorsize: 0,
	},
	linechartData: {
		lc1st: [],
		lc2nd: [],
		lc3rd: [],
		lc4th: [],
		lcsenior: [],
	},
	pltpiData: {
		pi1st: 0,
		pi2nd: 0,
		pi3rd: 0,
		pi4th: 0,
		pisenior: 0,
	},
};



const fetchUrl = 'http://localhost:3000/getGotData';
gotDataPromise = fetch(fetchUrl)
	.then(response => response.json())
	.then(data => { gotData = data; cont = true; console.log(data)})
	.then(()=>{

		
//element ids to relevant file
var buttonToFile = [  
['download1', '1stplt.xlsx'],
['download2', '2ndplt.xlsx'],
['download3', '3rdplt.xlsx'],
['download4', 'seniorSignin.xlsx'],
['download5', 'shippingRoster.xlsx'],
['download6', 'newArrivals.xlsx'],
];

/**
 * export buttons settup
 */
for (let [buttonName, fileName] of buttonToFile) {
	let button = document.getElementById(buttonName);
	if (button) {
		button.onclick = function(){
			
			fetch('http://localhost:3000/admindata?fileName=' + fileName)
				.then(response => response.json())
				.then(data => {
					var hiddenElement = document.createElement('a');
					hiddenElement.href = '../../server/'+data;
					hiddenElement.target = '_blank';
					hiddenElement.click();
				})

		};
	}
}

/**
 * database values
 */

// temp returned data for page population

let databaseConnection = document.getElementById("databaseConnection");
if (databaseConnection) {
	databaseConnection.innerHTML = "| " + (gotData.connected ? "Connected" : "Not Connected");
}
let enterDatabase = document.getElementById("enterDatabase");
if (enterDatabase) {
	enterDatabase.onclick = function(){
		//window.open("");
	};
}

// simple element text change
let formsToday = document.getElementById('formsToday');
if (formsToday) {
	formsToday.textContent = gotData.formsSize; //gotData.forms.length;
}
let soldiers = document.getElementById('soldiers');
if (soldiers) {
	soldiers.textContent = gotData.numSoldiers.plt1size + gotData.numSoldiers.plt2size + gotData.numSoldiers.plt3size + gotData.numSoldiers.plt4size + gotData.numSoldiers.pltseniorsize;
}
console.log("test",gotData.elementChanges)
for (let [id, val] of gotData.elementChanges) {
	let element = document.getElementById(id);
	if (element){//document.write(id)
		let text = val;

		if (id == 'formsTodayChange' || id == 'soldiersChange') {
			text = text + '%';
		}

		element.textContent = text;
	}
}

// line char with data
document.addEventListener("DOMContentLoaded", () => {
new ApexCharts(document.querySelector("#reportsChart"), {
	series: [{
		name: '1ST',
		data: gotData.linechartData.lc1st
	}, {
		name: '2ND',
		data: gotData.linechartData.lc2nd
	}, {
		name: '3RD',
		data: gotData.linechartData.lc3rd
	}, {
		name: '4TH',
		data: gotData.linechartData.lc4th
	}, {
		name: 'SENIOR',
		data: gotData.linechartData.lcsenior
	}],
	chart: {
		height: 350,
		type: 'area',
		toolbar: {
			show: false
		},
	},
	markers: {
		size: 4,
	},
	colors: ['#4154f1', '#2eca6a', '#ff771d', '#2e771d', '#41caf1'],
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.3,
			opacityTo: 0.4,
			stops: [0, 90, 100]
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 2
	},
	xaxis: {
		type: 'datetime',
		categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	}
	}).render();
});


// recent form display
// use form data from database to display recent submissions


// platoon pi chart
document.addEventListener("DOMContentLoaded", () => {
echarts.init(document.querySelector("#trafficChart")).setOption({
	tooltip: {
		trigger: 'item'
	},
	legend: {
		top: '5%',
		left: 'center'
	},
	series: [{
		name: 'Access From',
		type: 'pie',
		radius: ['40%', '70%'],
		avoidLabelOverlap: false,
		label: {
			show: false,
			position: 'center'
		},
		emphasis: {
			label: {
			show: true,
			fontSize: '18',
			fontWeight: 'bold'
			}
		},
		labelLine: {
			show: false
		},
		data: [{
				value: gotData.pltpiData.pi1st,
				name: '1ST'
			},
			{
				value: gotData.pltpiData.pi1st,
				name: '2ND'
			},
			{
				value: gotData.pltpiData.pi1st,
				name: '3RD'
			},
			{
				value: gotData.pltpiData.pi1st,
				name: '4TH'
			},
			{
				value: gotData.pltpiData.pi1st,
				name: 'Senior'
			}
		]
	}]
});
});


// unknown usage chart, template for now
document.addEventListener("DOMContentLoaded", () => {
var budgetChart = echarts.init(document.querySelector("#budgetChart")).setOption({
	legend: {
		data: ['This1', 'This2']
	},
	radar: {
	// shape: 'circle',
	indicator: [{
			name: 'Stat1',
			max: 6500
		},
		{
			name: 'Stat2',
			max: 16000
		},
		{
			name: 'Stat3',
			max: 30000
		},
		{
			name: 'Stat4',
			max: 38000
		},
		{
			name: 'Stat5',
			max: 52000
		},
		{
			name: 'Stat6',
			max: 25000
		}
	]
	},
	series: [{
		name: 'Budget vs sNew',
		type: 'radar',
		data: [{
				value: [4200, 3000, 20000, 35000, 50000, 18000],
				name: 'This1'
			},
			{
				value: [5000, 14000, 28000, 26000, 42000, 21000],
				name: 'This2'
			}
		]
	}]
});
});

const select = (el, all = false) => {
	el = el.trim()
	if (all) {
		return [...document.querySelectorAll(el)]
	} else {
		return document.querySelector(el)
	}
}

/*const mainContainer = select('#main');
if (mainContainer) {
	setTimeout(() => {
		new ResizeObserver(function() {
			select('.echart', true).forEach(getEchart => {
				console.log(getEchart)
				console.log(document.getElementById(getEchart.id))
				document.getElementById(getEchart.id).resize();
				echarts.getInstanceByDom(getEchart).resize();
			})
		}).observe(mainContainer);
	}, 200);
}*/

	})