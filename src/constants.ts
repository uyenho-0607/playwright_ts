import path from "path";

export const rootDir: string = path.resolve(`${__dirname}/../`);
const srcDir: string = rootDir + "/src";
const resourceDir: string = srcDir + "/resources";
export const configDir: string = resourceDir + "/config";


console.log(configDir);