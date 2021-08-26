const version = require('./package.json').version;
const { exec, execFile } = require('child_process');



execFile('./deploy.sh', [version], { shell: true }, (err, stdout, stderr)=> {
	if (err) throw err;
    	console.log(stdout)
})
