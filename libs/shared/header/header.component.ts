import { Component, Inject } from '@angular/core';
import { ENV_CONFIG, EnvConfig } from '@mz/core';

@Component({
  selector: 'mz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    siteName: string;
    constructor(@Inject(ENV_CONFIG) environment: EnvConfig,) {
        this.siteName = environment.name;
    }
}
