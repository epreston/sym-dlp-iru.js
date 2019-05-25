var Modeler = require('../Modeler.js')
var className = 'TypeDocumentViolationType'

var TypeDocumentViolationType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    documentProfileName: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentProfileName',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    documentPath: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentPath',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    exactMatch: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'exactMatch',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchPercentage: {
      type: 'string',
      wsdlDefinition: {
        name: 'matchPercentage',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeDocumentViolationType
Modeler.register(TypeDocumentViolationType, 'TypeDocumentViolationType')
