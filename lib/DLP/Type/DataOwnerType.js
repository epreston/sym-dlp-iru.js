var Modeler = require('../Modeler.js');
var className = 'TypeDataOwnerType';

var TypeDataOwnerType = function (json, parentObj) {
  parentObj = parentObj || this;

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
    email: {
      type: 'string',
      wsdlDefinition: {
        name: 'email',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeDataOwnerType;
Modeler.register(TypeDataOwnerType, 'TypeDataOwnerType');
