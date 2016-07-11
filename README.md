# node-afip

Node component for AFIP Argenina utilities.

## AFIP.Persona

Get AFIP data from CUIT.

    var AFIP = require('node-afip');
    var Persona = AFIP.Persona;
    Persona.find(30500010912).then(function(persona){
      console.log( persona.get() );
      /*
      {
    	"success":true,
    	"data":{
    		"idPersona":30500010912,
    		"tipoPersona":"JURIDICA",
    		"tipoClave":"CUIT",
    		"estadoClave":"ACTIVO",
    		"nombre":"BANCO DE LA NACION ARGENTINA",
    		"domicilioFiscal":{
    			"direccion":"MITRE BARTOLOME 326 P4 D428",
    			"codPostal":"1036",
    			"idProvincia":0
    		},
    		"idDependencia":20,
    		"mesCierre":12,
    		"fechaInscripcion":"1901-01-01",
    		"fechaContratoSocial":"1901-01-01",
    		"impuestos":[103,30,217,25,353,301,767,10,218],
    		"actividades":[641930],
    		"caracterizaciones":[72,150,153,154,300,337]
        	}
        }
      */
    });
