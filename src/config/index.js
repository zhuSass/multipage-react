'use strict';

let node_custom_env;

if (process.env.NODE_CUSTOM_ENV !== 'production' && process.env.NODE_CUSTOM_ENV !== 'staging') {
    node_custom_env = 'development';
} else {
    node_custom_env = process.env.NODE_CUSTOM_ENV;
}

/**
 * Clientweb API Domain Config
 */
if (node_custom_env === 'production') {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}
else if (node_custom_env === 'staging') {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}
else {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}