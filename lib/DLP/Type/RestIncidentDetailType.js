var Modeler = require('../Modeler.js');
var className = 'TypeRestIncidentDetailType';

var TypeRestIncidentDetailType = function (json, parentObj) {
  parentObj = parentObj || this;

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
    uniqueMessageId: {
      type: 'string',
      wsdlDefinition: {
        name: 'uniqueMessageId',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentCreationDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'incidentCreationDate',
        type: 'xs:dateTime',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    detectionDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'detectionDate',
        type: 'xs:dateTime',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    severity: {
      type: 'TypeIncidentSeverityType',
      wsdlDefinition: {
        name: 'severity',
        type: 'ns1:IncidentSeverityType',
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
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageSource: {
      type: 'TypeMessageSource',
      wsdlDefinition: {
        name: 'messageSource',
        type: 'ns1:MessageSource',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageType: {
      type: 'TypeMessageType',
      wsdlDefinition: {
        name: 'messageType',
        type: 'ns1:MessageType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    policy: {
      type: 'TypePolicyType',
      wsdlDefinition: {
        name: 'policy',
        type: 'tns:PolicyType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violatedPolicyRule: {
      type: 'TypePolicyRuleType',
      wsdlDefinition: {
        name: 'violatedPolicyRule',
        type: 'ns1:PolicyRuleType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    otherViolatedPolicy: {
      type: 'TypePolicyType',
      wsdlDefinition: {
        name: 'otherViolatedPolicy',
        type: 'tns:PolicyType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    blockedStatus: {
      type: 'TypeBlockedStatusType',
      wsdlDefinition: {
        name: 'blockedStatus',
        type: 'ns1:BlockedStatusType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchCount: {
      type: 'number',
      wsdlDefinition: {
        name: 'matchCount',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ruleViolationCount: {
      type: 'number',
      wsdlDefinition: {
        name: 'ruleViolationCount',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    detectionServer: {
      type: 'string',
      wsdlDefinition: {
        name: 'detectionServer',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
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
    incidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'incidentLongId',
        type: 'xs:long'
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
    originator: {
      type: 'TypeNetworkOriginatorType',
      wsdlDefinition: {
        name: 'originator',
        type: 'ns1:NetworkOriginatorType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recipient: {
      type: 'TypeNetworkRecipientType',
      wsdlDefinition: {
        name: 'recipient',
        type: 'ns1:NetworkRecipientType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    messageBodyContent: {
      type: 'string',
      wsdlDefinition: {
        name: 'messageBodyContent',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageHeader: {
      type: 'TypeMessageComponentType',
      wsdlDefinition: {
        name: 'messageHeader',
        type: 'ns1:MessageComponentType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    messageBody: {
      type: 'TypeMessageComponentType',
      wsdlDefinition: {
        name: 'messageBody',
        type: 'ns1:MessageComponentType',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    file: {
      type: 'TypeMessageComponentType',
      wsdlDefinition: {
        name: 'file',
        type: 'ns1:MessageComponentType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    environment: {
      type: 'TypeNetworkEnvironment',
      wsdlDefinition: {
        name: 'environment',
        type: 'ns1:NetworkEnvironment',
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
    }
  }, parentObj, json);
};

module.exports = TypeRestIncidentDetailType;
Modeler.register(TypeRestIncidentDetailType, 'TypeRestIncidentDetailType');
