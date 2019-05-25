var Modeler = require('../Modeler.js')
var className = 'TypeIncidentListRequest'

var TypeIncidentListRequest = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    savedReportId: {
      type: 'number',
      wsdlDefinition: {
        name: 'savedReportId',
        type: 'xs:int'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    incidentCreationDateLaterThan: {
      type: 'date',
      wsdlDefinition: {
        name: 'incidentCreationDateLaterThan',
        type: 'xs:dateTime'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentListRequest
Modeler.register(TypeIncidentListRequest, 'TypeIncidentListRequest')
