var Modeler = require('../Modeler.js');
var className = 'TypeFileSizeViolationType';

var TypeFileSizeViolationType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    violatingFileSize: {
      type: 'Typeinteger',
      wsdlDefinition: {
        name: 'violatingFileSize',
        type: 'xs:integer'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    units: {
      type: 'string',
      wsdlDefinition: {
        name: 'units',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeFileSizeViolationType;
Modeler.register(TypeFileSizeViolationType, 'TypeFileSizeViolationType');
