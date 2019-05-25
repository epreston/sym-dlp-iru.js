var Modeler = require('../Modeler.js')
var className = 'TypeViolationType'

var TypeViolationType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    documentViolation: {
      type: 'TypeDocumentViolationType',
      wsdlDefinition: {
        name: 'documentViolation',
        type: 'tns:DocumentViolationType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violationText: {
      type: 'string',
      wsdlDefinition: {
        name: 'violationText',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileSizeViolation: {
      type: 'TypeFileSizeViolationType',
      wsdlDefinition: {
        name: 'fileSizeViolation',
        type: 'tns:FileSizeViolationType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    imageViolation: {
      type: 'TypeImageViolationType',
      wsdlDefinition: {
        name: 'imageViolation',
        type: 'tns:ImageViolationType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeViolationType
Modeler.register(TypeViolationType, 'TypeViolationType')
