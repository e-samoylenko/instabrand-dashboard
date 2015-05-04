jQuery(document).ready(function($) {

	$('#chart-columns').highcharts({
        data: {
            table: 'earnings-data'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Chart of earnings'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'USD'
            }
        }
    });
    
    

});

var toggleHomePage = function() {
	$('#insta-banner, #modal-connect').hide();
	$('#campaign').show();

	$('.earnings-ammount').each(function() {
		$(this).html($(this).siblings('.hidden').html());
	});
}

var showLikers = function() {
	$('#main-content').html('');
	$('#tmp').load('./data/instabrand-data.htm tbody', function() {
		$('#tmp tr:first, #tmp th').remove();
		$('#likers-table').append($('#tmp').html()).detach().appendTo('#main-content').show();
		$('#tmp').remove();
	});

}