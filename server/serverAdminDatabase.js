var mysql = require('mysql');
const pool = require('./database');

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
};

const d = new Date();
const getChangeNum = (conn, plt, back)=>{
	const arr = [];
	for (let i = 1; i < back + 1; i++) {
		conn.query("SELECT COUNT(*) FROM " + plt + " WHERE arrival_date < " + + (d.getTime() - (86400 * (back + 1))).toString() + " AND arrival_date > " + (d.getTime() - (86400 * back)).toString(), function (err, res, fields){
			if (err) throw err;
			arr.push(res);
		})
	}
}

// var conn = mysql.createConnection({
//     host: 'localhost',
//     database: 'xviii_database',
//     user: 'root',
//     password: 'password',
// });
// if (conn)
pool.connect(function(err){
	if (err) throw err;
	console.log('Connected!');
	gotData.connected = true;
	
	//	query for soilder sizes
	pool.query("SELECT COUNT(*) FROM platoon_one", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt1size = res[0]['COUNT(*)'];
	})
	pool.query("SELECT COUNT(*) FROM platoon_two", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt2size = res[0]['COUNT(*)'];;
	})
	pool.query("SELECT COUNT(*) FROM platoon_three", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt3size = res[0]['COUNT(*)'];;
	})
	pool.query("SELECT COUNT(*) FROM platoon_four", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.plt4size = res[0]['COUNT(*)'];;
	})
	pool.query("SELECT COUNT(*) FROM platoon_senior", function (err, res, fields){
		if (err) throw err;
		gotData.numSoldiers.pltseniorsize = res[0]['COUNT(*)'];;
	})

	//	query for form data
	/*pool.query("SELECT * FROM forms", function (err, res, fields){
		if (err) throw err;
		gotData.forms = fields;
	})
	gotData.elementChanges.push['formsToday', fields.size()];
	var formstoday = 0;
	for (const value of gotData.forms) {
		if (value.upload - d.getTime() < 86400){
			formstoday++;
		}
	}
	gotData.elementChanges.push['formsTodayChange', formstoday];*/

	//	query for form data
	//	form size
	/*pool.query("SELECT COUNT(*) FROM forms", function (err, res, fields){
		if (err) throw err;
		gotData.formsSize = res;
	})
	//	forms recieved today
	pool.query("SELECT COUNT(*) FROM forms WHERE upload < " + (d.getTime() - 86400).toString(), function (err, res, fields){
		if (err) throw err;
		gotData.elementChanges.push['formsToday', res];
	})
	//	forms recieved changed from last day
	pool.query("SELECT COUNT(*) FROM forms WHERE upload < " + (d.getTime() - (86400 * 2)).toString() + " AND upload > " + (d.getTime() - 86400).toString(), function (err, res, fields){
		if (err) throw err;
		gotData.elementChanges.push['formsTodayChange', gotData.elementChanges['formsToday'] / res];
	})*/

	gotData.elementChanges.push['soldiers', gotData.plt1size + gotData.plt2size + gotData.plt3size + gotData.plt4size + gotData.pltseniorsize];
	/*var soldierstoday = 0;
	for (const plt of gotData.soldiers) {
		for (const soldier of plt){
			if (soldier.upload - d.getTime() < 86400){
				soldierstoday++;
			}
		}
	}
	gotData.elementChanges.push['soldiersChange', soldierstoday];*/

	gotData.pi1st = gotData.numSoldiers.plt1size;
	gotData.pi2nd = gotData.numSoldiers.plt2size;
	gotData.pi3rd = gotData.numSoldiers.plt3size;
	gotData.pi4th = gotData.numSoldiers.plt4size;
	gotData.pisenior = gotData.numSoldiers.pltseniorsize;

	//	implement linechart data
	gotData.linechartData.lc1st = getChangeNum(pool, "platoon_one", 7);
	gotData.linechartData.lc2nd = getChangeNum(pool, "platoon_two", 7);
	gotData.linechartData.lc3rd = getChangeNum(pool, "platoon_three", 7);
	gotData.linechartData.lc4th = getChangeNum(pool, "platoon_four", 7);
	gotData.linechartData.lcsenior = getChangeNum(pool, "platoon_senior", 7);
});

module.exports = function getGotData(){
    return gotData;
}
