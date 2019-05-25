var Modeler = require('../Modeler.js')
var className = 'ElementincidentListResponse'

var ElementincidentListResponse = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentListResponse: {
      type: 'TypeIncidentListResponse',
      wsdlDefinition: {
        name: 'incidentListResponse',
        type: 'tns:IncidentListResponse'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentListResponse
Modeler.register(ElementincidentListResponse, 'ElementincidentListResponse')
