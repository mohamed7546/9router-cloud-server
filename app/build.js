const fs = require('fs');
const path = require('path');
const rootPublic = path.resolve(__dirname, '../public');
const appPublic = path.resolve(__dirname, 'public');
const srcApp = path.resolve(__dirname, '.next-cli-build/server/app');
const srcStatic = path.resolve(__dirname, '.next-cli-build/static');
if (!fs.existsSync(rootPublic)) fs.mkdirSync(rootPublic, { recursive: true });
if (!fs.existsSync(appPublic)) fs.mkdirSync(appPublic, { recursive: true });
if (fs.existsSync(srcApp)) {
  fs.cpSync(srcApp, rootPublic, { recursive: true });
  fs.cpSync(srcApp, appPublic, { recursive: true });
}
if (fs.existsSync(srcStatic)) {
  fs.cpSync(srcStatic, path.join(rootPublic, '_next/static'), { recursive: true });
  fs.cpSync(srcStatic, path.join(appPublic, '_next/static'), { recursive: true });
}
console.log('✅ 9router build complete!');
