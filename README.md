# node-afip

Node component for AFIP Argenina utilities.

    var AFIP = require('node-afip');
    var Persona = AFIP.Persona;
    Persona.find(30500010912).then(function(persona){
      console.log( persona.get() );
    });
