document.getElementById('file').onchange = function(){

	var file = this.files[0];

	var ImageNameList = [];
	var reader = new FileReader();
	reader.onload = function(progressEvent){
    // By lines
    var lines = this.result.split('\n');
    
    for(var line = 0; line < lines.length; line++){
    	console.log(lines[line]);
    	ImageNameList.push(lines[line]);
    	document.getElementById("test").innerHTML = ImageNameList;


    	
    	var node = document.createElement("LI");
    	var img = document.createElement('img');
    	img.id = "img"+line;
		img.src = ImageNameList[line];

    	node.appendChild(img);
    	document.getElementById('myList').appendChild(node);

    }
    /*Adding event*/
    for(var line = 0; line < lines.length; line++){
    	document.getElementById("img"+line).addEventListener("click",function(e){
    		alert("RERER");
    	})
    }
    document.getElementById("myList").addEventListener("click",function(thuyen) {

    	if(thuyen.nodeName == "LI") {
    		alert('was clicked');
    	};

    })
};
reader.readAsText(file);
};



/*
DISPLAY IMAGES
function displayAllImages() {
    var i = 0,
        len = ImageNameList.length;        
    for (; i < ImageNameList.length; i++) {
        
        var img = new Image();
        img.src = ImageNameList[i];

        
        document.getElementById('images').appendChild(img);       
    }
};


    function buildImage() {
      var img = document.createElement('img')
      img.src = ImageNameList[0];
      document.getElementById('content').appendChild(img);
  }*/


	/*
READ FILE
	function readSingleFile(e) {
	  var file = e.target.files[0];
	  if (!file) {
	    return;
	  }
	  var reader = new FileReader();
	  reader.onload = function(e) {
	    var contents = e.target.result;
	    // Display file content
	    displayContents(contents);
	  };
	  reader.readAsText(file);
	}
	 
	function displayContents(contents) {
	  var element = document.getElementById('file-content');
	  element.innerHTML = contents;
	}
	 
	document.getElementById('file-input').addEventListener('change', readSingleFile, false);*/