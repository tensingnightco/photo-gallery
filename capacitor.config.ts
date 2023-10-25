import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '505423324948-ssjmojk1cqmssit9r9gh2cpc69fs0eri.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
