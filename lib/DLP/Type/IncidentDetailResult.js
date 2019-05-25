var Modeler = require('../Modeler.js')
var className = 'TypeIncidentDetailResult'

var TypeIncidentDetailResult = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'incidentId',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    statusCode: {
      type: 'string',
      wsdlDefinition: {
        name: 'statusCode',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incident: {
      type: 'TypeIncidentDetailType',
      wsdlDefinition: {
        name: 'incident',
        type: 'tns:IncidentDetailType',
        nillable: 'true'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentDetailResult
Modeler.register(TypeIncidentDetailResult, 'TypeIncidentDetailResult')
