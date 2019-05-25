var Modeler = require('../Modeler.js');
var className = 'ElementComponentNotFoundFault';

var ElementComponentNotFoundFault = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    ComponentNotFoundFault: {
      type: 'TypeComponentNotFoundFaultType',
      wsdlDefinition: {
        name: 'ComponentNotFoundFault',
        type: 'tns:ComponentNotFoundFaultType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementComponentNotFoundFault;
Modeler.register(ElementComponentNotFoundFault, 'ElementComponentNotFoundFault');
