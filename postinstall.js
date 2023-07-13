const { execSync } = require('child_process');
const { version } = require('./package.json');

const vers = version.split('+')[0]; // Remove patch suffix

execSync(`curl https://htmltest.wjdp.uk | bash -s -- v${vers}`, {
  stdio: 'inherit',
});
