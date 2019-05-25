var Modeler = require('../Modeler.js')
var className = 'ElementincidentDetailResponse'

var ElementincidentDetailResponse = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentDetailResponse: {
      type: 'TypeIncidentDetailResponse',
      wsdlDefinition: {
        name: 'incidentDetailResponse',
        type: 'tns:IncidentDetailResponse'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentDetailResponse
Modeler.register(ElementincidentDetailResponse, 'ElementincidentDetailResponse')
