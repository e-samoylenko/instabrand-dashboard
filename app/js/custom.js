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

    $('#wrapper').attr('class', 'page-'+bodyClass());

    $(window).resize(function() {
    	$('#wrapper').attr('class', 'page-'+bodyClass());
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
		$('#likers-table table').append($('#tmp').html());
		$('#likers-table').detach().appendTo('#main-content').show();
		$('#tmp').remove();
	});
}

var bodyClass = function() {
	var wdth = $(window).width();

	if(wdth < 768) return 'xs';
	else if(wdth < 992) return 'sm';
	else if(wdth < 1200) return 'md';
	else return 'lg';
}