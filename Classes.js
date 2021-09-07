class Device {
    constructor(name, weight){
    this.name = name;
    this.weight = weight;
  }
  
  using () { 
    console.log('Device ' + this.name + 'can be used by human'); 
  };

  fall () { 
    console.log('Oh, device ' + this.weight + ' kg fell on my leg'); 
  };

 }

 class Computer extends Device  {
    constructor(name, weight, memory_size){
    super(name, weight);
    this.memory_size = memory_size; 
     }

     using () { 
        console.log('In computer ' + this.name + ' can be used '+ this.memory_size +' GB' ); 
      };
  }


  class Laptop extends Computer  {
    constructor(name, weight, memory_size, battery_run_time){
    super(name, weight, memory_size);
    this.battery_run_time = battery_run_time; 
     }
   
     life () { 
        console.log('Laptop '+ this.name + ' can be used for '+ this.battery_run_time +' hours'); 
      };
     
      get battery(){
        return this.battery;
    }
    set battery(battery_run_time){
        this.battery_run_time = battery_run_time;
    }

    }

    let newLapt = new Laptop ("Dell", 6, 64, 12);
    newLapt.life();
    newLapt.using();
    newLapt.fall();
   