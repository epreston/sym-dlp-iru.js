var Modeler = require('../Modeler.js');
var className = 'TypeIncidentViolation';

var TypeIncidentViolation = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'incidentId',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    statusCode: {
      type: 'string',
      wsdlDefinition: {
        name: 'statusCode',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violatingComponent: {
      type: 'TypeViolatingComponent',
      wsdlDefinition: {
        name: 'violatingComponent',
        type: 'tns:ViolatingComponent',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentViolation;
Modeler.register(TypeIncidentViolation, 'TypeIncidentViolation');
