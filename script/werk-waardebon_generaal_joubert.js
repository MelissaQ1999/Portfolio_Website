// ----- Shows the voucher of Generaal Joubert ----- //
$(document).ready(function(){
    $('#toggleBon').click(function(){
        $('#waardebon').fadeToggle(500);
    });
});

// ----- Makes the button text change ----- //
$(document).ready(function(){
    // Button click event
    $('#toggleBon').click(function(){
        var x = document.getElementById('toggleBon');
        if (x.innerHTML == 'Waardebon') {
            x.innerHTML = 'Sluiten';
        } else {
            x.innerHTML = 'Waardebon';
        }
    });
});

// ----- Makes the intro text of this article change ----- //
$(document).ready(function(){
    $('#toggleBon').click(function(){
        $('.toggleTextOff').toggle();
        $('.toggleTextOn').toggle();
    });
});

// ----- Makes the voucher of Generaal Joubert change ----- //
$(document).ready(function(){
    // Button click event
    $('#changeBon').click(function(){
        var image = document.getElementById('changeBon');
        if (image.src.match('../photos_work/waardebon_voorkant.png')) {
            image.src = '../photos_work/waardebon_achterkant.png';
        }
        else {
            image.src = '../photos_work/waardebon_voorkant.png';
        }

        var text = document.getElementById('changeText');
        if (text.innerHTML == 'Voorkant') {
            text.innerHTML = 'Achterkant';
        } else {
            text.innerHTML = 'Voorkant';
        }
    });
});