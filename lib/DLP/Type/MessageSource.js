var Modeler = require('../Modeler.js');
var className = 'TypeMessageSource';

var TypeMessageSource = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    MessageSource: {
      type: 'string',
      wsdlDefinition: {
        name: 'MessageSource',
        'xs:simpleContent': {
          'xs:extension': {
            base: 'xs:string',
            'xs:attribute': {
              name: 'sourceType',
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

module.exports = TypeMessageSource;
Modeler.register(TypeMessageSource, 'TypeMessageSource');
