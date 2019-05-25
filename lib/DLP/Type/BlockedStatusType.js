var Modeler = require('../Modeler.js');
var className = 'TypeBlockedStatusType';

var TypeBlockedStatusType = function (json, parentObj) {
  parentObj = parentObj || this;

  // Class property definitions here:
  Modeler.extend(className, {
    BlockedStatusType: {
      type: 'string',
      wsdlDefinition: {
        name: 'BlockedStatusType',
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

module.exports = TypeBlockedStatusType;
Modeler.register(TypeBlockedStatusType, 'TypeBlockedStatusType');
required: false;
}
},
parentObj, json;
)

}

module.exports = TypeBlockedStatusType;
Modeler.register(TypeBlockedStatusType, 'TypeBlockedStatusType');
