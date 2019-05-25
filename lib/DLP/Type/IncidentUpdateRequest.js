var Modeler = require('../Modeler.js')
var className = 'TypeIncidentUpdateRequest'

var TypeIncidentUpdateRequest = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    updateBatch: {
      type: 'TypeIncidentUpdateBatch',
      wsdlDefinition: {
        name: 'updateBatch',
        type: 'tns:IncidentUpdateBatch',
        form: 'unqualified',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentUpdateRequest
Modeler.register(TypeIncidentUpdateRequest, 'TypeIncidentUpdateRequest')
