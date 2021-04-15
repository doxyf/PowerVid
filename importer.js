const pptxgen = require("pptxgenjs");
const pptx = new pptxgen();

const fs = require('fs');

const length = fs.readdirSync('./frames/').length

for (let i = 0; i < length; i++) {
    var slide = pptx.addSlide(i+". frame");
    slide.background = { path: "./frames/"+i+".png" };
    console.log(i+'. frame imported to presentation.');
    if(i == length-1){
        console.log('Creating the presentation file with all the frames. Please do not exit.');
    }
}

pptx.writeFile({ fileName: 'PowerVid.pptx' });