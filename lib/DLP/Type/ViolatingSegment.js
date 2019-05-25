var Modeler = require('../Modeler.js')
var className = 'TypeViolatingSegment'

var TypeViolatingSegment = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    documentViolation: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentViolation',
        minOccurs: '0',
        'xs:complexType': {
          'xs:complexContent': {
            'xs:extension': {
              base: 'ns1:DocumentViolationType',
              'xs:sequence': {},
              'xs:attribute': [
                {
                  name: 'ruleId',
                  type: 'xs:int'
                },
                {
                  name: 'ruleName',
                  type: 'xs:string'
                }
              ]
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileSizeViolation: {
      type: 'string',
      wsdlDefinition: {
        name: 'fileSizeViolation',
        minOccurs: '0',
        'xs:complexType': {
          'xs:complexContent': {
            'xs:extension': {
              base: 'ns1:FileSizeViolationType',
              'xs:sequence': {},
              'xs:attribute': [
                {
                  name: 'ruleId',
                  type: 'xs:int'
                },
                {
                  name: 'ruleName',
                  type: 'xs:string'
                }
              ]
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    text: {
      type: 'string',
      wsdlDefinition: {
        name: 'text',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': [
                {
                  name: 'type',
                  type: 'tns:textType',
                  use: 'required'
                },
                {
                  name: 'ruleId',
                  type: 'xs:int'
                },
                {
                  name: 'ruleName',
                  type: 'xs:string'
                }
              ]
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeViolatingSegment
Modeler.register(TypeViolatingSegment, 'TypeViolatingSegment')
