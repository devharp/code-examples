const codes = {
	SET: 0,
	CONFIRMATION: 1,
}
const SET = {
	RESOLUTION : 0,
	STREAM: 1
}

const CONFIRMATION = {
	ACCEPT: 0,
	REJECT: 1
}

const STREAM = {
	START: 0,
	END: 1,
	APPEND: 2
}

const FRAME_RATE= {
	NORMAL: { ideal: 10, max: 15 }
}

const RESOLUTION = {
	P144: {width: 256, height: 144},
	P240: {width: 320, height: 240},
	P360: {width: 480, height: 360},
	P480: {width: 800, height: 480}
}

module.exports = { codes, SET, CONFIRMATION, STREAM, FRAME_RATE, RESOLUTION }
