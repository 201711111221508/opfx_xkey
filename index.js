const genId1 = require('2_xid');
const genId2 = require('6_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|mjfXciFy4s|' + genId2()).digest('base64');
}


module.exports = generateKey;
