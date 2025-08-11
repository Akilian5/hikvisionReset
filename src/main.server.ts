
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // puedes unificar client y server config

const bootstrap = () =>
  bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideServerRendering()
    ]
  });

export default bootstrap;
