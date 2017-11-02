
var options = [
    {
      selector: '.projects > section', // Mandatory, CSS selector
      vh: 100,  // Mandatory, height in vh units
    },
   {
      selector: 'main > article',
      vh: 100
    }//,
    /*{
      selector: '.projects > section',
      vh: 100
    }*/
  ];
  
  var vhFix = new VHChromeFix(options);
  