function$(vArg){
	switch (vArg[0]){
		case "#"://id
			return document.getElementById((vArg.substring(1));
			break;
		case "."://classname
			return elementByClassName(document,vArg.substring(1));
			break;
		default:
			var str=vArg.substring((0,5);
			if (str=="name=") {
				return document.getElementsByName(vArg.substring(5));
			}
			else {
				return document.getElementsByTagName(vArg);
			}
	}
}

function elementByClassName(parent.classStr){
	var nodes=parent.getElementsByTagName('*')
	var result =[];
	for (var i=0;i<nodes.length;i++) {
		if (nodes[i].className==classStr){
			result.push(nodes[i]);
		}
	}
	return result
}