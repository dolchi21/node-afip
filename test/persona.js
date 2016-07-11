var assert = require('assert');

describe('Persona', function(){
	
	this.timeout(1000 * 10);

	var Persona = require('../index').Persona;

	it('should get Banco de la Nacion Argentina\'s persona. (CUIT: 30500010912)', function(done){

		Persona.find(30500010912).then(function(persona){

			assert(persona);
			assert.equal(persona.get('name'), 'BANCO DE LA NACION ARGENTINA');
			assert.equal(persona.get('type'), 'JURIDICA');
			
			done();

		}).catch(done);

	});

});