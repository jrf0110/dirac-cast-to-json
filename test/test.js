var assert = require('assert');
var dirac = require('dirac');
var castToJSON = require('../');

dirac.use( castToJSON() );

dirac.register({
  name: 'test_a'
, schema: {
    test_field: {
      type: 'json'
    }
  }
});

dirac.init({ database: 'dirac_cast_to_json_test'});

describe('Main Tests', function(){
  it('should cast before insert', function( done ){
    dirac.dals.test_a.before('insert', function( $query, schema, next ){
      assert.equal(
        typeof $query.values.test_field
      , 'string'
      );

      done();
    });

    dirac.dals.test_a.insert({
      test_field: {}
    });
  });

  it('should cast before update', function( done ){
    dirac.dals.test_a.before('update', function( $query, schema, next ){
      assert.equal(
        typeof $query.updates.test_field
      , 'string'
      );
      
      done();
    });

    dirac.dals.test_a.update({}, {
      test_field: {}
    });
  });
});