if (Meteor.isClient) {
  Template.patients.patients = function() {
    var patients = Session.get('patients') || [];
    patient_values = [];
    for(var p in patients) {
      patient_values.push({name: patients[p]});
    }
    return patient_values;
  }

  Template.form_add_patient.events({
    'click input.add_patient': function () {
      var patientName = $('#patient_name').val();
      var patients = Session.get('patients') || [];
      patients.push(patientName);
      Session.set('patients', patients);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
