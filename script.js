var fileSelector = document.querySelector("input[type=file]");
var  selectedFile;
var  jsonFile;

// Event listener for File Picker
fileSelector.addEventListener("change", function() {
     var reader = new FileReader();
     // reader.addEventListener("load", function(e) {
     //      alert( e.target.result);
         
     // });
     console.log(fileSelector.files);
     reader.readAsDataURL(fileSelector.files[0]);
     selectedFile = fileSelector.files[0];
     jsonFile = csvJSON(selectedFile)
     console.log(jsonFile);
 });

//var csv is the CSV file with headers
function csvJSON(csv){
   var lines = csv.split('\n');
   var result = [];
   var headers=lines[0].split(",");
   for(var i=1;i<lines.length;i++){
          var obj = {};
          var currentline=lines[i].split(",");
   
          for(var j=0;j<headers.length;j++){
               obj[headers[j]] = currentline[j];
          }
   
          result.push(obj);
   
     }
     
     return JSON.stringify(result); //JSON
   }