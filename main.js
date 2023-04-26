$(function (){
    let functions = $('div span');
    $('div:first-child').click(buildTable);
    $('div:nth-child(2)').click(clearPage);
    $('div:nth-child(3)').click(tableColor);
    $('div:nth-child(4)').click(textColor);
})

function buildTable() {
    let table = $('.el').html("");
    let a=2, b=5;
    let html = "<table class='tab'>"
    for (let i = 0; i < a; i++) {
        html+="<tr>"
        for (let k = 0; k < b; k++) {
            html+= "<td> " + 'X' + "</td>";
        }
        html+="</tr>"
    }
    html+="</table>"
    table.html(html).fadeIn();
    $('.tab ').css('border', '1px solid black');
}

function clearPage(){
    $('.el').fadeOut();
}
function tableColor(){
    let r = 50, g =168, b= 82;
    $('.tab').css('background-color', 'rgb('+r+', ' + g + ', ' + b + ')');
}
function textColor(){
    let r = 46, g= 42, b= 79;
    $('.tab').css('color', 'rgb('+r+', ' + g + ', ' + b + ')');
}