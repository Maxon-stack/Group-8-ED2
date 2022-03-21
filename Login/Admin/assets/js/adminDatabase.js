//var mysql = require('mysql');

var gotData = {
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

const getChangeNum = (conn, plt, back)=>{
	const arr = [];
	for (let i = 1; i < back + 1; i++) {
		conn.query("SELECT COUNT(*) FROM " + plt + " WHERE arrival_date < " + + toString(nextTick() - (86400 * (back + 1))) + " AND arrival_date > " + toString(nextTick() - (86400 * back)), function (err, res, fields){
			if (err) throw err;
			arr.push(res);
		})
	}
}

var conn = undefined/*mysql.createConnection({
	host: 'localhost:3000',
	user: 'root',
	password: '',
	database: 'xviii_database'
});*/
if (conn)
conn.connect(function(err){
	if (err) throw err;
	console.log('Connected!');
	
	//	query for soilder sizes
	conn.query("SELECT COUNT(*) FROM platoon_one", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt1size = res;
	})
	conn.query("SELECT COUNT(*) FROM platoon_two", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt2size = res;
	})
	conn.query("SELECT COUNT(*) FROM platoon_three", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt3size = res;
	})
	conn.query("SELECT COUNT(*) FROM platoon_four", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt4size = res;
	})
	conn.query("SELECT COUNT(*) FROM platoon_senior", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.pltseniorsize = res;
	})

	//	query for soldier data
	/*conn.query("SELECT * FROM platoon_one", function (err, res, fields){
		if (err) throw err;
		gotData.soldiers.plt1data = fields
	})
	conn.query("SELECT * FROM platoon_two", function (err, res, fields){
		if (err) throw err;
		gotData.soldiers.plt2data = fields
	})
	conn.query("SELECT * FROM platoon_three", function (err, res, fields){
		if (err) throw err;
		gotData.soldiers.plt3data = fields
	})
	conn.query("SELECT * FROM platoon_four", function (err, res, fields){
		if (err) throw err;
		gotData.soldiers.plt4data = fields
	})
	conn.query("SELECT * FROM platoon_senior", function (err, res, fields){
		if (err) throw err;
		gotData.soldiers.pltseniordata = fields
	})*/

	//	query for form data
	/*conn.query("SELECT * FROM forms", function (err, res, fields){
		if (err) throw err;
		gotData.forms = fields;
	})
	elementChanges.push['formsToday', fields.size()];
	var formstoday = 0;
	for (const value of gotData.forms) {
		if (value.upload - nextTick() < 86400){
			formstoday++;
		}
	}
	elementChanges.push['formsTodayChange', formstoday];*/

	//	query for form data
	//	form size
	conn.query("SELECT COUNT(*) FROM forms", function (err, res, fields){
		if (err) throw err;
		gotData.formsSize = res;
	})
	//	forms recieved today
	conn.query("SELECT COUNT(*) FROM forms WHERE upload < " + toString(nextTick() - 86400), function (err, res, fields){
		if (err) throw err;
		elementChanges.push['formsToday', res];
	})
	//	forms recieved changed from last day
	conn.query("SELECT COUNT(*) FROM forms WHERE upload < " + toString(nextTick() - (86400 * 2)) + " AND upload > " + toString(nextTick() - 86400), function (err, res, fields){
		if (err) throw err;
		elementChanges.push['formsTodayChange', elementChanges['formsToday'] / res];
	})

	elementChanges.push['soldiers', gotData.plt1size + gotData.plt2size + gotData.plt3size + gotData.plt4size + gotData.pltseniorsize];
	var soldierstoday = 0;
	for (const plt of gotData.soldiers) {
		for (const soldier of plt){
			if (soldier.upload - nextTick() < 86400){
				soldierstoday++;
			}
		}
	}
	elementChanges.push['soldiersChange', soldierstoday];

	gotData.pi1st = gotData.numSoldiers.plt1size;
	gotData.pi2nd = gotData.numSoldiers.plt2size;
	gotData.pi3rd = gotData.numSoldiers.plt3size;
	gotData.pi4th = gotData.numSoldiers.plt4size;
	gotData.pisenior = gotData.numSoldiers.pltseniorsize;

	//	implement linechart data
	gotData.linechartData.lc1st = getChangeNum(conn, "platoon_one", 7);
	gotData.linechartData.lc2nd = getChangeNum(conn, "platoon_two", 7);
	gotData.linechartData.lc3rd = getChangeNum(conn, "platoon_three", 7);
	gotData.linechartData.lc4th = getChangeNum(conn, "platoon_four", 7);
	gotData.linechartData.lcsenior = getChangeNum(conn, "platoon_senior", 7);
});





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
		
			var hiddenElement = document.createElement('a');
			hiddenElement.href = './assets/exportTemplates/'+fileName;
			hiddenElement.target = '_blank';
				
			//hiddenElement.download = '1stplt.csv';
			hiddenElement.click();

		};
	}
}

/**
 * database values
 */

// temp returned data for page population


// simple element text change
let formsToday = document.getElementById('formsToday');
if (formsToday) {
	formsToday.textContent = gotData.formsSize; //gotData.forms.length;
}
let soldiers = document.getElementById('soldiers');
if (soldiers) {
	soldiers.textContent = gotData.plt1size + gotData.plt2size + gotData.plt3size + gotData.plt4size + gotData.pltseniorsize;
}
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