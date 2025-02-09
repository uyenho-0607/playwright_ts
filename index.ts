import path from 'path';

export const rootDir: string = path.resolve(`${__dirname}/../`);
// export const srcDir: string = path.resolve(__dirname);
export const srcDir: string = rootDir + '/src';
export const resourceDir: string = srcDir + '/resources';
export const configDir: string = resourceDir + '/config';

console.log(rootDir);
console.log(resourceDir);
console.log(configDir);