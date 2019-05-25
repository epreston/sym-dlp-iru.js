var Modeler = require('../Modeler.js')
var className = 'TypeViolatingComponent'

var TypeViolatingComponent = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    name: {
      type: 'string',
      wsdlDefinition: {
        name: 'name',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    documentFormat: {
      type: 'string',
      wsdlDefinition: {
        name: 'documentFormat',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violatingComponentType: {
      type: 'string',
      wsdlDefinition: {
        name: 'violatingComponentType',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': {
                name: 'id',
                type: 'xs:int'
              }
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violationCount: {
      type: 'number',
      wsdlDefinition: {
        name: 'violationCount',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violatingSegment: {
      type: 'TypeViolatingSegment',
      wsdlDefinition: {
        name: 'violatingSegment',
        type: 'tns:ViolatingSegment',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    violatingImageInformation: {
      type: 'string',
      wsdlDefinition: {
        name: 'violatingImageInformation',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded',
        'xs:complexType': {
          'xs:complexContent': {
            'xs:extension': {
              base: 'ns1:ImageViolationType',
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
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeViolatingComponent
Modeler.register(TypeViolatingComponent, 'TypeViolatingComponent')
