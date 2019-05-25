var Modeler = require('../Modeler.js');
var className = 'TypeBasicFault';

var TypeBasicFault = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    errorMessage: {
      type: 'string',
      wsdlDefinition: {
        name: 'errorMessage',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeBasicFault;
Modeler.register(TypeBasicFault, 'TypeBasicFault');
