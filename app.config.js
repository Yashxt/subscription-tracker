const appJson = require('./app.json')
require('dotenv').config()

console.log('TOKEN:', process.env.POSTHOG_PROJECT_TOKEN)
console.log('HOST:', process.env.POSTHOG_HOST)

export default {
    expo: {
        ...appJson.expo,
        extra: {
            ...(appJson.expo?.extra || {}),
            posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
            posthogHost: process.env.POSTHOG_HOST,
            "eas": {
        "projectId": "38d6b0f9-1bf1-496a-bb15-adc367c6ecc7"
          }
        },
     
  
      
    }
}