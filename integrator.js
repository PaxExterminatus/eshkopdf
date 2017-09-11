var pdfPath = document.getElementsByClassName('pdfview')[0].getAttribute('data-pdf-name');

var pdfjs_block = document.getElementsByClassName('pdfview')[0];
var pdfFrame = document.createElement('iframe');
pdfFrame.src = 'http://www.eshko.by/source_lib/eshkopdf/viewer/mozilla/viewer.html';
pdfFrame.name = pdfPath;
pdfjs_block.appendChild(pdfFrame);

var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel="stylesheet";
link.href="style.css";
head.appendChild(link);