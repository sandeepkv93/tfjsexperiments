$("#wrapper").toggleClass("toggled");
$('#quadratic-equation-div').hide();
$('#matrix-inverse-div').hide();
$('#xor-using-neural-network-div').hide();
$('#k-nearest-neighbours-div').hide();

$("#linear-regression-menu").click(function(e) {
    setup();
    $('#linear-regression-div').show();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').hide();
    $('#xor-using-neural-network-div').hide();
    $('#k-nearest-neighbours-div').hide();
});

$("#quadratic-equation-menu").click(function(e) {
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').show();
    $('#matrix-inverse-div').hide();
    $('#xor-using-neural-network-div').hide();
    $('#k-nearest-neighbours-div').hide();
});

$("#matrix-inverse-menu").click(function(e) {
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').show();
    $('#xor-using-neural-network-div').hide();
    $('#k-nearest-neighbours-div').hide();
});

$("#xor-using-neural-network-menu").click(function(e) {
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').hide();
    $('#xor-using-neural-network-div').show();
    $('#k-nearest-neighbours-div').hide();
});

$("#k-nearest-neighbours-menu").click(function(e) {
    $('#linear-regression-div').hide();
    $('#quadratic-equation-div').hide();
    $('#matrix-inverse-div').hide();
    $('#xor-using-neural-network-div').hide();
    $('#k-nearest-neighbours-div').show();
});
