var Modeler = require('../Modeler.js');
var className = 'TypeRestIncidentExportType';

var TypeRestIncidentExportType = function (json, parentObj) {
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
    deviceIsTrusted: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'deviceIsTrusted',
        type: 'xs:boolean',
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
      type: 'Typelong',
      wsdlDefinition: {
        name: 'httpSiteRiskScore',
        type: 'xs:long',
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
    insideOfficeLocation: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'insideOfficeLocation',
        type: 'xs:boolean',
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
    },
    serviceScore: {
      type: 'number',
      wsdlDefinition: {
        name: 'serviceScore',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    siteClassification: {
      type: 'string',
      wsdlDefinition: {
        name: 'siteClassification',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    serviceClassification: {
      type: 'string',
      wsdlDefinition: {
        name: 'serviceClassification',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    transactionId: {
      type: 'string',
      wsdlDefinition: {
        name: 'transactionId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    requestId: {
      type: 'string',
      wsdlDefinition: {
        name: 'requestId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    applicationReportName: {
      type: 'string',
      wsdlDefinition: {
        name: 'applicationReportName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    compliant: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'compliant',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    unmanaged: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'unmanaged',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    personal: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'personal',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docInternal: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'docInternal',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userInternal: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'userInternal',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposed: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'docExposed',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposedAllInternal: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'docExposedAllInternal',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposedPublic: {
      type: 'boolean',
      wsdlDefinition: {
        name: 'docExposedPublic',
        type: 'xs:boolean',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    regionCountry: {
      type: 'string',
      wsdlDefinition: {
        name: 'regionCountry',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dataType: {
      type: 'string',
      wsdlDefinition: {
        name: 'dataType',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userActivityType: {
      type: 'string',
      wsdlDefinition: {
        name: 'userActivityType',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    applicationInstanceId: {
      type: 'string',
      wsdlDefinition: {
        name: 'applicationInstanceId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: 'string',
      wsdlDefinition: {
        name: 'description',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    activityCount: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'activityCount',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    creatorId: {
      type: 'string',
      wsdlDefinition: {
        name: 'creatorId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposuresExternalCollaborators: {
      type: 'string',
      wsdlDefinition: {
        name: 'docExposuresExternalCollaborators',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposuresInternalCollaborators: {
      type: 'string',
      wsdlDefinition: {
        name: 'docExposuresInternalCollaborators',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sharedWith: {
      type: 'string',
      wsdlDefinition: {
        name: 'sharedWith',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupMembership: {
      type: 'string',
      wsdlDefinition: {
        name: 'groupMembership',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    authSender: {
      type: 'string',
      wsdlDefinition: {
        name: 'authSender',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    authRecipient: {
      type: 'string',
      wsdlDefinition: {
        name: 'authRecipient',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    documentId: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    parentFolderIdentifier: {
      type: 'string',
      wsdlDefinition: {
        name: 'parentFolderIdentifier',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    documentType: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentType',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    logId: {
      type: 'string',
      wsdlDefinition: {
        name: 'logId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Owner: {
      type: 'string',
      wsdlDefinition: {
        name: 'Owner',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sharepoint: {
      type: 'string',
      wsdlDefinition: {
        name: 'sharepoint',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sharingUrl: {
      type: 'string',
      wsdlDefinition: {
        name: 'sharingUrl',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    docExposedCount: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'docExposedCount',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userId: {
      type: 'string',
      wsdlDefinition: {
        name: 'userId',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userName: {
      type: 'string',
      wsdlDefinition: {
        name: 'userName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    threatScore: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'threatScore',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    httpBrowser: {
      type: 'string',
      wsdlDefinition: {
        name: 'httpBrowser',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkDocExposure: {
      type: 'string',
      wsdlDefinition: {
        name: 'linkDocExposure',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkIncident: {
      type: 'string',
      wsdlDefinition: {
        name: 'linkIncident',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkServiceApplication: {
      type: 'string',
      wsdlDefinition: {
        name: 'linkServiceApplication',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkUba: {
      type: 'string',
      wsdlDefinition: {
        name: 'linkUba',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkUserExposures: {
      type: 'string',
      wsdlDefinition: {
        name: 'linkUserExposures',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    locationRegion: {
      type: 'string',
      wsdlDefinition: {
        name: 'locationRegion',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkRecipientIp: {
      type: 'string',
      wsdlDefinition: {
        name: 'networkRecipientIp',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkRecipientPort: {
      type: 'string',
      wsdlDefinition: {
        name: 'networkRecipientPort',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkSenderIp: {
      type: 'string',
      wsdlDefinition: {
        name: 'networkSenderIp',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkSenderPort: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'networkSenderPort',
        type: 'xs:long',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileCreated: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileCreated',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lastAccessed: {
      type: 'string',
      wsdlDefinition: {
        name: 'lastAccessed',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lastModified: {
      type: 'string',
      wsdlDefinition: {
        name: 'lastModified',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeRestIncidentExportType;
Modeler.register(TypeRestIncidentExportType, 'TypeRestIncidentExportType');
