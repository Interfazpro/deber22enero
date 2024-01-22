//Symbol.iterator

let range = {
    from: 10,
    to: 25
  };
  
  range[Symbol.iterator] = function() {
  
    
    return {
      current: this.from,
      last: this.to,
  
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
 
  for (let num of range) {
    alert(num); 
  }

  //muestra del 10 al 25 