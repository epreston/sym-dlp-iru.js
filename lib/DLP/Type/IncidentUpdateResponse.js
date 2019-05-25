var Modeler = require('../Modeler.js')
var className = 'TypeIncidentUpdateResponse'

var TypeIncidentUpdateResponse = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    batchResult: {
      type: 'TypeIncidentUpdateBatchResult',
      wsdlDefinition: {
        name: 'batchResult',
        type: 'tns:IncidentUpdateBatchResult',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentUpdateResponse
Modeler.register(TypeIncidentUpdateResponse, 'TypeIncidentUpdateResponse')
