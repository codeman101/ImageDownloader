//--------------------------------------------------------------------------------------------------
// Name:
// btnClick
// GF
// Arguments:
// None
//
//
// About:
// Calls content.js to be executed.
//
//
// Line at the end:
// adds a listener so that function will only execute when addon icon is clicked
//--------------------------------------------------------------------------------------------------

function listenForClick(tabs)
{
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
}
function report(error)
{
    console.error('something went wrong it was this: ' + error);
}

btnClick = function(){
var current = browser.tabs.getCurrent();
current.then(listenForClick, report);
}
browser.browserAction.onClicked.addListener(btnClick);
