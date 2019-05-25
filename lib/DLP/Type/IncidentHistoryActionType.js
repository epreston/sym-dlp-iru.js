var Modeler = require('../Modeler.js')
var className = 'TypeIncidentHistoryActionType'

var TypeIncidentHistoryActionType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    IncidentHistoryActionType: {
      type: 'string',
      wsdlDefinition: {
        name: 'IncidentHistoryActionType',
        'xs:simpleContent': {
          'xs:extension': {
            base: 'xs:string',
            'xs:attribute': {
              name: 'actionTypeId',
              type: 'xs:int',
              use: 'required'
            }
          }
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentHistoryActionType
Modeler.register(TypeIncidentHistoryActionType, 'TypeIncidentHistoryActionType')
