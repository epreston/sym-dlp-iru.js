var Modeler = require('../Modeler.js')
var className = 'TypeIncidentSeverityType'

var TypeIncidentSeverityType = function (json, parentObj) {
  parentObj = parentObj || this

  // Class property definitions here:
  Modeler.extend(className, {
    IncidentSeverityType: {
      type: 'string',
      wsdlDefinition: {
        name: 'IncidentSeverityType',
        'xs:restriction': {
          base: 'xs:string'
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json)
}

module.exports = TypeIncidentSeverityType
Modeler.register(TypeIncidentSeverityType, 'TypeIncidentSeverityType')
Modeler.SET,
  required
:
false
}
},
parentObj, json
)

}


module.exports = TypeIncidentSeverityType
Modeler.register(TypeIncidentSeverityType, 'TypeIncidentSeverityType')
