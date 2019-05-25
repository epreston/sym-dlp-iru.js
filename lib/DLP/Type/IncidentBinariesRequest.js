var Modeler = require('../Modeler.js')
var className = 'TypeIncidentBinariesRequest'

var TypeIncidentBinariesRequest = function (json, parentObj) {
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
    includeOriginalMessage: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'includeOriginalMessage',
        type: 'xs:boolean'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    includeAllComponents: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'includeAllComponents',
        type: 'xs:boolean'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    componentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'componentId',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    componentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'componentLongId',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentBinariesRequest
Modeler.register(TypeIncidentBinariesRequest, 'TypeIncidentBinariesRequest')
