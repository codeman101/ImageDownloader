
/*btnClick = function(){
'var imgs = document.getElementsByTagName("IMG")\
var tag;\
for (var counter =0; counter< imgs.length; counter++)\
{\
	\
	if (imgs[counter].src == "")\
		continue;\
	tag = document.createElement("a");\
	tag.setAttribute("download", counter + ".jpg");\	
	tag.href = imgs[counter].src;\
	document.body.appendChild(tag);\
	imgs[counter].onclick = function() \
	{ 
	tag.href = this.src;
	tag.click()
	}
}
}
browser.browserAction.onClicked.addListener(btnClick);
*/

btnClick = function(){
browser.tabs.executeScript({
	code: "document.write('hey')"
        //file: 'content.js'
    });
}
browser.browserAction.onClicked.addListener(btnClick);
