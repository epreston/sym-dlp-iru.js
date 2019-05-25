var Modeler = require('../Modeler.js');
var className = 'ElementBasicFault';

var ElementBasicFault = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    BasicFault: {
      type: 'TypeBasicFault',
      wsdlDefinition: {
        name: 'BasicFault',
        type: 'tns:BasicFault'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementBasicFault;
Modeler.register(ElementBasicFault, 'ElementBasicFault');
