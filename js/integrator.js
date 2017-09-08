
var pdfjs_block = document.getElementsByClassName('pdfview')[0];
var pdfjs_iframe = document.createElement('iframe');
pdfjs_iframe.src = 'pdfjs-1.9.426-dist/web/viewer.html';
pdfjs_block.appendChild(pdfjs_iframe);

var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel="stylesheet";
link.href="style.css";


head.appendChild(link);
