


module.exports = { 

	handleError(response, message) {
		console.log("ERROR: " + message);
		response.status(500).json({"error": message});
	},
	
	sendData(response, data) {
		response.status(200).send(data);
	},

	handleQuery(res) {
		
		return function(err, data){
			if(err) {
				handleError(res, serr.message);
			}
			else {
				sendData(res, data);
			}
		}
		
	}
}