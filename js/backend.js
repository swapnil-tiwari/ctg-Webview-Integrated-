token = localStorage.getItem('ctg_token')
async function login() {
  window.api ? null : window.api = await setAPI();
  try {
    debugger;
    var oldToken = token;
    token = undefined
    var response = await api.gettoken.login({
      virtualID: username.value,
      password: password.value
    });
    if (!response.ok) {
      token = oldToken;
    } else {
      token = response.data;
      token = localStorage.setItem('ctg_token', token)
      window.location = './home.html'
    }
  } catch (e) {
    token = oldToken;
    window.alert("Wrong Credentials");
    console.log(new Error('CACHED ERROR'),e)
  }

}
function scrapRegistrationFields(type)
{
  if(type=='freelancer')
  {
    return {
      shortName: username_f.value,
      type: 'freelancer',
      fullName: username_f.value,
      firstName: username_f.value,
      dateRegistered: Date.now(),
      password: pass_f.value,
      email: email_f.value,
      contact: contactno_f.value
    }
  }
  if (type=='startup')
  {
    return {
      shortName: username_sp.value,
      type: 'startup',
      fullName: username_sp.value,
      firstName: username_sp.value,
      dateRegistered: Date.now(),
      password: pass_sp.value,
      email: email_sp.value,
      contact: contactno_sp.value
    }
  }
  if (type=='individual')
  {
    return {
      shortName: username_ind.value,
      type: 'individual',
      fullName: username_ind.value,
      firstName: username_ind.value,
      dateRegistered: Date.now(),
      password: pass_ind.value,
      email: email_ind.value,
      contact: contactno_ind.value
    }
  }
}
async function register(type) {
  if (!type) throw "type is required"
  token = undefined;
  window.api ? null : window.api = await setAPI();
  try {
    debugger;
    var response = await api.gettoken.registerOrg(scrapRegistrationFields(type));
    localStorage.setItem('ctg_token', response.data);
    token = response.data;
    debugger;
    if (response.ok == true) {
      await loadForm('completereg' + type);
      func();
    }
  } catch (e) {
    window.alert("Invalid Details Entered");
    console.log(new Error('CACHED ERROR'),e)
  }

}
// Complete Registration Process Backend Functions
function scanFields(type) {
  if(type=='freelancer')
  {
    
  return {
    communicationlanguage: comlanguage.value,
    skillslevel: skill,
    longDescription: description.value,
    github: github.value,
    linkedin: linkedin.value,
    work: work.value,
    registrationstatus: "completed"
    }
  }
  // if (type=='startup')
  // {
  //   return {
  //     shortName: username_sp.value,
  //     type: 'startup',
  //     fullName: username_sp.value,
  //     firstName: username_sp.value,
  //     dateRegistered: Date.now(),
  //     password: pass_sp.value,
  //     email: email_sp.value,
  //     contact: contactno_sp.value
  //   }
  // }
}
async function updateData(type) {
  if (!type) throw 'type is fiedls';
  window.api ? null : window.api = await setAPI();
  var fields=scanFields(type);
  try {
  var response = await api.org.updateOrg(fields);
    debugger;
    if (response.ok) {
      window.location.href = '/pages/home.html';
    }

  } catch (e) {
    window.alert("Fill the form properly");
    console.log(new Error('CACHED ERROR'),e)
  }

}
async function updateData_s() {
  window.api ? null : window.api = await setAPI();
  try {
    var response = await api["register/update"]({
      startupname: startupname.value,
      contact: startupcno.value,
      country: country.value,
      description: description.value,
      currentstatus: currentstatus.value,
      registrationstatus: "completed"
    });
    debugger;
    if (response.ok) {
      window.location.href = window.location.origin

    }
  } catch (e) {
    window.alert("Fill the form properly")
    console.log(new Error('CACHED ERROR'),e)
  }

}

function logout() {
  localStorage.clear();
  window.location = '/pages/getting-started.html';
}