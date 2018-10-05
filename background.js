//--------------------------------------------------------------------------------------------------
// Name:
// listenForClicks
//
// Arguments:
// None
//
//
// About:
// gets image tabs from current webpage and connects them to another tag that has a download attribute so when 
// the given image gets clicked the user will be showed a prompt to download the image.
//
// Name: btnClick
//
// About: 
// function is executed when addon icon is clicked and it tries to run listenForClick function for cureent tab
//
//
// Line at the end:
// adds a listener so that function will only execute when addon icon is clicked
//
//
//--------------------------------------------------------------------------------------------------

function report(error)
{
    console.error('something went wrong it was this: ' + error);
}

btnClick = function(){

browser.tabs.executeScript({file: "content-script.js"})
.catch(report);
//var current = browser.tabs.getCurrent();
//current.then(listenForClick, report);
}
browser.browserAction.onClicked.addListener(btnClick);
