var Modeler = require('../Modeler.js')
var className = 'TypeIncidentAttributes'

var TypeIncidentAttributes = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    severity: {
      type: 'TypeIncidentSeverityType',
      wsdlDefinition: {
        name: 'severity',
        type: 'ns1:IncidentSeverityType',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: 'TypeIncidentStatusType',
      wsdlDefinition: {
        name: 'status',
        type: 'ns1:IncidentStatusType',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    note: {
      type: 'TypeIncidentNote',
      wsdlDefinition: {
        name: 'note',
        type: 'tns:IncidentNote',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    customAttribute: {
      type: 'TypeCustomAttributeType',
      wsdlDefinition: {
        name: 'customAttribute',
        type: 'ns1:CustomAttributeType',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    dataOwner: {
      type: 'TypeDataOwnerType',
      wsdlDefinition: {
        name: 'dataOwner',
        type: 'ns1:DataOwnerType',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    remediationStatus: {
      type: 'string',
      wsdlDefinition: {
        name: 'remediationStatus',
        type: 'xs:string',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    remediationLocation: {
      type: 'string',
      wsdlDefinition: {
        name: 'remediationLocation',
        type: 'xs:string',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentAttributes
Modeler.register(TypeIncidentAttributes, 'TypeIncidentAttributes')
