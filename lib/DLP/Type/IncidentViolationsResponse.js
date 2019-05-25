var Modeler = require('../Modeler.js');
var className = 'TypeIncidentViolationsResponse';

var TypeIncidentViolationsResponse = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentViolation: {
      type: 'TypeIncidentViolation',
      wsdlDefinition: {
        name: 'incidentViolation',
        type: 'tns:IncidentViolation',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentViolationsResponse;
Modeler.register(TypeIncidentViolationsResponse, 'TypeIncidentViolationsResponse');
