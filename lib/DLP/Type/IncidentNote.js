var Modeler = require('../Modeler.js');
var className = 'TypeIncidentNote';

var TypeIncidentNote = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    dateAndTime: {
      type: 'date',
      wsdlDefinition: {
        name: 'dateAndTime',
        type: 'xs:dateTime',
        form: 'unqualified',
        minOccurs: '0'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    note: {
      type: 'string',
      wsdlDefinition: {
        name: 'note',
        type: 'xs:string',
        form: 'unqualified'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentNote;
Modeler.register(TypeIncidentNote, 'TypeIncidentNote');
