# Install
```shell
yarn add babel-plugin-local-ip -D
# or
npm install babel-plugin-local-ip -D
```
# Config
```shell
// In babel.config.js
plugins: ["babel-plugin-local-ip"] # "LOCAL_IP" string will be replaced with the local IP of the machine where the metro is running.
# or
plugins: [
  [
    "babel-plugin-local-ip", {
        "replaceString": "FOO_LOCAL_IP", # (Option) If you want to change it to a different string value.
        "interfaceName": "en0" # (Option) If you can't use the network as en0, Replace "en0" with your network type name.
    }
  ]
]
```
- If you cannot use en0, please refer to the original [code](https://github.com/WayneKim92/babel-plugin-local-ip/blob/main/plugin/local-ip.js).

# Description
This plugin was created to automatically enter the local IP of the machine where **[reactotron](https://github.com/infinitered/reactotron)** is running.

```typescript
import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

const os = Platform.OS;
Reactotron.configure({
    name: `App Name ${os}`,
    getClientId: async () => `App Name ${os}`,
    host: 'LOCAL_IP', // babel-plugin-local-ip will convert it to local IP on the machine your metro is running on.
})
```


# AS-IS
```
const LocalIP = "Local_IP"
```

# TO-BE
```
// if your local ip is "192.168.0.77"
const LocalIP = "192.168.0.77"
```

# reference
- https://astexplorer.net/
