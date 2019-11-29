function time() {
	moment.locale("zh-hk"); //change to Hong Kong Time
	var now = moment(new Date()); //todays date
	var end = moment("2018-12-27"); // another date
	var duration = moment.duration(now.diff(end));
	var days = duration.asDays();
	document.getElementById("timefromaday").innerHTML = "偉誠和悉瑜在一起已經 "+Math.ceil(days)+" 天";
}