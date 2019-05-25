var Modeler = require('../Modeler.js');
var className = 'TypeIncidentDetailResponse';

var TypeIncidentDetailResponse = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    response: {
      type: 'TypeIncidentDetailResult',
      wsdlDefinition: {
        name: 'response',
        type: 'tns:IncidentDetailResult',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentDetailResponse;
Modeler.register(TypeIncidentDetailResponse, 'TypeIncidentDetailResponse');
