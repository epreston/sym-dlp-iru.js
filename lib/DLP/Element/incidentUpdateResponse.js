var Modeler = require('../Modeler.js')
var className = 'ElementincidentUpdateResponse'

var ElementincidentUpdateResponse = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentUpdateResponse: {
      type: 'TypeIncidentUpdateResponse',
      wsdlDefinition: {
        name: 'incidentUpdateResponse',
        type: 'tns:IncidentUpdateResponse'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentUpdateResponse
Modeler.register(ElementincidentUpdateResponse, 'ElementincidentUpdateResponse')
