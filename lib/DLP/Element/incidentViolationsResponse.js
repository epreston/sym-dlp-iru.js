var Modeler = require('../Modeler.js');
var className = 'ElementincidentViolationsResponse';

var ElementincidentViolationsResponse = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentViolationsResponse: {
      type: 'TypeIncidentViolationsResponse',
      wsdlDefinition: {
        name: 'incidentViolationsResponse',
        type: 'tns:IncidentViolationsResponse'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementincidentViolationsResponse;
Modeler.register(ElementincidentViolationsResponse, 'ElementincidentViolationsResponse');
