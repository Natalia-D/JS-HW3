function Device(name, weight) {
    this.name = name;
    this.weight = weight;
  };
  
  Device.prototype.using = function() { 
    console.log('Device ' +this.name + 'can be used by human'); 
  };

  Device.prototype.fall = function() { 
    console.log('Oh, device ' +this.weight + ' kg fell on my leg'); 
  };
  
  function Computer(name, weight, memory_size) {
    Device.call(this, name, weight);
    this.memory_size = memory_size; 
  };

 
  function Laptop(name, weight, memory_size, battery_run_time) {
    Computer.call(this, name, memory_size, weight);
    this.battery_run_time = battery_run_time; 
     };

Computer.prototype = Object.create(Device.prototype);

     
Computer.prototype.using = function() { 
 console.log('In computer ' + this.name + ' can be used '+ this.memory_size +' GB' ); 
     };
    
  
  Laptop.prototype = Object.create(Computer.prototype);
  Laptop.prototype.constructor = Laptop;

  Laptop.prototype.life = function() { 
    console.log('Laptop '+ this.name + ' can be used for '+ this.battery_run_time +' hours'); 
  };
  
 const newLaptop = new Laptop("HP", 32, 5, 16);
 newLaptop.using();
 newLaptop.life();
 newLaptop.fall();