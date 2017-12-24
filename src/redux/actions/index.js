import Help from '../../utils/help'
import $ from 'jquery'
const _getMusics=(url)=>{
    return function(dispatch){
        $.ajax({
            type: "get",
            async: false,
            url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "JsonCallback",
            scriptCharset: 'GBK',//设置编码，否则会乱码
            success: function(data) {
              dispatch({
                 type:'GET-MUSICLIST',
                 payload:data
             })
            },
            error: function() {
              alert('fail');
            }
          });
    }
}

export {_getMusics}