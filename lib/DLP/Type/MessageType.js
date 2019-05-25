var Modeler = require('../Modeler.js')
var className = 'TypeMessageType'

var TypeMessageType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    MessageType: {
      type: 'string',
      wsdlDefinition: {
        name: 'MessageType',
        'xs:simpleContent': {
          'xs:extension': {
            base: 'xs:string',
            'xs:attribute': {
              name: 'typeId',
              type: 'xs:int',
              use: 'required'
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeMessageType
Modeler.register(TypeMessageType, 'TypeMessageType')
