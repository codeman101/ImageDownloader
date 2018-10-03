

/*var script = document.createElement('script');
script.src = '//jquery-3.3.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.downloadFile = function(sUrl) {
    window.open(sUrl, '_self'); // download script
var counter;
for (counter =0; counter <1000; counter++)
{
var x = document.getElementsByTagName("IMG")[counter].getAttribute("src") // loop to get srcs from html
}

var link = document.createElement('a'); // javascipt to download images clicked
link.href = 'images.jpg';
link.download = 'Download.jpg';
document.body.appendChild(link);
link.click();

document.write("hey")
*/

window.onload = function() {
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
	tag.href = this.src;
	tag.click()
	}
}
};
//});
//imgs[counter].addEventListener('click', function (e) {
/*var counter;

for ( counter= 0; counter < imgs.length; counter++)
{
	var link = imgs[counter].getAttribute('src');
	var tags = document.createElement('a');
	tags.href = link;
	tags.download = counter + '.jpg';
	document.body.appendChild(tags);
	tags.click();
	document.body.removeChild(tags);
}*/