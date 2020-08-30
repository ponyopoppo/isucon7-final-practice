const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) cluster.fork();
    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    console.log('child started');
    require('./index_single'); // ファイル名に注意
}
