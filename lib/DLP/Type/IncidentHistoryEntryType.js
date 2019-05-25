var Modeler = require('../Modeler.js');
var className = 'TypeIncidentHistoryEntryType';

var TypeIncidentHistoryEntryType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    user: {
      type: 'string',
      wsdlDefinition: {
        name: 'user',
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    date: {
      type: 'date',
      wsdlDefinition: {
        name: 'date',
        type: 'xs:dateTime'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionType: {
      type: 'TypeIncidentHistoryActionType',
      wsdlDefinition: {
        name: 'actionType',
        type: 'tns:IncidentHistoryActionType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    detail: {
      type: 'string',
      wsdlDefinition: {
        name: 'detail',
        type: 'xs:string',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentHistoryEntryType;
Modeler.register(TypeIncidentHistoryEntryType, 'TypeIncidentHistoryEntryType');
