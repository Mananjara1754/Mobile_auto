import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.android.application',
  appName: 'auto',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;