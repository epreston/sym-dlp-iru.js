var Modeler = require('../Modeler.js');
var className = 'TypePolicyRuleType';

var TypePolicyRuleType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    ruleName: {
      type: 'string',
      wsdlDefinition: {
        name: 'ruleName',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypePolicyRuleType;
Modeler.register(TypePolicyRuleType, 'TypePolicyRuleType');
