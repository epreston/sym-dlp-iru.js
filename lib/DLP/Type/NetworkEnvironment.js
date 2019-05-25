var Modeler = require('../Modeler.js');
var className = 'TypeNetworkEnvironment';

var TypeNetworkEnvironment = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    NetworkEnvironment: {
      type: 'string',
      wsdlDefinition: {
        name: 'NetworkEnvironment',
        'xs:simpleContent': {
          'xs:extension': {
            base: 'xs:string',
            'xs:attribute': {
              name: 'networkEnvironmentType',
              type: 'xs:string',
              use: 'required'
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeNetworkEnvironment;
Modeler.register(TypeNetworkEnvironment, 'TypeNetworkEnvironment');
