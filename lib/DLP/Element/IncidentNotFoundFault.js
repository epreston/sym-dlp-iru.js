var Modeler = require('../Modeler.js')
var className = 'ElementIncidentNotFoundFault'

var ElementIncidentNotFoundFault = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    IncidentNotFoundFault: {
      type: 'TypeIncidentNotFoundFaultType',
      wsdlDefinition: {
        name: 'IncidentNotFoundFault',
        type: 'tns:IncidentNotFoundFaultType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementIncidentNotFoundFault
Modeler.register(ElementIncidentNotFoundFault, 'ElementIncidentNotFoundFault')
