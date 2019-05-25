var Modeler = require('../Modeler.js')
var className = 'ElementincidentStatusList'

var ElementincidentStatusList = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    incidentStatusList: {
      type: 'TypeincidentStatusList',
      wsdlDefinition: {
        name: 'incidentStatusList',
        type: 'tns:incidentStatusList'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementincidentStatusList
Modeler.register(ElementincidentStatusList, 'ElementincidentStatusList')
