var Modeler = require('../Modeler.js');
var className = 'TypeIncidentStatusType';

var TypeIncidentStatusType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    IncidentStatusType: {
      type: 'string',
      wsdlDefinition: {
        name: 'IncidentStatusType',
        'xs:restriction': {
          base: 'xs:string'
        },
        type: 'xs:string'
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
  }, parentObj, json);
};

module.exports = TypeIncidentStatusType;
Modeler.register(TypeIncidentStatusType, 'TypeIncidentStatusType');
ET | Modeler.SET,
  required;
:
false;
}
},
parentObj, json;
)

}

module.exports = TypeIncidentStatusType;
Modeler.register(TypeIncidentStatusType, 'TypeIncidentStatusType');
