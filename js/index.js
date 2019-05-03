//use this class to order the sequence of functions from the extract variant class
//this class can contain all event listeners
function App(dropZoneID){

	this.csvDropZone = document.getElementById(dropZoneID);
	console.log(this.csvDropZone);
	this.commaSplitData;
	this.captureCSV = new CaptureCSV();
}

App.prototype.initApp = function() {
	this.csvDropZone.addEventListener("drop",function(e){
		e.preventDefault();
		this.fileDropped(e);
	}.bind(this),false);

	//need this to prevent default downloading of file
	this.csvDropZone.addEventListener("dragover",function(e){
		e.preventDefault();
	}.bind(this),false);
	//console.log("start app");
};

App.prototype.fileDropped = function(event){
	let csvFile = event.dataTransfer.items[0].getAsFile();
	this.captureCSV.readFile(csvFile)

	.then(commaSplitData => {
		this.commaSplitData = commaSplitData;
		console.log(this.commaSplitData);
	})

	.catch(err => {
		console.log("error reading file", err);
	});
	//console.log(this.commaSplitData);
}

let app = new App("drop_zone");
window.onload = app.initApp();
