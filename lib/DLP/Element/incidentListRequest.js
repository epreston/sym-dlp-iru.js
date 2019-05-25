var Modeler = require('../Modeler.js');
var className = 'ElementincidentListRequest';

var ElementincidentListRequest = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentListRequest: {
      type: 'TypeIncidentListRequest',
      wsdlDefinition: {
        name: 'incidentListRequest',
        type: 'tns:IncidentListRequest'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementincidentListRequest;
Modeler.register(ElementincidentListRequest, 'ElementincidentListRequest');
