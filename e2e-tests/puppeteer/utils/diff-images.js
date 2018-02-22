const compareImages = require('resemblejs/compareImages');
const fs = require('fs');

async function generateVisualDiff(imageName) {

    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: 'movement',
            transparency: 0.5,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: ['nothing', 'less', 'antialiasing', 'colors', 'alpha'],
    };
    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        fs.readFileSync(`./baseline/${imageName}.png`),
        fs.readFileSync(`./output/${imageName}.png`),
        options
    );
    console.log('data read already', data);
    fs.writeFileSync(`./output/diff-${imageName}.png`, data.getBuffer());

};

module.exports = generateVisualDiff;