jQuery(document).ready(function(t){t("#chart-columns").highcharts({data:{table:"earnings-data"},chart:{type:"column"},title:{text:"Chart of earnings"},yAxis:{allowDecimals:!1,title:{text:"USD"}}}),t("#wrapper").attr("class","page-"+bodyClass()),t(window).resize(function(){t("#wrapper").attr("class","page-"+bodyClass())})});var toggleHomePage=function(){$("#insta-banner, #modal-connect").hide(),$("#campaign").show(),$(".earnings-ammount").each(function(){$(this).html($(this).siblings(".hidden").html())})},showLikers=function(){$("#main-content").html(""),$("#tmp").load("./data/instabrand-data.htm tbody",function(){$("#tmp tr:first, #tmp th").remove(),$("#likers-table table").append($("#tmp").html()),$("#likers-table").detach().appendTo("#main-content").show(),$("#tmp").remove()})},bodyClass=function(){var t=$(window).width();return 768>t?"xs":992>t?"sm":1200>t?"md":"lg"};