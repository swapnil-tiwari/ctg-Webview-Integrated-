var $$client=null;
async function func()
{
  window.api?null:window.api=await setAPI();

 $$client=$$client||(await api.users.getUser(['firstName','email','contact','id'])).data[0];

 //debugger;
 typeof startup_cap_dash_1!='undefined'?startup_cap_dash_1.innerHTML=$$client.firstName:null;
 typeof startup_cap_dash_2!='undefined'?startup_cap_dash_2.innerHTML=$$client.firstName:null;

 typeof startup_cap_post!='undefined'?startup_cap_post.innerHTML=$$client.firstName:null;
 typeof startupname!='undefined'?startupname.value=$$client.firstName:null;
 typeof startupemail!='undefined'?startupemail.value=$$client.email:null;
 typeof startupcno!='undefined'?startupcno.value=$$client.contact:null;
 typeof fname!='undefined'?fname.value=$$client.firstName:null;
 typeof clientname!='undefined'?clientname.innerHTML=$$client.firstName:null;
 typeof clientemail!='undefined'?clientemail.innerHTML=$$client.email:null;
 typeof clientinfo!='undefined'?clientinfo.innerHTML=$$client.description:null;
  typeof clienttype!='undefined'?clienttype.innerHTML=$$client.type:null;
};
if(localStorage.ctg_token)token=localStorage.ctg_token
else if(window.location.search('getting-started.html')<0)window.location='/pages/getting-started.html'
