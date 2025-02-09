import dotenv from 'dotenv';
import { configDir } from '../constants';
import path from 'path';
import fs from 'fs';
import yaml from 'yaml';

dotenv.config();

interface Config {
  user: string;
  password: string;
  domain: string;
  urls: {
    base: string;
    api_oauth2: string;
    api_v4: string;
  };
}

export class ConfigManager {
  private static config: Config;

  private static loadConfig(): void {
    if (this.config) return;


    let env = process.env.ENV || 'staging';
    let configPath = path.join(configDir, `${env}.yaml`);
    console.log(configPath);

    try {
      const configData = fs.readFileSync(configPath, 'utf-8');
      this.config = yaml.parse(configData) as Config;
      console.log('Config loaded !');
    } catch (error) {
      console.log(' Failed to load config !');
      process.exit(1);
    }
  }

  public static getConfig(): Config {
    this.loadConfig();
    if (!this.config) {
      throw new Error('Config not loaded!!');
    }
    return this.config;
  }
}
