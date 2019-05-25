var Modeler = require('../Modeler.js');
var className = 'TypeACLType';

var TypeACLType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    principal: {
      type: 'string',
      wsdlDefinition: {
        name: 'principal',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    type: {
      type: 'string',
      wsdlDefinition: {
        name: 'type',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': {
                name: 'id',
                type: 'xs:string',
                use: 'required'
              }
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    grantOrDeny: {
      type: 'string',
      wsdlDefinition: {
        name: 'grantOrDeny',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': {
                name: 'id',
                type: 'xs:string',
                use: 'required'
              }
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    permission: {
      type: 'string',
      wsdlDefinition: {
        name: 'permission',
        'xs:complexType': {
          'xs:simpleContent': {
            'xs:extension': {
              base: 'xs:string',
              'xs:attribute': {
                name: 'id',
                type: 'xs:string',
                use: 'required'
              }
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

module.exports = TypeACLType;
Modeler.register(TypeACLType, 'TypeACLType');
