var Modeler = require('../Modeler.js');
var className = 'TypeCustomAttributeGroupType';

var TypeCustomAttributeGroupType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    customAttribute: {
      type: 'TypeCustomAttributeType',
      wsdlDefinition: {
        name: 'customAttribute',
        type: 'tns:CustomAttributeType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    name: {
      type: 'string',
      wsdlDefinition: {
        name: 'name',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeCustomAttributeGroupType;
Modeler.register(TypeCustomAttributeGroupType, 'TypeCustomAttributeGroupType');
