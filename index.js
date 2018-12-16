$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('#quadratic-equation-div').hide();
$('#matrix-inverse-div').hide();
$('#k-nearest-neighbours-div').hide();

$("#linear-regression-menu").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    setup();
    $('#linear-regression-div').show();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').hide();
    $('#k-nearest-neighbours-div').hide();
});

$("#quadratic-equation-menu").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').show();
    $('#matrix-inverse-div').hide();
    $('#k-nearest-neighbours-div').hide();
});

$("#matrix-inverse-menu").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').show();
    $('#k-nearest-neighbours-div').hide();
});

$("#k-nearest-neighbours-menu").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').hide();
    $('#k-nearest-neighbours-div').show();
});
