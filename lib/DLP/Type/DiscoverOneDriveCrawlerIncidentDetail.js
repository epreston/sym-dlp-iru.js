var Modeler = require('../Modeler.js');
var className = 'TypeDiscoverOneDriveCrawlerIncidentDetail';

var TypeDiscoverOneDriveCrawlerIncidentDetail = function (json, parentObj) {
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
    scan: {
      type: 'TypeScanAssignmentType',
      wsdlDefinition: {
        name: 'scan',
        type: 'ns1:ScanAssignmentType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    contentRootPath: {
      type: 'string',
      wsdlDefinition: {
        name: 'contentRootPath',
        type: 'xs:string'
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
    remediationLocation: {
      type: 'string',
      wsdlDefinition: {
        name: 'remediationLocation',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileID: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileID',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileName: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileName',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filePath: {
      type: 'string',
      wsdlDefinition: {
        name: 'filePath',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileCreatedBy: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileCreatedBy',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileModifiedBy: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileModifiedBy',
        type: 'xs:string'
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
    fileLastModifiedDate: {
      type: 'date',
      wsdlDefinition: {
        name: 'fileLastModifiedDate',
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
    fileOwner: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileOwner',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileCollaborator: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileCollaborator',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded',
        'xs:complexType': {
          'xs:sequence': {
            'xs:element': [
              {
                name: 'collaborator',
                type: 'xs:string'
              },
              {
                name: 'role',
                'xs:complexType': {
                  'xs:simpleContent': {
                    'xs:extension': {
                      base: 'xs:string',
                      'xs:attribute': {
                        name: 'id',
                        type: 'xs:string',
                        use: 'required'
                      }
                    }
                  }
                }
              }
            ]
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
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

module.exports = TypeDiscoverOneDriveCrawlerIncidentDetail;
Modeler.register(TypeDiscoverOneDriveCrawlerIncidentDetail, 'TypeDiscoverOneDriveCrawlerIncidentDetail');
