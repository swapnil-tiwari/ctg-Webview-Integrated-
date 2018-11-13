var token = token || undefined;
var allroutes = [];
var all = {};
var apipath='https://ctg-api.herokuapp.com/api'
async function rpc(proc, arg) {
    var req = {
        method: 'POST',
        body: JSON.stringify({
            token,
            procedure: proc,
            data: arg,
        }),
        headers: {
            'content-type': 'application/json'
        },
    }
    var resp = await fetch(apipath, req);
    var js = await resp.json();
    if (!js.ok) throw js;
    return js;
}
async function setAPI() {
    allroutes = localStorage.getItem('siteMap')?JSON.parse(localStorage.getItem('siteMap')) : await rpc('siteMap').then((siteMap) => {
        localStorage.setItem('siteMap',JSON.stringify(siteMap));
        return siteMap
    });
    allroutes = allroutes.data
    for (let each of allroutes) {
        var routes = each.split('/');
        var container = all;
        for (let every of routes) {
            if (routes.indexOf(every) == routes.length - 1) {
                container[every] = async function (...arg) {
                    return rpc(each, arg)
                }
            } else {
                container[every] = container[every] ? container[every] : {}
                container = container[every];
            }
        }
    }
    return all;
}
async function getToken(initProc, ...initArg) {

    token = await rpc('gettoken/' + initProc, initArg);
    token = token.data
    return token;
}
async function registerOrg(...initArg) {
    return getToken('gettoken/registerOrg', initArg);
}
async function loginAdmin(...initArg) {
    return getToken('gettoken/login', initArg);
}