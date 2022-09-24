$('h1').click(function(){
    $('p').hide();
})

$('small').click()=>{
    $('p').show()
}



$('span').click(function(){
    $('b').toggle('slow')

})

$('h1').click(()=>{
    $('p').fadeOut();

})
$('button').click(()=>{
    $('p').fadeToggle(1000)
})

$('button').click(()=>{
    $('p').fadeTo('slow',0.5)
})

$('button').click(()=>{
    $('p').slideToggle();
})

$('#ba').mouseenter(function(){
    $('#po').slideToggle();
})
$('#bb').mouseenter(function(){
    $('#po').slideToggle();
})

$('#bc').mouseenter(function(){
    $('#po').slideToggle();
})

