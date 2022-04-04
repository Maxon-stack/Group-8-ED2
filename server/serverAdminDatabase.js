var mysql = require('mysql');

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

var conn = mysql.createConnection({
	host: 'localhost:3306',
	user: 'root',
	password: 'password',
	database: 'xviii_database'
});
if (conn)
conn.connect(function(err){
	if (err) throw err;
	console.log('Connected!');
	gotData.connected = true;
	
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

export function getGotData(){
    return gotData;
}