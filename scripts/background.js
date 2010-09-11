chrome.cookies.onChanged.addListener (function (info) {
	if (!info.removed && !info.cookie.session && !domainHasException (info.cookie.domain)) {
		var url = 'http';
		if (info.cookie.secure) url += 's';
		url += '://' + info.cookie.domain + info.cookie.path;
		
		var newCookie = {
			url: url,
			name: info.cookie.name,
			value: info.cookie.value,
			secure: info.cookie.secure,
			httpOnly: info.cookie.httpOnly,
			storeId: info.cookie.storeId
		};
		
		if (!info.cookie.hostOnly) {
			newCookie.domain = info.cookie.domain;
		}
		
		chrome.cookies.set (newCookie);
	}
});
