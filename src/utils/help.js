const Help={
    handleJsonP(url,type,callback){
        const body = document.getElementsByTagName('body')[0];
        const script = document.createElement('script');
        script.setAttribute('src',url);
        window[type]=callback;
        body.appendChild(script);
    }
}

export default Help;