let stream, navigator;
//let stream= require('@weex-module/stream');
// import stream  from '@weex-module/stream'
__weex_define__('@weex-temp/stream', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});
__weex_define__('@weex-temp/navigator', function (__weex_require__) {
    navigator = __weex_require__('@weex-module/navigator')
});
(function () {
    String.prototype.format = function (args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if (args[key] != undefined) {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        var reg = new RegExp("({[" + i + "]})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    };
})();

export default  {
    baseURI: require('./baseUrl'),
    urlParam(url, key) {
        var reg = new RegExp('[?|&]' + key + '=([^&]+)');
        var match = url.match(reg);
        return match && match[1];
    },
    navpush(params) {
        // let navigator = require('@weex-module/navigator');
        navigator.push(params, function (e) {
        });
    },
    navpop (params) {
        // let navigator = require('@weex-module/navigator');
        navigator.pop(params, function (e) {
        });
    },
    /*****ajax request*********/
    request(url, param={}){
        Object.assign(param,{
            method: 'GET',
            type: 'json'
        })
        param.url = url || param.url;
        return new Promise((resolve, reject)=> {
            stream.fetch(param, function (res) {
                if (res.status == 200) {
                    let data;
                    try {
                        data = res.data ;//JSON.parse(res.data || {});
                        if (data.status) { //统一操作
                            resolve(data);
                        } else {
                            reject(data);
                        }
                    } catch (e) {
                        console.log(e)
                        throw  res;
                    }
                } else {
                    reject(res);
                }
            })
        })
    }
}

// export default utils;