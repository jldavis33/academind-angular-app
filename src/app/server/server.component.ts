import { Component } from '@angular/core';

enum ServerStatus {
  Online = 'online',
  Offline = 'offline'
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
     this.serverStatus = Math.random() > 0.5 ? ServerStatus.Online : ServerStatus.Offline;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    switch (this.serverStatus) {
      case 'online':
        return 'green';
      case 'offline':
      default:
        return 'red';
    }
  }
}
