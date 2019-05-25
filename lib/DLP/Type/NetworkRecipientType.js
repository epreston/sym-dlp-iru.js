var Modeler = require('../Modeler.js');
var className = 'TypeNetworkRecipientType';

var TypeNetworkRecipientType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    recipientIdentifier: {
      type: 'string',
      wsdlDefinition: {
        name: 'recipientIdentifier',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IPAddress: {
      type: 'string',
      wsdlDefinition: {
        name: 'IPAddress',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    port: {
      type: 'number',
      wsdlDefinition: {
        name: 'port',
        type: 'xs:int',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeNetworkRecipientType;
Modeler.register(TypeNetworkRecipientType, 'TypeNetworkRecipientType');
