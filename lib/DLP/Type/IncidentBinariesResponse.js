var Modeler = require('../Modeler.js');
var className = 'TypeIncidentBinariesResponse';

var TypeIncidentBinariesResponse = function (json, parentObj) {
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
    originalMessage: {
      type: 'Typebase64Binary',
      wsdlDefinition: {
        name: 'originalMessage',
        type: 'xs:base64Binary',
        minOccurs: '0',
        'xmime:expectedContentTypes': 'application/octet-stream'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Component: {
      type: 'string',
      wsdlDefinition: {
        name: 'Component',
        minOccurs: '0',
        maxOccurs: 'unbounded',
        $t: '',
        'xs:complexType': {
          'xs:sequence': {
            'xs:element': [
              {
                name: 'componentId',
                type: 'xs:int'
              },
              {
                name: 'name',
                type: 'xs:string'
              },
              {
                name: 'componentTypeId',
                type: 'xs:int'
              },
              {
                name: 'componentType',
                type: 'xs:string'
              },
              {
                name: 'content',
                type: 'xs:base64Binary',
                minOccurs: '0',
                'xmime:expectedContentTypes': 'application/octet-stream'
              },
              {
                name: 'componentLongId',
                type: 'xs:long'
              }
            ]
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
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
  }, parentObj, json);
};

module.exports = TypeIncidentBinariesResponse;
Modeler.register(TypeIncidentBinariesResponse, 'TypeIncidentBinariesResponse');
