const fs = require('fs');
if (fs.existsSync('.next-cli-build/server/app')) {
  fs.cpSync('.next-cli-build/server/app', 'public', { recursive: true });
}
if (fs.existsSync('.next-cli-build/static')) {
  fs.cpSync('.next-cli-build/static', 'public/_next/static', { recursive: true });
}
console.log('✅ Public static files built successfully!');
