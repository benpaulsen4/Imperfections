import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { DataSourceToken } from './services/data-source.interface';
import { HostedDataSourceService } from './services/hosted-data-source.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: DataSourceToken, useClass: HostedDataSourceService },
  ],
};
