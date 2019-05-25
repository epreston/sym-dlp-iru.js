var Modeler = require('../Modeler.js')
var className = 'ElementincidentBinariesRequest'

var ElementincidentBinariesRequest = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentBinariesRequest: {
      type: 'TypeIncidentBinariesRequest',
      wsdlDefinition: {
        name: 'incidentBinariesRequest',
        type: 'tns:IncidentBinariesRequest'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentBinariesRequest
Modeler.register(ElementincidentBinariesRequest, 'ElementincidentBinariesRequest')
