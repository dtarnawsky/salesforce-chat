import { Component, OnInit } from '@angular/core';
import { ChatConfiguration, initChat, startChat } from '../salesforce-chat';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  message = '';
  presentingElement: any;

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

  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    initChat(this.config);
  }

  public opened() {
    const error = startChat(this.config);
    if (error) {
      this.message = error;
    }
  }
}