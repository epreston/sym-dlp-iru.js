var Modeler = require('../Modeler.js')
var className = 'TypePolicyType'

var TypePolicyType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    name: {
      type: 'string',
      wsdlDefinition: {
        name: 'name',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    version: {
      type: 'number',
      wsdlDefinition: {
        name: 'version',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    label: {
      type: 'string',
      wsdlDefinition: {
        name: 'label',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypePolicyType
Modeler.register(TypePolicyType, 'TypePolicyType')
