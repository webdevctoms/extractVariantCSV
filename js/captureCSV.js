function CaptureCSV(){
	console.log("CaptureCSV")
	this.commaSplitArr;
}

CaptureCSV.prototype.splitByCommas = function(newLineArr){
	//const commaRegex = /\"*(.*?)(?:\"*\,)/g;
	const commaRegex = /\"(.*?)(?<!\")(?:\"\,)|\"(.*?)(?:\"{3}\,)|(.*?)(?:\,)/g;
	let commaSplitArr = [];
	for(let i = 0;i < newLineArr.length;i++){
		//issues with matching 3 " so just remove any cases of 3 "
		let sanitizedString = newLineArr[i].replace(/\"{3}/g,'"').replace(/\#/g,"");
		let rowMatches = sanitizedString.match(commaRegex);
		commaSplitArr.push(rowMatches);		
	}
	//remove last blank
	commaSplitArr.pop();
	
	return commaSplitArr;
}

CaptureCSV.prototype.readFile = function(csvFile){
	let promise = new Promise((resolve,reject) => {
		let reader = new FileReader();

		reader.onload = function(event){
			let fileString = event.target.result;
			let newLineSplitFile = fileString.split("\n");
			//console.log(newLineSplitFile);
			this.commaSplitArr = this.splitByCommas(newLineSplitFile);
			//console.log(this.commaSplitArr);
			//this.reorderedArray = this.commaSplitArr;
			resolve(this.commaSplitArr);
			
		}.bind(this);

		reader.readAsText(csvFile);
	});
	
	return promise;
}