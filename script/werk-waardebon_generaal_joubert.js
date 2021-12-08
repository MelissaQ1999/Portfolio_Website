// ----- Shows the voucher of Generaal Joubert ----- //
$(document).ready(function(){
    $('#toggleBon').click(function(){
        $("#waardebon").fadeToggle(500);
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
