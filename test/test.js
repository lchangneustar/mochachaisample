var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://restcountries.eu/rest/v1');

var $data = api.get('/name/norway')

describe('Check Headers',function(){
	it('should return a 200 response', function(done) {
		api
		.get('/name/norway')
		.expect(200,done);
	});
});

describe('Nprway',function(){	
	it('has capital "Oslo"', function(done){
		api
			.get('/name/norway')
			.expect(200)
			.end(function(err,res) {
				expect(res.body[0]).to.have.property("capital");
				expect(res.body[0].capital).to.equal("Oslo");
				//console.log(res.body[0]);

				done();
		});
	});
});

describe('asdf', function(){
	it('asdf', function(done){      
		$data.expect(200);
		done();
	})
})

