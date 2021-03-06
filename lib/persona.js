(function(factory){
	
	'use strict';

	if (typeof module === 'object' && module.exports) {
		module.exports = factory( require('axios') );
	} else {
		factory(axios);
	}

})(function PersonaFactory(axios){
	
	'use strict';

	function Persona(data){
		
		var self = this;
		
		this.dataValues = data || {}
		
		function get(key){
			if (key === undefined) {
				return self.dataValues;
			}
			return self.dataValues[key];
		}
		
		this.get = get;

	}

	Persona.find = function find(code){
		return axios.get('https://soa.afip.gob.ar/sr-padron/v2/persona/' + code).then(function(response){
			
			var json = response.data;
			if (!json.success) { return null; }
			var data = json.data;

			var address = (function(data){
				var a = null;
				if (data) {
					if (data.direccion) {
						a = data.direccion;
					}
					if (a && data.localidad) {
						a += ', ' + data.localidad;
					}
				}
				return a;
			})(data.domicilioFiscal);

			return new Persona(Object.assign(data, {
				name : data.nombre,
				type : data.tipoPersona,
				address : address
			}));

		});
	}

	return Persona;

});