module.exports = function(RED) {
	var logentries = require("logentries");
	
	
    function LogEntriesNode(config) {
        RED.nodes.createNode(this,config);
		this.server = RED.nodes.getNode(config.server);
		var log = logentries.logger({
		  usequotes: false,
		  port: this.server.port,
		  host: this.server.host,
		  token: this.server.token
		})
		
        this.on('input', function(msg) {
            log.info(msg);
			//for debug: console.log('logentries:' + JSON.stringify(msg));
        });
		this.on("close", function () {
            try {
                log.info('close event');
            } catch (error) {
            }
        });
    }
    RED.nodes.registerType("logentries",LogEntriesNode);
	
	function RemoteServerNode(config) {
        RED.nodes.createNode(this,config);
        this.host = config.host;
        this.port = config.port;
		this.token = config.token;
		this.logname = config.logname;
    }
    RED.nodes.registerType("remote-logentriesserver",RemoteServerNode);
}
