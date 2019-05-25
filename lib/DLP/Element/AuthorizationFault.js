var Modeler = require('../Modeler.js');
var className = 'ElementAuthorizationFault';

var ElementAuthorizationFault = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    AuthorizationFault: {
      type: 'TypeAuthorizationFaultType',
      wsdlDefinition: {
        name: 'AuthorizationFault',
        type: 'tns:AuthorizationFaultType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementAuthorizationFault;
Modeler.register(ElementAuthorizationFault, 'ElementAuthorizationFault');
