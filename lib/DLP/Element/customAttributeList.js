var Modeler = require('../Modeler.js');
var className = 'ElementcustomAttributeList';

var ElementcustomAttributeList = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    customAttributeList: {
      type: 'TypecustomAttributeList',
      wsdlDefinition: {
        name: 'customAttributeList',
        type: 'tns:customAttributeList'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = ElementcustomAttributeList;
Modeler.register(ElementcustomAttributeList, 'ElementcustomAttributeList');
