var Modeler = require('../Modeler.js');
var className = 'TypeIncidentUpdateBatchResult';

var TypeIncidentUpdateBatchResult = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    batchId: {
      type: 'string',
      wsdlDefinition: {
        name: 'batchId',
        type: 'xs:string',
        form: 'unqualified'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InaccessibleIncidentId: {
      type: 'number',
      wsdlDefinition: {
        name: 'InaccessibleIncidentId',
        type: 'xs:int',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    statusCode: {
      type: 'string',
      wsdlDefinition: {
        name: 'statusCode',
        type: 'xs:string',
        form: 'unqualified'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InaccessibleIncidentLongId: {
      type: 'Typelong',
      wsdlDefinition: {
        name: 'InaccessibleIncidentLongId',
        type: 'xs:long',
        form: 'unqualified',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentUpdateBatchResult;
Modeler.register(TypeIncidentUpdateBatchResult, 'TypeIncidentUpdateBatchResult');
