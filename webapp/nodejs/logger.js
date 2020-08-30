const fs = require('fs');

const LOG_FILE_NAME = 'node.log';
function logger(path, timeDiff) {
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
