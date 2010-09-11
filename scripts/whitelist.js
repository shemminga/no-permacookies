function toggleException (domain, allowed, callback) {
	if (allowed) {
		removeException (domain);
	} else {
		addException (domain);
	}
	
	if (callback) {
		callback ();
	}
}

function addException (domain) {
	var whitelist = getWhitelistObj ();
	whitelist[domain] = true;
	setWhitelistObj (whitelist);
}

function removeException (domain) {
	var whitelist = getWhitelistObj ();
	delete whitelist[domain];
	setWhitelistObj (whitelist);
}

function getExceptions (domain) {
	var whitelist = getWhitelistObj ();
	var rv = {};
	
	while (domain != '') {
		if (whitelist == undefined || whitelist[domain] == undefined) {
			rv[domain] = false;
		} else {
			rv[domain] = true;
		}
		domain = stripHost (domain);
	}
	return rv;
}

function getAllExceptions () {
	var whitelist = getWhitelistObj ();
	var rv = [];
	
	for (var i in whitelist) {
		rv.push (i);
	}
	
	rv.sort ();
	
	return rv;
}

function domainHasException (domain) {
	var whitelist = getWhitelistObj ();
	
	while (domain != '') {
		if (whitelist[domain] != undefined) {
			return true;
		}
		
		domain = stripHost (domain);
	}
	
	return false;
}

function getDomain (url) {
	var matches = url.match (/^https?:\/\/([^\/]*)\//);
	return matches[1];
}

function stripHost (domain) {
	var parts = domain.split ('.');
	parts.shift ();
	return parts.join ('.');
}

function getWhitelistObj () {
	if (window.localStorage['whitelist'] == undefined) {
		return {};
	}
	
	return JSON.parse (window.localStorage['whitelist']);
}

function setWhitelistObj (whitelist) {
	window.localStorage['whitelist'] = JSON.stringify (whitelist);
}
