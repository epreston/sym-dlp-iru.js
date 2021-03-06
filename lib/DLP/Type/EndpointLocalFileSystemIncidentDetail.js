var Modeler = require('../Modeler.js');
var className = 'TypeEndpointLocalFileSystemIncidentDetail';

var TypeEndpointLocalFileSystemIncidentDetail = function (json, parentObj) {
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
    eventDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'eventDate',
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
    applicationPath: {
      type: 'string',
      wsdlDefinition: {
        name: 'applicationPath',
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
    machineName: {
      type: 'string',
      wsdlDefinition: {
        name: 'machineName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    machineIP: {
      type: 'string',
      wsdlDefinition: {
        name: 'machineIP',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userJustification: {
      type: 'string',
      wsdlDefinition: {
        name: 'userJustification',
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
    sourceFileName: {
      type: 'string',
      wsdlDefinition: {
        name: 'sourceFileName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceFilePath: {
      type: 'string',
      wsdlDefinition: {
        name: 'sourceFilePath',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    volumeName: {
      type: 'string',
      wsdlDefinition: {
        name: 'volumeName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DOSVolumeName: {
      type: 'string',
      wsdlDefinition: {
        name: 'DOSVolumeName',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileLastAccessDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'fileLastAccessDate',
        type: 'xs:dateTime',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileCreateDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'fileCreateDate',
        type: 'xs:dateTime',
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
    }
  }, parentObj, json);
};

module.exports = TypeEndpointLocalFileSystemIncidentDetail;
Modeler.register(TypeEndpointLocalFileSystemIncidentDetail, 'TypeEndpointLocalFileSystemIncidentDetail');
