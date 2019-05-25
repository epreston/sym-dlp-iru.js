module.exports = {
  'IncidentServicePortType': {
    'namespace': 'http://www.vontu.com/v2011/enforce/webservice/incident',
    'serviceUrl': 'https://yourserver.here:443/ProtectManager/services/v2011/incidents',
    'incidentBinaries': {
      'soapAction': 'incidentBinaries',
      'input': 'ElementincidentBinariesRequest',
      'output': 'ElementincidentBinariesResponse'
    },
    'incidentDetail': {
      'soapAction': 'incidentDetail',
      'input': 'ElementincidentDetailRequest',
      'output': 'ElementincidentDetailResponse'
    },
    'listCustomAttributes': {
      'soapAction': 'listCustomAttributes',
      'output': 'ElementcustomAttributeList'
    },
    'listIncidentStatus': {
      'soapAction': 'listIncidentStatus',
      'output': 'ElementincidentStatusList'
    },
    'incidentViolations': {
      'soapAction': 'incidentViolations',
      'input': 'ElementincidentViolationsRequest',
      'output': 'ElementincidentViolationsResponse'
    },
    'updateIncidents': {
      'soapAction': 'updateIncidents',
      'input': 'ElementincidentUpdateRequest',
      'output': 'ElementincidentUpdateResponse'
    },
    'incidentList': {
      'soapAction': 'incidentList',
      'input': 'ElementincidentListRequest',
      'output': 'ElementincidentListResponse'
    }
  }
}
