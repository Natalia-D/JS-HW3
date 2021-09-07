const fs = require('fs');
const XLSX = require ('xlsx');



  function convertJsonToExcel (pathToJson, pathToxlsx ) {
      
    
    try {
      let arrayNew =[];

             
      const file= fs.readFileSync(pathToJson);
      let obj = JSON.parse(file);
      let array = Object.keys(obj)
             
          
      for (var i = 0; i < array.length; i++) {
        arrayNew.push([array[i]],obj[array[i]]);
        
      }
        
      function addValues(obj) {
       
        for(let k in obj) {
            if(obj[k] instanceof Object) {
                addValues(obj[k]);
            } else {
                arrayNew.push(obj);     
            };
        }
    
        };

      
addValues(obj);
      

const arrayNew1 = new Set(arrayNew);
const arrayNew2 = [...arrayNew1];


       const workSheet = XLSX.utils.json_to_sheet(arrayNew2);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "jsonFile");
    
      XLSX.write(workBook, {bookType:'xlsx', type:"buffer"});
    
      XLSX.write(workBook, {bookType:'xlsx', type:"binary"});
    
      XLSX.writeFile(workBook, pathToxlsx);
        
      }
       catch(err) {
        console.log(err)
        return
      }

   
  }

convertJsonToExcel('./jsonFiles/json1.json', './newFile.xlsx');

