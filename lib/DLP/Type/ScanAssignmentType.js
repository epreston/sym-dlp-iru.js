var Modeler = require('../Modeler.js');
var className = 'TypeScanAssignmentType';

var TypeScanAssignmentType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    ScanAssignmentType: {
      type: 'string',
      wsdlDefinition: {
        name: 'ScanAssignmentType',
        'xs:simpleContent': {
          'xs:extension': {
            base: 'xs:anySimpleType',
            'xs:attribute': {
              name: 'scanId',
              type: 'xs:int'
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

module.exports = TypeScanAssignmentType;
Modeler.register(TypeScanAssignmentType, 'TypeScanAssignmentType');
