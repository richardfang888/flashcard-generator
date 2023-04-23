
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Desktop1_image1: tryRequire('./Desktop1_image1.png') || require('./questionMark.png'),
	Desktop1_1_image6: tryRequire('./Desktop1_1_image6.png') || require('./questionMark.png'),
	Desktop1_1_image3: tryRequire('./Desktop1_1_image3.png') || require('./questionMark.png'),
	Desktop1_image4: tryRequire('./Desktop1_image4.png') || require('./questionMark.png'),
	Desktop1_image5: tryRequire('./Desktop1_image5.png') || require('./questionMark.png'),
	Desktop1_image2: tryRequire('./Desktop1_image2.png') || require('./questionMark.png'),
}