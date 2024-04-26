# Install
```shell
yarn add babel-plugin-local-ip -D
npm install babel-plugin-local-ip -D
```
# Config
```shell
// In babel.config.js
["babel-plugin-local-ip", {
"replaceString": "LOCAL_IP", // your string value
// "interfaceName": "en0"
"interfaceName": "en0" // enter your network type.
}]
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
