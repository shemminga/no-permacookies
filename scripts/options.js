(function () {
	var list = getAllExceptions ();
	
	var statRows = $('#statusRows');
	for (var i = 0; i < list.length; i++) {
		statRows.append (statusRow (list[i], true, function () {
			window.location.reload ();
		}));
	}
	
	$('#allowNew').click (function () {
		toggleException ($('#newDomain').val (), false, function () {
			window.location.reload ();
		});
	});
}) ();
