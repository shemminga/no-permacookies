function statusRow (domain, allowed, callback) {
	var tr = $('<tr>');
	var tddom = $('<td class="domain">');
	var tdperm = $('<td class="perm">');
	var tdbutton = $('<td>');
	
	tddom.html (domain);
	tdperm.html (allowed ? 'allowed' : 'not allowed');
	tdbutton.append (button (domain, allowed, callback));
	
	return tr.append(tddom).append(tdperm).append (tdbutton);
}

function button (domain, allowed, callback) {
	var button = $('<button type="button">');
	button.html (allowed ? "Disallow" : "Allow");
	button.click (function () {
		toggleException (domain, allowed, callback);
	});
	
	return button;
}
