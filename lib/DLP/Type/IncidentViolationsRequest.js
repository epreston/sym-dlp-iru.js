var Modeler = require('../Modeler.js')
var className = 'TypeIncidentViolationsRequest'

var TypeIncidentViolationsRequest = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'incidentId',
        type: 'xs:int',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    includeImageViolations: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'includeImageViolations',
        type: 'xs:boolean',
        default: 'false',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentViolationsRequest
Modeler.register(TypeIncidentViolationsRequest, 'TypeIncidentViolationsRequest')
