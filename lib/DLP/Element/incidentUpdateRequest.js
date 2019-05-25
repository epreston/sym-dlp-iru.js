var Modeler = require('../Modeler.js');
var className = 'ElementincidentUpdateRequest';

var ElementincidentUpdateRequest = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentUpdateRequest: {
      type: 'TypeIncidentUpdateRequest',
      wsdlDefinition: {
        name: 'incidentUpdateRequest',
        type: 'tns:IncidentUpdateRequest'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementincidentUpdateRequest;
Modeler.register(ElementincidentUpdateRequest, 'ElementincidentUpdateRequest');
