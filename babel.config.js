const plugins = [
    ["./plugin/local-ip.js", {
        "replaceString": "LOCAL_IP",
        // "interfaceName": "en0"
        "interfaceName": "en0"
    }]
]
module.exports = {plugins};
