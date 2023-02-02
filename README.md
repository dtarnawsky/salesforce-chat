# Salesforce Chat with Capacitor

This sample application shows how to integrate Salesforce Chat (web) into a Capacitor application.

The sample shows:
- How to indicate whether an agent is online to chat
- Displaying the chat in an `ion-modal`

Creating a chat button shows code like
```js

```

## Documentation
Addtional Javascript options can be found in the [Salesforce Chat Documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm).

## Troubleshooting

> You cannot call liveagent.startChat until the asynchronous call to liveagent.init has completed!
- If the domain name of your application (ie `capacitor://localhost`, `http://localhost`) is not whitelisted you will get this error.

