# Salesforce Chat with Capacitor

This sample application shows how to integrate Salesforce Chat (web) into a Capacitor application.

The sample shows:
- How to indicate whether an agent is online to chat
- Displaying the chat in an `ion-modal`

## Reviewing the sample
The sample app does the following:
1. Sets the [ChatConfiguration](https://github.com/dtarnawsky/salesforce-chat/blob/ba4a5e899be71cac52864417ba2fba19c39c6745/src/app/tab1/tab1.page.ts#L14) is created from values from the Salesforce configuration for [Chat Buttons](#chat-button-configuration) and [Deployments](#deployment-configuration)
2. Defines a [button](https://github.com/dtarnawsky/salesforce-chat/blob/5a2cb2e40acc99e7ea1b31999dcc1484dfe5c0cb/src/app/tab1/tab1.page.html#L15) when the chat is online
3. Defines a [button](https://github.com/dtarnawsky/salesforce-chat/blob/eeeed61a95e330a7460f2a796e4be0625ff520e1/src/app/tab1/tab1.page.html#L18) when the chat is offline
4. Defines a [iframe](https://github.com/dtarnawsky/salesforce-chat/blob/f252f62b41743e7fa9f74f5d58b16a1a18a0cbd2/src/app/tab1/tab1.page.html#L35) where the Chat UI will be displayed
5. Calls [initChat](https://github.com/dtarnawsky/salesforce-chat/blob/147820c25faa9b57e1cad0a7749096738a9969b3/src/app/tab1/tab1.page.ts#L29) to wire up the chat button to show and hide when agents are online or offline
6. Calls [startChat](https://github.com/dtarnawsky/salesforce-chat/blob/bf23517f7fcec99e32d0b1a589f12f31c6d07387/src/app/tab1/tab1.page.ts#L33) to start a chat session with an agent


# Integrating into your app
- Copy the file [salesforce-chat.ts](src/app/salesforce-chat.ts) into your own project.
- Specify a [Chat Configuration](#chat-configuration) (eg `config`)
- Call `initChat(config)` to load Salesforce Chat and initialize the button used to launch chat
- Call `startChat(config)` when the user clicks the Chat button


## Chat Configuration
The following is a sample configuration
```js
  private config: ChatConfiguration = {
    // Salesforce Chat Configurations
    buttonId: '573Dn000000czBv',
    deploymentId: '572Dn000000czEE',
    organizationId: '00DDn00000ACnPz',
    deploymentUrl: 'https://c.la1-c1-ia7.salesforceliveagent.com/content/g/js/56.0/deployment.js',
    apiEndpointUrl: 'https://d.la1-c1-ia7.salesforceliveagent.com/chat',

    // Ids of elements in your UI
    onlineId: 'online',
    offlineId: 'offline',
    chatWindowName: 'chat'
  };
```

## Chat Button Configuration
1. In Salesforce go to `Service Setup` > `Channels` > `Chat` > `Chat Buttons & Invitations`
2. Select your button and review `Chat Button Code`
3. Copy the **yellow** value (shown in the screenshot below) into the `buttonId` parameter

![salesforce-buttonid](https://user-images.githubusercontent.com/84595830/216216813-4b4975c0-f3e6-41c7-92ff-26de71198af7.png)

## Deployment Configuration
1. In Salesforce go to `Service Setup` > `Channels` > `Chat` > `Deployments`
2. Select your deployment and review `Deployment Code`
3. Copy the **yellow** value (shown in the screenshot below) into the `deploymentUrl` parameter.
4. Copy the **green** value (shown in the screenshot below) into the `apiEndpointUrl` parameter.
5. Copy the **red** value (shown in the screenshot below) into the `deploymentId` parameter.
6. Copy the **blue** value (shown in the screenshot below) into the `organizationId` parameter.

![salesforce-config](https://user-images.githubusercontent.com/84595830/216217613-148a8a2d-76a7-4417-8305-eaaf8b2605fd.png)

# UI Configuration

Your UI needs to have the following elements for the online button, offline button and the window name for the chat:

## onlineId
This is the `id` of the DOM element used for a button which is displayed when chat agents are online.

In the below example the `onlineId` would be `online` as it is the `id` of the `div`. Note: that we also set an inline style because the Salesforce chat SDK requires it.

```html
    <div style="display:none" id="online">
      <ion-button>Chat With Us</ion-button>
    </div>
```

## offlineId
This is the `id` of the DOM element used for a button which is displayed when there are no chat agents online.

In the below example the `offlineId` would be `offline` as it is the `id` of the `div`. Note: that we also set an inline style because the Salesforce chat SDK requires it.

```html
    <div style="display:none" id="offline">
      <ion-button>No Agents Available</ion-button>
    </div>
```

## chatWindowName
This is the `name` of the `iframe` used to contain the chat user interface.

In the below example the `chatWindowName` would be `chat` as it is the `name` of the `iframe`.
```html
<iframe name="chat"></iframe>
```

# initChat

Call `initChat(config)` on the page where you have your button to launch chat. This will ensure that the Salesforce SDK shows and hides the online/offline buttons.

```typescript
initChat(this.config);
```

# startChat
Call `startChat(config)` when the user clicks the button to begin a chat session. This will show the chat UI in the iframe named by `chatWindowName`.

# Salesforce Docs
Additional Javascript options can be found in the [Salesforce Chat Documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm).

# Troubleshooting

> You cannot call liveagent.startChat until the asynchronous call to liveagent.init has completed!
- If the domain name of your application (ie `capacitor://localhost`, `http://localhost`) is not whitelisted you will get this error.
