var Modeler = require('../Modeler.js')
var className = 'TypeCustomAttributeType'

var TypeCustomAttributeType = function (json, parentObj) {
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
    value: {
      type: 'string',
      wsdlDefinition: {
        name: 'value',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeCustomAttributeType
Modeler.register(TypeCustomAttributeType, 'TypeCustomAttributeType')
