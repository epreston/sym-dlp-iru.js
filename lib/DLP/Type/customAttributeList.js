var Modeler = require('../Modeler.js')
var className = 'TypecustomAttributeList'

var TypecustomAttributeList = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    customAttributeName: {
      type: 'string',
      wsdlDefinition: {
        name: 'customAttributeName',
        type: 'xs:string',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypecustomAttributeList
Modeler.register(TypecustomAttributeList, 'TypecustomAttributeList')
