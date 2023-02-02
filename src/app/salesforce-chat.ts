
export interface ChatConfiguration {
    buttonId: string;
    onlineId: string;
    offlineId: string;
    chatWindowName: string;
    deploymentUrl: string;
    apiEndpointUrl: string;
    deploymentId: string;
    organizationId: string;
}

export function startChat(config: ChatConfiguration): string | undefined {
    try {
        (window as any).liveagent.startChatWithWindow(config.buttonId, config.chatWindowName);
        return;
    } catch (err) {
        console.error(err);
        return err as string;        
    }
}

export async function initChat(config: ChatConfiguration) {
    await loadScript(config.deploymentUrl);

    if (!(window as any)._laq) { (<any>window)._laq = []; }
    (window as any)._laq.push(() => {
        (window as any).liveagent.showWhenOnline(config.buttonId, document.getElementById(config.onlineId));
        (window as any).liveagent.showWhenOffline(config.buttonId, document.getElementById(config.offlineId));
    });

    
    (window as any).liveagent.init(
        config.apiEndpointUrl,
        config.deploymentId,
        config.organizationId
    );
}

function loadScript(src: string) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject();
        document.getElementsByTagName('head')[0].appendChild(script);
    });
}