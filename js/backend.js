
/*
async function rpc(proc,arg)
{
	  var req={
                method:arg?'POST':'GET',
                headers:{
                    'content-type': 'application/json'
                    },
                }
	  arg?req.body=JSON.stringify(arg):null;
    var resp=await fetch('http://localhost:8080/data/'+proc,req);
    var js=await resp.json();
    if(js.code>=400)throw js;
  	return js;
}

res=await rpc('userdata',['username','email']);
document.write("<br>");
document.write(JSON.stringify(res))


*/

        // async  function setAPI(cb)
        // {
        //   if(window.api)
        //   {
        //     cb?cb(window.api):null;
        //     return window.api
        //   }
        //   var loc= localize();
        //   if(typeof cb=='function')
        //     {

        //       window.api=await loc
        //       cb(await loc);
        //     }
        //   else
        //   {
        //       window.api=await loc
        //       return await loc;
        //   }
        // }
        token=localStorage.getItem('ctg_token')
        async function login()
        {
            window.api?null:window.api=await setAPI();
            //await api.login{username:username.value,password:password.value};
          //   var res=await fetch('http://localhost:8080/data/login',
          //   {
          //       method:'post',
          //       headers:{
          //           'content-type':'application/json'
          //       },
          //       body:JSON.stringify({username:username.value,password:password.value})
          //   })
          // //  console.log(JSON.stringify(await res.json()));
          //   var response= await res.json();
          try{
            debugger;
            var oldToken=token;
            token=undefined
            var response= await api.gettoken.login({virtualID:username.value,password:password.value})
            if (!response.ok)
            {
              token=oldToken;
            }
            else
            {
              token=response.data;
              token=localStorage.setItem('ctg_token',token)
              window.location='./home.html'
            }
          }
            catch(e) {
              token=oldToken;
               window.alert("Wrong Credentials");
            }

        }
        async function register_f()
        {
            var hash=window.location.hash="freelancer";
            window.api?null:window.api=await setAPI();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_f.value,password:pass_f.value,email:email_f.value,contact:contactno_f.value})
            // })
            try {
              debugger;
                  var response=await api.gettoken.registerOrg({shortName:username_f.value,type:'freelancer',fullName:username_f.value,firstName:username_f.value,dateRegistered:Date.now(),password:pass_f.value,email:email_f.value,contact:contactno_f.value});
                  localStorage.setItem('ctg_token',response.data);
                  debugger;
                  if(response.ok==true)
                  {
                     window.location.href = "../pages/finalizing-step-2.html";
                  }



            } catch (e) {
                window.alert("Invalid Details Entered");


            }
            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
        async function register_sp()
        {
          var hash=window.location.hash="startup";
            window.api?null:window.api=await setAPI();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value})
            // })
            try {
                var response=await api.register({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value});
                if(response.code==200)
                {
                   window.location.href = "../pages/login.html#"+hash;
                }

            } catch (e) {
              window.alert("Invalid Details Entered");
            }

            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
        async function register_ind()
        {
            var hash=window.location.hash="individual";
            window.api?null:window.api=await setAPI();
            try {
                  var response=await api.register({username:username_ind.value,password:pass_ind.value,email:email_ind.value,contact:contactno_ind.value});
                  if(response.code==200)
                  {
                     window.location.href = "../pages/login.html#"+hash;
                  }



            } catch (e) {
                window.alert("Invalid Details Entered");
            }



        }
    async function logout()
    {
        window.api?null:window.api=await setAPI();
        var response=await api.logout();
        if(response.code==200)
        {
          document.location.reload();
        }


    }
    // async function islogin()
    // {
    //     var res=await fetch('/data/islogin',
    //     {
    //         method:'get',
    //         headers:{
    //             'content-type':'application/json'
    //         }
    //     })
    //     resp.value=JSON.stringify(await res.json())
    // }


    // Complete Registration Process Backend Functions
    function scanFlFeidls()
    {
      return {communicationlanguage:comlanguage.value,skillslevel:skill,longDescription:description.value,github:github.value,linkedin:linkedin.value,work:work.value,registrationstatus:"completed"}
    }
    async function updateData_f(type='freelancer')
    {
      window.api?null:window.api=await setAPI();
      try
      {
        if(type=='freelancer')
          var fields=scanFlFeidls();
        else if(type=='sratup')
          var fields=scanFlFeidls()
          
        var response=await api.org.updateOrg(fields);
        debugger;
        if (response.ok)
        {
           window.location.href =window.location.origin

        }

      }
      catch(e)
      {
        window.alert("Fill the form properly");

      }

    }
    async function updateData_s()
    {
      window.api?null:window.api=await setAPI();
      try
      {
        var response=await api["register/update"]({startupname:startupname.value,contact:startupcno.value,country:country.value,description:description.value,currentstatus:currentstatus.value,registrationstatus:"completed"});
        debugger;
        if (response.ok)
        {
           window.location.href =window.location.origin

        }

      }
      catch(e)
      {
        window.alert("Fill the form properly")
      }

    }
