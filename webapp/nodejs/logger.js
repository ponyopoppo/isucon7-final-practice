//@ts-check

const fs = require('fs');

const LOG_FILE_NAME = 'node.log';
/**
 * @param {string} path
 * @param {Date} time0
 */
function logger(path, time0) {
    const timeDiff = new Date().getTime() - time0.getTime();
    fs.appendFileSync(
        LOG_FILE_NAME,
        JSON.stringify({
            time: new Date().toISOString(),
            remote_addr: 'dummy',
            time_local: 'dummy',
            remote_user: '',
            request: `WS dummy HTTP/1.1`,
            request_uri: `/websocketlog/${path}`,
            request_method: 'WS',
            request_time: `${timeDiff}`,
            request_body: '',
            request_status: '200',
            body_bytes_sent: '1000',
        }) + '\n'
    );
}

module.exports = logger;
