var Modeler = require('../Modeler.js')
var className = 'TypeIncidentUpdateBatch'

var TypeIncidentUpdateBatch = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    batchId: {
      type: 'string',
      wsdlDefinition: {
        name: 'batchId',
        type: 'xs:string',
        form: 'unqualified'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'incidentId',
        type: 'xs:int',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    incidentAttributes: {
      type: 'TypeIncidentAttributes',
      wsdlDefinition: {
        name: 'incidentAttributes',
        type: 'tns:IncidentAttributes',
        form: 'unqualified'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentUpdateBatch
Modeler.register(TypeIncidentUpdateBatch, 'TypeIncidentUpdateBatch')
