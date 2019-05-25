var Modeler = require('../Modeler.js')
var className = 'TypetextType'

var TypetextType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    textType: {
      type: 'string',
      wsdlDefinition: {
        name: 'textType',
        'xs:restriction': {
          base: 'xs:string',
          'xs:enumeration': [
            {
              value: 'Violation'
            },
            {
              value: 'NonViolation'
            }
          ]
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypetextType
Modeler.register(TypetextType, 'TypetextType')
