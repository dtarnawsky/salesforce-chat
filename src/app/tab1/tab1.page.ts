import { Component, NgZone, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  message = '';
  presentingElement: any;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.initChat();
  }

  public startChat() {
    try {
      this.la().startChatWithWindow('573Dn000000czBv', 'chat');
    } catch (err) {
      console.error(err);
      this.message = err as string;
    }
  }

  private la(): any {
    return (<any>window).liveagent;
  }

  private async initChat() {
    await this.loadScript('https://c.la1-c1-ia7.salesforceliveagent.com/content/g/js/56.0/deployment.js');

    // this.la().addButtonEventHandler('573Dn000000czBv', (e: any) => {
    //   console.log(`liveAgent event: ${e}`);    
    // });

    if (!(<any>window)._laq) { (<any>window)._laq = []; }
    (<any>window)._laq.push(() => {
      this.la().showWhenOnline('573Dn000000czBv', document.getElementById('online'));
      this.la().showWhenOffline('573Dn000000czBv', document.getElementById('offline'));
    });

    this.la().init(
      'https://d.la1-c1-ia7.salesforceliveagent.com/chat', // Your API Endpoint ID
      '572Dn000000czEE', // Deployment ID
      '00DDn00000ACnPz' // Organization ID
    );
  }

  private loadScript(src: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject();
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

}
