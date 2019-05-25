var Modeler = require('../Modeler.js');
var className = 'TypeincidentStatusList';

var TypeincidentStatusList = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    incidentStatusName: {
      type: 'string',
      wsdlDefinition: {
        name: 'incidentStatusName',
        type: 'xs:string',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeincidentStatusList;
Modeler.register(TypeincidentStatusList, 'TypeincidentStatusList');
