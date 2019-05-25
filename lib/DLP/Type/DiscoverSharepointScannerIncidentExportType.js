var Modeler = require('../Modeler.js')
var className = 'TypeDiscoverSharepointScannerIncidentExportType'

var TypeDiscoverSharepointScannerIncidentExportType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentId',
        type: 'xs:long'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentCreationDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'incidentCreationDate',
        type: 'xs:dateTime'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    detectionDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'detectionDate',
        type: 'xs:dateTime'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    severity: {
      type: 'TypeIncidentSeverityType',
      wsdlDefinition: {
        name: 'severity',
        type: 'ns1:IncidentSeverityType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: 'TypeIncidentStatusType',
      wsdlDefinition: {
        name: 'status',
        type: 'ns1:IncidentStatusType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageSource: {
      type: 'TypeMessageSource',
      wsdlDefinition: {
        name: 'messageSource',
        type: 'ns1:MessageSource'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageType: {
      type: 'TypeMessageType',
      wsdlDefinition: {
        name: 'messageType',
        type: 'ns1:MessageType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    policyName: {
      type: 'string',
      wsdlDefinition: {
        name: 'policyName',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    policyLabel: {
      type: 'string',
      wsdlDefinition: {
        name: 'policyLabel',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    policyVersion: {
      type: 'number',
      wsdlDefinition: {
        name: 'policyVersion',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockedStatus: {
      type: 'TypeBlockedStatusType',
      wsdlDefinition: {
        name: 'blockedStatus',
        type: 'ns1:BlockedStatusType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchCount: {
      type: 'number',
      wsdlDefinition: {
        name: 'matchCount',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    detectionServer: {
      type: 'string',
      wsdlDefinition: {
        name: 'detectionServer',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numberOfMatchedTerms: {
      type: 'number',
      wsdlDefinition: {
        name: 'numberOfMatchedTerms',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violation: {
      type: 'TypeViolationType',
      wsdlDefinition: {
        name: 'violation',
        type: 'ns1:ViolationType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    customAttributeGroup: {
      type: 'TypeCustomAttributeGroupType',
      wsdlDefinition: {
        name: 'customAttributeGroup',
        type: 'ns1:CustomAttributeGroupType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    incidentHistory: {
      type: 'TypeIncidentHistoryEntryType',
      wsdlDefinition: {
        name: 'incidentHistory',
        type: 'ns1:IncidentHistoryEntryType',
        nillable: 'true',
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
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    targetServer: {
      type: 'string',
      wsdlDefinition: {
        name: 'targetServer',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    target: {
      type: 'string',
      wsdlDefinition: {
        name: 'target',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    documentName: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    repositoryLocation: {
      type: 'string',
      wsdlDefinition: {
        name: 'repositoryLocation',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    URL: {
      type: 'string',
      wsdlDefinition: {
        name: 'URL',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    contentRootPath: {
      type: 'string',
      wsdlDefinition: {
        name: 'contentRootPath',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    seenBefore: {
      type: 'string',
      wsdlDefinition: {
        name: 'seenBefore',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    superseded: {
      type: 'string',
      wsdlDefinition: {
        name: 'superseded',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileName: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filePath: {
      type: 'string',
      wsdlDefinition: {
        name: 'filePath',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    owner: {
      type: 'string',
      wsdlDefinition: {
        name: 'owner',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileACL: {
      type: 'TypeACLType',
      wsdlDefinition: {
        name: 'fileACL',
        type: 'ns1:ACLType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    createDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'createDate',
        type: 'xs:dateTime',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    createdBy: {
      type: 'string',
      wsdlDefinition: {
        name: 'createdBy',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lastModifiedBy: {
      type: 'string',
      wsdlDefinition: {
        name: 'lastModifiedBy',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lastModifiedDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'lastModifiedDate',
        type: 'xs:dateTime',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeDiscoverSharepointScannerIncidentExportType
Modeler.register(TypeDiscoverSharepointScannerIncidentExportType, 'TypeDiscoverSharepointScannerIncidentExportType')
