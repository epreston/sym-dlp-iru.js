var Modeler = require('../Modeler.js');
var className = 'ElementincidentViolationsRequest';

var ElementincidentViolationsRequest = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentViolationsRequest: {
      type: 'TypeIncidentViolationsRequest',
      wsdlDefinition: {
        name: 'incidentViolationsRequest',
        type: 'tns:IncidentViolationsRequest'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementincidentViolationsRequest;
Modeler.register(ElementincidentViolationsRequest, 'ElementincidentViolationsRequest');
