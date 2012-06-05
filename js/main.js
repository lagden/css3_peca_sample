// Start Engine
MBP.scaleFix();
MBP.hideUrlBar();

var obj = {
    callback: null,
    currEl: null,
    init: function(el,cb) {
        this.currEl = document.getElementById(el);
        this.currEl.addEventListener("click", this, false);
        this.currEl.addEventListener("touchstart", this, false);
        this.callback = cb;
    },
    handleEvent: function(e) {
        switch(e.type) {
            case "click":
            this.button();
            break;
            case "touchstart":
            this.button();
            break;
        }
    },
    button: function() {
        this.currEl.removeEventListener("click", this, false);
        this.currEl.removeEventListener("touchstart", this, false);
        if(typeof this.callback == "function") this.callback();
    }
};

function doSome()
{
    TweenLite.to(cb, 1, {css:{opacity:"0"}, ease:Power2.easeOut, onComplete:completeDoSome});
}

function completeDoSome()
{
    $(cb).remove();
    $('body').addClass('bodyWhite');
    $(cw).removeClass('hidden');
    anima(cw,{opacity:"0"},{opacity:"1"},.5,0,goChain);
}

function goChain()
{
    $('ul#imgs > li').each(function(idx,el){
        TweenLite.to(el, .5, {css:{top:"0"}, delay:(idx/10), ease:Power2.easeOut});
    });
    $('#contentCarro').addClass('contentCarroOriginal');
    $('#bmwCar').addClass('carroGo');

    $(cw).find('.contentTxt').removeClass('hidden');

    var logoWhite = $('#logoWhite').removeClass('hidden');
    anima(logoWhite,{left:"-100%"},{left:"0"},1,.5);

    anima($('#txt3A'),{opacity:0, bottom:"-200px"},{opacity:1, bottom:"0"},.5,1);
    anima($('#txt3B'),{opacity:0, bottom:"-200px"},{opacity:1, bottom:"0"},.5,1.5);

    anima($('#txt4'),{opacity:0},{opacity:1},1,2);
    anima($('#txt5'),{opacity:0},{opacity:1},1,3);
    anima($('#txt6'),{opacity:0},{opacity:1},1,3);
}

// Animation
function anima(el,from,to,t,td,cf)
{
    cf = cf || null;
    t = t || .5;
    td = td || 0;
    TweenLite.fromTo(el, t, {css:from}, {css:to, delay:td, ease:Power2.easeOut, immediateRender:true, onComplete:cf});
}

var cb = document.getElementById("contentBlack");
var cw = document.getElementById("contentWhite");
var logo = document.getElementById('logo');
var txt1 = document.getElementById('txt1');
var txt2 = document.getElementById('txt2');
anima(logo,{left:"-100%"},{left:"0"},1,2.9);
anima(txt1,{left:"100%"},{left:"1em"},1,1);
anima(txt2,{left:"100%"},{left:"1em"},1,1.9);

obj.init('startEngine',doSome);
