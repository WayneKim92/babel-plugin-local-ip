# AS-IS
```
const LocalIP = "Local_IP"
```

# TO-BE
```
// if your local ip is "192.168.0.77"
const LocalIP = "192.168.0.77"
```

# Option
```
// In babel.config.js
["babel-plugin-local-ip", {
    "replaceString": "LOCAL_IP", // your string value
    // "interfaceName": "en0"
    "interfaceName": "en0" // your network type
}]
```

# reference
- https://astexplorer.net/
