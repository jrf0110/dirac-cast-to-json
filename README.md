# Dirac cast to JSON

Database middleware for [dirac](http://github.com/jrf0110/dirac) that automatically stringifies fields.

## Install

```
npm install dirac-cast-to-json
```

## Usage

```javascript
var dirac = require('dirac');

dirac.use( require('dirac-cast-to-json')() );
```

## Options

By default, the options are:

```javascript
{
  operations: ['insert', 'update']
, types: ['json']
}
```

```javascript
var dirac = require('dirac');

dirac.use( require('dirac-cast-to-json')({
  operations: ['insert', 'update', 'myCustomUpdateFunction']
, types: ['json', 'my-special-json-type']
}));
```

## Tests

```
npm test
```
