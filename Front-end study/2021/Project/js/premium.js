const personWhoPurchased = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    premium: true
};
let text = "Listen music for free in Spotify!";
let newText = text.replace("Spotify", "B&A Spotify");

$(".btn1").click(function(){
    $(".card1").animate({
        left: '250px',
        opacity: '0.5',
        height: 'toggle',
        width: '+=150px'
    });
});

$('document').ready(function () {
    $('.btn1').click(function () {
        var audio = {};
        audio["bell"] = new Audio();
        audio["bell"].src = "small-bell-ring-01a.wav";
        audio["bell"].addEventListener('load', function () {
            audio["bell"].play();
        });
    });
});