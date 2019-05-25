var Modeler = require('../Modeler.js')
var className = 'TypePolicyRuleViolationType'

var TypePolicyRuleViolationType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    policyRule: {
      type: 'TypePolicyRuleType',
      wsdlDefinition: {
        name: 'policyRule',
        type: 'tns:PolicyRuleType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    violation: {
      type: 'TypeViolationType',
      wsdlDefinition: {
        name: 'violation',
        type: 'tns:ViolationType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypePolicyRuleViolationType
Modeler.register(TypePolicyRuleViolationType, 'TypePolicyRuleViolationType')
