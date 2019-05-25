var Modeler = require('../Modeler.js')
var className = 'TypeComponentNotFoundFaultType'

var TypeComponentNotFoundFaultType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    componentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'componentId',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    componentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'componentLongId',
        type: 'xs:long'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeComponentNotFoundFaultType
Modeler.register(TypeComponentNotFoundFaultType, 'TypeComponentNotFoundFaultType')
