// First line:
// gets all image tags on current webpage
// 
// Second line: delare variable instead of constantly declaring it in loop
// 
// For loop:
// creates a tag and adds each image link to its own newly created tag 


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
};