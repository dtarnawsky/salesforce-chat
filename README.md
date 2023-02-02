# Salesforce Chat with Capacitor

This sample application shows how to integrate Salesforce Chat (web) into a Capacitor application.

The sample shows:
- How to indicate whether an agent is online to chat
- Displaying the chat in an `ion-modal`

# Chat Configuration
```js
  private config: ChatConfiguration = {
    buttonId: '573Dn000000czBv',
    deploymentId: '572Dn000000czEE',
    organizationId: '00DDn00000ACnPz',
    onlineId: 'online',
    offlineId: 'offline',
    deploymentUrl: 'https://c.la1-c1-ia7.salesforceliveagent.com/content/g/js/56.0/deployment.js',
    apiEndpointUrl: 'https://d.la1-c1-ia7.salesforceliveagent.com/chat',
    chatWindowName: 'chat'
  };
```

## Documentation
Additional Javascript options can be found in the [Salesforce Chat Documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm).

## Troubleshooting

> You cannot call liveagent.startChat until the asynchronous call to liveagent.init has completed!
- If the domain name of your application (ie `capacitor://localhost`, `http://localhost`) is not whitelisted you will get this error.
