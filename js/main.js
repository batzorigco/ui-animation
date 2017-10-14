
var titanic = new Titanic({hover:false});
var checkbox = document.getElementById('titanic-checkbox');
$(".roundedContainer").on({

    mouseenter: function () {
       titanic.on($(this).children()[1].id);
    },
    mouseleave: function () {
       titanic.off($(this).children()[1].id);
    }
});
