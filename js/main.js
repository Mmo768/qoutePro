var sectionOne = document.getElementById("sectionOne");
var sectionTwo = document.getElementById("sectionTwo");

var Quote = [
    {
        QuoteOne:"“Be yourself; everyone else is already taken.”",
        QuoteTwo:"― Oscar Wilde"
    },
    {
        QuoteOne:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        QuoteTwo:"― Albert Einstein"
    },
    {
        QuoteOne:"“So many books, so little time.”",
        QuoteTwo:"― Frank Zappa"
    },
    {
        QuoteOne:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        QuoteTwo:"― Bernard M. Baruch"
    },
    {
        QuoteOne:"“You only live once, but if you do it right, once is enough.”",
        QuoteTwo:"― Mae West"
    },
    {
        QuoteOne:"“Be the change that you wish to see in the world.”",
        QuoteTwo:"― Mahatma Gandhi"
    },
    {
        QuoteOne:"“In three words I can sum up everything I've learned about life: it goes on.”",
        QuoteTwo:"― Robert Frost"
    },
    {
        QuoteOne:"“If you tell the truth, you don't have to remember anything.”",
        QuoteTwo:"― Mark Twain"
    },
    {
        QuoteOne:"“A friend is someone who knows all about you and still loves you.”",
        QuoteTwo:"― Elbert Hubbard"
    },
    {
        QuoteOne:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        QuoteTwo:"― Oscar Wilde"
    },
];

let prev = 0;
let next = 0;

qoute();

document.querySelector("button").addEventListener('click',function(){
    while(prev === next){
        next = Math.floor(Math.random()*Quote.length);
    };
    qoute();
    prev = next;
});

function qoute(){
    sectionOne.innerHTML = Quote[next].QuoteOne;
    sectionTwo.innerHTML = Quote[next].QuoteTwo;
}