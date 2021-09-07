const fs = require('fs')
const path = require('path');
const CSVToJSON = require('csvtojson');

const currDir = path.join(__dirname + '/csvFiles/');



const readdir = (dirname) => {
    return new Promise((resolve, reject) => {
      fs.readdir(dirname, (error, filenames) => {
        if (error) {
          reject(error);
        } else {
          resolve(filenames);
        }
      });
    });
  };

  const filtercsvFiles = (filename) => {
    return filename.split('.')[1] == 'csv';
  };

  
  fs.watch(currDir, (eventType, filename) => {
    readdir(currDir).then((filenames) => {
        filenames = filenames.filter(filtercsvFiles);
    
       for (let i = 0; i < filenames.length; i++) {
        if (filename == filenames[i]){
           
            console.log(eventType);
            console.log(filename);
           
            let currFilePath = currDir + filenames[i];
    
            CSVToJSON().fromFile(currFilePath)
            .then(csvData => {
        
                let data = JSON.stringify(csvData,null, 1);
               fs.writeFileSync('./Newtest.json', data); 
            }).catch(err => {
                console.log(err);
            });

      

        }
    }
        
       
    })

   
  });


 