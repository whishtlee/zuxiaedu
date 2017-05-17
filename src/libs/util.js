import axios from 'axios'; //引入axios

let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : '足下课堂关系系统2.0';
    window.document.title = title;
};

const ajaxUrl = 'http://192.168.6.111';
// const ajaxUrl = 'http://localhost:1000/v1?url=192.168.6.111';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;