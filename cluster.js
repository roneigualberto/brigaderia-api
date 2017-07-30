import cluster from "cluster";
import os from "os";

if (cluster.isMaster) {
    const CPUS = os.cpus();
    console.log('Total de cpus: ', CPUS.length);
    
    CPUS.forEach(() => cluster.fork());
    cluster.on("listening", worker => {
        console.log("Cluster %d conectado", worker.process.pid);
    });
    cluster.on("disconnect", worker => {
        console.log("Cluster %d desconectado", worker.process.pid);
    });
    cluster.on("exit", worker => {
        console.log("Cluster %d saiu do ar", worker.process.pid);
        cluster.fork();
    });
} else {
    require("./index.js");
}
