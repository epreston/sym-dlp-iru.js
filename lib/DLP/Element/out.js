var Modeler = require('../Modeler.js')
var className = 'Elementout'

var Elementout = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    out: {
      type: 'string',
      wsdlDefinition: {
        name: 'out',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = Elementout
Modeler.register(Elementout, 'Elementout')
