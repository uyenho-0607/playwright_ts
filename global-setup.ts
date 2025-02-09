import { ConfigManager } from './src/base/configManager';

export default async function globalSetup() {
  console.log(' Running global setup...');
  ConfigManager.getConfig();
  console.log(' Global setup completed !');
}
