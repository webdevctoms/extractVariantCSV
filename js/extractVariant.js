//use this class to handle all functions related to extracting the variants
function ExtractVariant(){
	this.commaSplitData;
	this.variantMap = {
		colour:{
			BK:"Black",
			BM:"Black Matte",
			MC:"Multicam",
			RG:"Ranger Green",
			CB:"Coyote Brown",
			OR:"Orange",
			GR:"Grey",
			GY:"Grey",
			TN:"Tan",
			WHT:"White",
			MG:"Matte Grey",
			OD:"Olive Drab",
			SD:"Sand",
			RD:"Red",
			NT:"Natural",
			Black:"Black",
			Grey:"Grey",
			Olive:"Olive",
			Sand:"Sand",
			BL:"Blue",
			BZO:"Blaze Orange",
			NV:"Navy",
			RTX:"RealTree Xtra",
			MAR:"Multicam Arid",
			MBK:"Multicam Black",
			MTR:"Multicam Tropic",
			KH:"Khaki",
			CP:"CADPAT",
			AOR:"AOR 1",
			AOR1:"AOR 1",
			"RD.SLV":"Red/Silver",
			"SLV.RD":"Silver/Red",
			FG:"Foliage Green",
			"CB.FG":"Coyote Brown/Foliage Green",
			"FG.CB":"Foliage Green/Coyote Brown",
			Bk:"Crye Black"
		},
		size:{
			XS:"X-Small",
			SM: "Small",
			MD:"Medium",
			LG:"Large",
			XL:"Extra Large",
			"2X":"2X-Large",
			"3X":"3X-Large",
			"2XL":"2X-Large",
			"3XL":"4X-Large",
			"4XL":"5X-Large",
			"5XL":"3X-Large",
			"2XS":"2X-Small",
			"3XS":"3X-Small",
			"4XS":"4X-Small",
			"L.XL":"Large/X-Large",
			"SM.MED":"Small/Medium",
			"6_3.4":"6 3/4",
			"7":"7",
			"7_1.2":"7 1/2",
			"7_1.4":"7 1/4",
			"7_1.8":"7 1/8",
			"7_3.4":"7 3/4",
			LRG:"Large",
			MED:"Medium",
			XLG:"X-Large",
			"20":"20 FR",
			"22":"22 FR",
			"24":"24 FR",
			"26":"26 FR",
			"28":"28 FR",
			"30":"30 FR",
			"32":"32 FR",
			"34":"34 FR",
			"1":"1",
			"2":"2",
			"3":"3",
			"4":"4",
			"7":"7",
			"8":"8",
			"9":"9",
			"10":"10",
			"11":"11",
			"6/30":"x 30 m",
			"6/46":"x 46 m",
			"6/60": "x 60 m",
			"6/76":"x 76 m",
			"6/110":"x 110 m",
		},
		"Waist Size":{
			"28":"28",
			"30":"30",
			"32":"32",
			"34":"34",
			"36":"36",
			"38":"38",
			"40":"40",
			"42":"42",
			"44":"44",
			"46":"46"
		},
		"Length":{
			S:"Short",
			R:"Regular",
			L:"Long",
			XL: "X-Long"
		},
		"Needle Gauge":{
			"10":"10 G x 3.25 inch",
			"14":"14 G x 3.25 inch"
		},
		"Foam Option":{
			"PC1":"Precut Foam Option 1",
			"PC2":"Precut Foam Option 2",
			"UC": "Uncut Foam"
		}

	};
}

ExtractVariant.prototype.searchItemCodes = function(){
	let fiveDigitPattern = /\d{5}/g;
	for(let i = 1;i < this.commaSplitData.length;i++){
		let splitItemCode = this.commaSplitData[i][0].split("-");
		if(splitItemCode.length > 1 ){
			for(let k = 0;k < splitItemCode.length;k++){
				console.log("before if:",splitItemCode[k],(!this.variantMap[splitItemCode[k]] && !fiveDigitPattern.test(splitItemCode[k])),!this.variantMap[splitItemCode[k]],!fiveDigitPattern.test(splitItemCode[k]));
				if(!this.variantMap[splitItemCode[k]] && !fiveDigitPattern.test(splitItemCode[k]) && splitItemCode[k] !== ","){
					//console.log(splitItemCode[k],!fiveDigitPattern.test(splitItemCode[k]))
					this.variantMap[splitItemCode[k].replace(",","")] = splitItemCode[k].replace(",","");
				}
			}
		}
	}
}

ExtractVariant.prototype.initExtract = function(commaSplitData) {
	this.commaSplitData = commaSplitData;
	this.searchItemCodes();
	console.log(this.variantMap);
};