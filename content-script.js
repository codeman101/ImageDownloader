(//--------------------------------------------------------------------------------------------------
// Name:
// anonymous
//
// Arguments:
// None
//
//
// About:
// gets image tabs from current webpage and connects them to another tag that has a download attribute so when 
// the given image gets clicked the user will be showed a prompt to download the image.
//
//
//--------------------------------------------------------------------------------------------------

function(){
     var imgs = document.getElementsByTagName('IMG')
    var tag;
    for (var counter =0; counter< imgs.length; counter++)
    {
    
        if (imgs[counter].src == '')
            continue;
        tag = document.createElement('a');
        tag.setAttribute('download', counter + '.jpg');    
        tag.href = imgs[counter].src;
        document.body.appendChild(tag);
        imgs[counter].onclick = function() 
        { 
        
        tag.click()
        }
    }
    return undefined;
})();
