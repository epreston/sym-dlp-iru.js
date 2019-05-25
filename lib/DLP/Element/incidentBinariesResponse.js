var Modeler = require('../Modeler.js');
var className = 'ElementincidentBinariesResponse';

var ElementincidentBinariesResponse = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentBinariesResponse: {
      type: 'TypeIncidentBinariesResponse',
      wsdlDefinition: {
        name: 'incidentBinariesResponse',
        type: 'tns:IncidentBinariesResponse'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementincidentBinariesResponse;
Modeler.register(ElementincidentBinariesResponse, 'ElementincidentBinariesResponse');
