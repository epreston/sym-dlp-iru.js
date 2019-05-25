var Modeler = require('../Modeler.js');
var className = 'TypeMobileRESTIncidentExportType';

var TypeMobileRESTIncidentExportType = function (json, parentObj) {
  parentObj = parentObj || this;

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
    messageDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'messageDate',
        type: 'xs:dateTime'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    originatorIdentifier: {
      type: 'string',
      wsdlDefinition: {
        name: 'originatorIdentifier',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recipientIdentifier: {
      type: 'string',
      wsdlDefinition: {
        name: 'recipientIdentifier',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    hasAttachment: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'hasAttachment',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    applicationName: {
      type: 'string',
      wsdlDefinition: {
        name: 'applicationName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpUrl: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpUrl',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deviceOS: {
      type: 'string',
      wsdlDefinition: {
        name: 'deviceOS',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkDirection: {
      type: 'string',
      wsdlDefinition: {
        name: 'networkDirection',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deviceType: {
      type: 'string',
      wsdlDefinition: {
        name: 'deviceType',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    isTrustedDevice: {
      type: 'string',
      wsdlDefinition: {
        name: 'isTrustedDevice',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    locationCoordsLatitude: {
      type: 'string',
      wsdlDefinition: {
        name: 'locationCoordsLatitude',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    locationCoordsLongitude: {
      type: 'string',
      wsdlDefinition: {
        name: 'locationCoordsLongitude',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkProtocol: {
      type: 'string',
      wsdlDefinition: {
        name: 'networkProtocol',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpMethod: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpMethod',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpUserAgent: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpUserAgent',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpCookies: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpCookies',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpSiteRiskScore: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpSiteRiskScore',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    locationIsInsideOffice: {
      type: 'string',
      wsdlDefinition: {
        name: 'locationIsInsideOffice',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    restRequestId: {
      type: 'string',
      wsdlDefinition: {
        name: 'restRequestId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    restCustom: {
      type: 'string',
      wsdlDefinition: {
        name: 'restCustom',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileTag: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileTag',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileFolder: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileFolder',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeMobileRESTIncidentExportType;
Modeler.register(TypeMobileRESTIncidentExportType, 'TypeMobileRESTIncidentExportType');
