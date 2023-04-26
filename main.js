$(function () {

})

function buildTable(a, b, defaultValue='') {
    let html = "<table class='tab'>"
    for (let i = 0; i < a; i++) {
        html += "<tr>"
        for (let k = 0; k < b; k++) {
            html += "<td> " + defaultValue + "</td>";
        }
        html += "</tr>"
    }
    html += "</table>"
    $('.el').html(html).hide().fadeIn();
    $('table').css('border', '1px solid black');
    $('.tab tr td').css('border', '1px solid grey');
}

function clearPage() {
    $('.el').fadeOut();
    setTimeout(function (){
        $('.el').html("");
    }, 450)
}

function tableColor(r, g, b) {
    $('.tab').css('background-color', 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')');
}

function textColor(r, g, b) {
    $('.tab').css('color', 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')');
}