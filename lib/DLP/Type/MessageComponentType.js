var Modeler = require('../Modeler.js')
var className = 'TypeMessageComponentType'

var TypeMessageComponentType = function (json, parentObj) {
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
    componentType: {
      type: 'string',
      wsdlDefinition: {
        name: 'componentType',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': {
                name: 'typeId',
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
    policyRuleViolation: {
      type: 'TypePolicyRuleViolationType',
      wsdlDefinition: {
        name: 'policyRuleViolation',
        type: 'tns:PolicyRuleViolationType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeMessageComponentType
Modeler.register(TypeMessageComponentType, 'TypeMessageComponentType')
