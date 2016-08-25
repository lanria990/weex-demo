/**
 * Created by Yangjl on 2016/8/19.
 */

 function bundleUrl(url,native,h5) {
    let bundleUrl = url;
    bundleUrl = new String(bundleUrl);
    let base;
    //H5端
    if (typeof window === 'object') {
        return h5;
    }

    let isAndroidAssets = bundleUrl.indexOf('file://assets/')>=0;
    let isiOSAssets = bundleUrl.indexOf('file:///')>=0&& bundleUrl.indexOf('WeexDemo.app')

    if (isAndroidAssets){
        base = 'file://assets/';
    }else if(isiOSAssets){
        base = bundleUrl.substring(0,bundleUrl.lastIndexOf('/')+1);
    }else{
        base =  native;
    }
   return base;

}

export default bundleUrl;