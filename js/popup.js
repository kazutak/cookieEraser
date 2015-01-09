$(function(){
	
	var url_tmp; // target url 
	var cookie_tmp_arr = [];
	
	chrome.tabs.getSelected(null, function(tab) {
	
		url_tmp = tab.url;
	
		chrome.cookies.getAll({url:tab.url}, function(cookie_arr) {
			for(var i=0; i<cookie_arr.length; i++) {
				cookie_tmp = cookie_arr[i];
				cookie_tmp_arr.push(cookie_tmp);
				$('#result').append(cookie_tmp.name + " :" + cookie_tmp.value + "<br /><br />");
			}
		});
	});
	
	
	$('#erase').click(function(){
		for(var i=0; i<cookie_tmp_arr.length; i++) {
			chrome.cookies.remove({'url':url_tmp,'name':cookie_tmp_arr[i].name,'storeId':cookie_tmp_arr[i].storeId});
		}
        location.reload();
	});
});