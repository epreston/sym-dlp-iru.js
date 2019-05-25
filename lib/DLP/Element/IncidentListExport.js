var Modeler = require('../Modeler.js')
var className = 'ElementIncidentListExport'

var ElementIncidentListExport = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incident: {
      type: 'TypeIncidentExportType',
      wsdlDefinition: {
        name: 'incident',
        type: 'tns:IncidentExportType',
        nillable: 'true',
        minOccurs: '0',
        maxOccurs: 'unbounded'
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementIncidentListExport
Modeler.register(ElementIncidentListExport, 'ElementIncidentListExport')
