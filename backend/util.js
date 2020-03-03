function handleError(response, message) {
	console.log("ERROR: " + message);
	response.status(500).json({"error": message});
}

function sendData(response, data) {
	response.status(200).send(data);
}


module.exports = { 
	handleQuery(res) {
		return function(err, data){
			if(err) {
				handleError(res, err.message);
			}
			else {
				sendData(res, data);
			}
		}
	}
}