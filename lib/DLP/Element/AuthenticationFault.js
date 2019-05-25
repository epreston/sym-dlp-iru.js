var Modeler = require('../Modeler.js')
var className = 'ElementAuthenticationFault'

var ElementAuthenticationFault = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    AuthenticationFault: {
      type: 'TypeAuthenticationFaultType',
      wsdlDefinition: {
        name: 'AuthenticationFault',
        type: 'tns:AuthenticationFaultType'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = ElementAuthenticationFault
Modeler.register(ElementAuthenticationFault, 'ElementAuthenticationFault')
