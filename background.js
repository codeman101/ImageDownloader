//--------------------------------------------------------------------------------------------------
// Name:
// listenForClicks
// GF
// Arguments:
// None
//
//
// About:
// gets image tabs from current webpage and connects them to another tag that has a download attribute so when 
// the given image gets clicked the user will be showed a prompt to download the image.
//
//Name: btnClick
//
//About: function is executed when addon icon is clicked and it tries to run listenForClick function for cureent tab
//
//
// Line at the end:
// adds a listener so that function will only execute when addon icon is clicked
//
//
// Additional note: During the development of this I learned that it's not possible to run a temporary addon in firefox 
// for any tab other than the one that loaded the temporary addon. Thereofre the main code in the addon that does the 
// majority of the work was tested in a web console to make sure it worked for pages with images.
//--------------------------------------------------------------------------------------------------

function listenForClick()
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
