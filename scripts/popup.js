chrome.tabs.getSelected (null, function (tab) {
	var domain = getDomain (tab.url);
	var list = getExceptions (domain);
	
	var allowed = false;
	for (var i in list) {
		allowed = allowed || list[i];
	}
	
	$('#domain').html (domain);
	$('#domainStatus').html (allowed ? "allowed" : "not allowed");
	$('body').addClass (allowed ? "allowed" : "disallowed");
	
	var statRows = $('#statusRows');
	while (domain != '') {
		statRows.append (statusRow (domain, list[domain], function () {
			window.location.reload ();
		}));
		
		domain = stripHost (domain);
	}
});
