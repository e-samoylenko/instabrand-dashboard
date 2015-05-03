jQuery(document).ready(function($){

	$('#charts').highcharts({
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