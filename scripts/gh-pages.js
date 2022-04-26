var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/Aurora-data',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:JakobST1n/Aurora-data.git',
        user: {
            name: 'jakobst1n'
        }
    },
    (e) => {
        console.log(e);
        console.log('Deploy Complete!')
    },
    console.log
)
