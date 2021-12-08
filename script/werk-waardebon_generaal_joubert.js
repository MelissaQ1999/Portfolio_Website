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

// ----- Makes the intro text of this article change ----- //
$(document).ready(function(){
    // Button click event
    $('#toggleBon').click(function(){
        var x = document.getElementById('toggleText');
        if (x.innerHTML == 'Klik dan op de knop om de bon te bekijken!') {
            x.innerHTML = 'Je kunt op de bon klikken om deze om te draaien!';
        } else {
            x.innerHTML = 'Klik dan op de knop om de bon te bekijken!';
        }
    });
});