var Modeler = require('../Modeler.js')
var className = 'TypeInvalidRequestFaultType'

var TypeInvalidRequestFaultType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    errorMessage: {
      type: 'string',
      wsdlDefinition: {
        name: 'errorMessage',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeInvalidRequestFaultType
Modeler.register(TypeInvalidRequestFaultType, 'TypeInvalidRequestFaultType')
