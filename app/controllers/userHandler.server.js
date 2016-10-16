'use strict';

function ClickHandler () {
    const spawn = require( 'child_process' ).spawnSync;

	this.getUserInfo = function (req, res) {
			console.log(req.headers);
			let host = req.headers['x-forwarded-for'] || req.connection.remoteAddress
			let language = req.get('accept-language').split(",")[0];
			let software = req.get('user-agent');
			let infos = {'host': host,'language': language, 'software': software};
			res.json(infos);
	};

    this.pressButton = function (req, res) {
        console.log(req.params.id);
        let ls = spawn( 'irsend', [ 'SEND_ONCE', 'remote-media', 'KEY_PAUSE' ] );
        console.log( `stderr: ${ls.stderr.toString()}` );
        console.log( `stdout: ${ls.stdout.toString()}` );
    }

}

module.exports = ClickHandler;
