(function(document){
    window.MBP = window.MBP || {}; 
    MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
    MBP.ua = navigator.userAgent;

    MBP.scaleFix = function () {
        if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
            MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            document.addEventListener("gesturestart", MBP.gestureStart, false);
        }
    };

    MBP.gestureStart = function () {
        MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    };

    MBP.BODY_SCROLL_TOP = false;

    MBP.getScrollTop = function(){
        var win = window,
        doc = document;
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    };

    MBP.hideUrlBar = function(){
        var win = window;
        if( !location.hash && MBP.BODY_SCROLL_TOP !== false){
            win.scrollTo( 0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1 );
        }
    };

    MBP.enableActive = function () {
        document.addEventListener("touchstart", function() {}, false);
    };
})
(document);
