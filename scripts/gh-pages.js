var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/aurora-data',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JakobST1n/Aurora-data.git',
        user: {
            name: 'jakobst1n'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
