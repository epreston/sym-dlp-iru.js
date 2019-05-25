var Modeler = require('../Modeler.js');
var className = 'TypeIncidentNotFoundFaultType';

var TypeIncidentNotFoundFaultType = function (json, parentObj) {
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

module.exports = TypeIncidentNotFoundFaultType;
Modeler.register(TypeIncidentNotFoundFaultType, 'TypeIncidentNotFoundFaultType');
