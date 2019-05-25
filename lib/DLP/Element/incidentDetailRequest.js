var Modeler = require('../Modeler.js')
var className = 'ElementincidentDetailRequest'

var ElementincidentDetailRequest = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentDetailRequest: {
      type: 'TypeIncidentDetailRequest',
      wsdlDefinition: {
        name: 'incidentDetailRequest',
        type: 'tns:IncidentDetailRequest'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentDetailRequest
Modeler.register(ElementincidentDetailRequest, 'ElementincidentDetailRequest')
