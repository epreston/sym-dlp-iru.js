var Modeler = require('../Modeler.js');
var className = 'ElementInvalidRequestFault';

var ElementInvalidRequestFault = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    InvalidRequestFault: {
      type: 'TypeInvalidRequestFaultType',
      wsdlDefinition: {
        name: 'InvalidRequestFault',
        type: 'tns:InvalidRequestFaultType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementInvalidRequestFault;
Modeler.register(ElementInvalidRequestFault, 'ElementInvalidRequestFault');
