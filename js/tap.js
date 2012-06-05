function on(el, evt, fn, bubble)
{
    if("addEventListener" in el)
    {
        try
        {
            el.addEventListener(evt, fn, bubble);
        } 
        catch(e)
        {
            if(typeof fn == "object" && fn.handleEvent)
            {
                el.addEventListener(evt, function(e)
                {
                    fn.handleEvent.call(fn,e);
                },
                bubble);
            }
            else
            {
                throw e;
            }
        }
    }
    else if("attachEvent" in el)
    {
        if(typeof fn == "object" && fn.handleEvent) {
            el.attachEvent("on" + evt, function()
            {
                fn.handleEvent.call(fn);
            });      
        }
        else
        {
            el.attachEvent("on" + evt, fn);
        }
    }
}