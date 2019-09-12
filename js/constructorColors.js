
function getColorsInPalette() { //Сгенерировать цвета на палитре конструктора
    var palette = $('.palette').children();
    for (var i = 0; i <= palette.length; i++) {
        let color = palette[i];
        $(color).attr('id', 'color' + i);
    }
}
getColorsInPalette();


var colors = {
    color0: '#70D1E1',
    color1: 'rgb(0, 252, 218)',
    color2: 'rgba(35, 34, 70, 0.432)',
    color3: 'rgb(167, 126, 156)',
    color4: 'rgb(54, 110, 28)',
    color5: 'rgb(217, 240, 13)',
    color6: 'rgb(253, 174, 3)',
    color7: 'rgb(29, 81, 88)',
    color8: 'rgb(248, 0, 0)',
    color9: 'rgb(94, 15, 146)',
    color10: 'rgb(146, 57, 15)',
    color11: 'rgb(218, 137, 197)',
    color12: 'rgb(19, 167, 51)',
    color13: 'rgb(134, 126, 78)',
    color14: 'rgb(114, 115, 163)'
}

function changeWatchColor() { //Подбор цвета в конструкторе
    $('.color').click(function () {
        let color = $(this).attr('id')
        console.log(color)
        for (var i = 0; i < color.length; i++) {
            console.log(colors[color])
            $('#Calque_1').attr('fill', ' ')
            $('#Calque_1').attr('fill', colors[color])

        }

    })

}
changeWatchColor();