var Modeler = require('../Modeler.js')
var className = 'Elementin'

var Elementin = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    in: {
      type: 'string',
      wsdlDefinition: {
        name: 'in',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = Elementin
Modeler.register(Elementin, 'Elementin')
