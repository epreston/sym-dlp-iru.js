# sym-dlp-iru.js

Javascript proxy classes for accessing the "Symantec DLP Incident Reporting and Update API WSDL"


## Install

Checkout the repo:
```
git clone https://github.com/epreston/sym-dlp-iru.js.git
cd sym-dlp-iru.js
npm install
```

## Requirements and Dependencies
These are installed with the commands above.
```
npm install request xml2json-temporary lodash
```

## Code Structure
```
./[ServiceName]/
|   // This holds one file per defined Element within the WSDL
├── Element
│   ├── SomeDefinedElement.js
|   └── ...
|   // This is the main file which handles requests, JSON->XML->JSON, etc
├── index.js
|   // This is where mock data goes from [myService].Settings.createMock
├── Mocks
│   ├── WsdlOperationName.js
|   └── ...
|   // This library provides strong typing, it's used in each Element/Type
├── Modeler.js
|   // This file defines the top level functionality found within the WSDL
├── ServiceDefinition.js
|   // This holds one file per defined Type within the WSDL
└── Type
    ├── SomeDefinedType.js
    └── ...
```

## Using the generated code
Start by including the generated code:
```javascript
var DLP = require("lib/DLP");
```
This is how we create a new request:
```javascript
// var someRequest = new Service.[WSDL-Binding-Name].[WSDL-Operation-Name]();
var assignRequest = new DLP.IncidentServicePort.updateIncidents(...);
```
Setting basic properties is trivial
```javascript
someRequest.someSimpleProperty = 1;
```
Most requests consist of several complex types, they are all found within our service object:
```javascript
someRequest.someElementProperty = new Service.Elements.[WSDL-Element-Name]();
someRequest.someTypeProperty = new Service.Types.[WSDL-Type-Name]();
```
Populating Requests/Elements/Types can be done one at a time:
```javascript
someRequest.someNumber = 1;
someRequest.someString = "1";
```
We can also populate directly from a JSON object:
```javascript
var json = { someNumber: 1, someString: "1" };
someRequest = new Service.TestRequest(json);
// someRequest.someNumber == 1
// someRequest.someString == "1"
```
Trying to set a property's value to an invalid type will be discarded:
```javascript
someRequest.PersonElement = null;
someRequest.PersonElement = new SomeRandomObject();
// someRequest.PersonElement == null;
```
If we have an array of objects there's a helper function to save typing:
```javascript
someRequest.PeopleList = new Service.Types.ArrayOfPeople;
someRequest.PeopleList.newChild({ firstname: "Oli", age: 24 });
// is the equivalent of:
someRequest.PeopleList = new Service.Types.ArrayOfPeople;
var newPerson = new Service.Types.Person();
newPerson.firstname = "Oli";
newPerson.age = 24;
someRequest.PeopleList.push(newPerson);
```
Making the request is trivial:
```javascript
someRequest.request(function(err, response) {
  // 'response' is a modeled object, it WILL conform to the WSDL.
});
```
Once we have a request and we want to edit it by adding properties not found in the WDSL, we must first extract the data from the response:
```javascript
someRequest.request(function(err, response) {
  response.SomeInvalidProperty = "testing";
  // response.SomeInvalidProperty == null
  var myResponse = response.extract();
  myResponse.SomeInvalidProperty = "testing";
  // myResponse.SomeInvalidProperty == "testing"
});
```


## Runtime Settings and Debugging

```javascript
var Service = require("path/to/generated/code");

// Change the duration (in milliseconds) the library will wait for the
// service to respond before timing out
// default: 15000 (15 seconds)
Service.Settings.timeout = 5000;

// Enable debugging for ALL soap requests
// It will print out the request start and end times, how long the
// request took, xml that was sent and received as well as the
// json received and the output provided by the library
// default: false
Service.Settings.debugSoap = true;

// Override the default (stdout) logging provided. 
// The function will receive a json object.
// default: stdout
Service.Settings.logger = function(data) {
  fs.createWriteStream('./test').write(JSON.stringify(data));
};

// Enable benchmarking for ALL soap requests
// It prints to stdout the name of each request and its duration in ms
// default: true
Service.Settings.benchmark = true;

// Store the most recent request of each type to file
// It outputs to [/path/to/generated/code]/Mocks/[request-name]
// default: false
Service.Settings.createMock = true;

// Use saved mock requests instead of real requests
// default: false
Service.Settings.useMock = true;

// Debug single SOAP requests by using the .debug() function, which is
// a property of every request and response object
var additionRequest = new Service.MathService.AdditionFunction(json);
additionRequest.debug(); // Watch your console output
additionRequest.request(function(err, response) {
  response.debug(); // Watch your console output
  if (err || !response) {
    return callback(err || "No response?");
  }

});
```

## Static Code Analysis

Run the following command:
```
npm lint
```

## Unit Tests

Testing Requirements TBA

Command:
```
npm test
```
