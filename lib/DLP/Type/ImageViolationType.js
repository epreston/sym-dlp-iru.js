var Modeler = require('../Modeler.js');
var className = 'TypeImageViolationType';

var TypeImageViolationType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    violationImageIdentifier: {
      type: 'string',
      wsdlDefinition: {
        name: 'violationImageIdentifier',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    confidence: {
      type: 'string',
      wsdlDefinition: {
        name: 'confidence',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fillScore: {
      type: 'Typeinteger',
      wsdlDefinition: {
        name: 'fillScore',
        type: 'xs:integer',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    queryFile: {
      type: 'string',
      wsdlDefinition: {
        name: 'queryFile',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    gallery: {
      type: 'string',
      wsdlDefinition: {
        name: 'gallery',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    profileName: {
      type: 'string',
      wsdlDefinition: {
        name: 'profileName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeImageViolationType;
Modeler.register(TypeImageViolationType, 'TypeImageViolationType');
