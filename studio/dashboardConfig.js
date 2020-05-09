export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb67adb9b1349d0ba291f59',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7rez1vn6',
                  apiId: '1aa82913-932e-4b74-a7de-0bc9025292d1'
                },
                {
                  buildHookId: '5eb67adbc2f2d2c34928707e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1uxb52wi',
                  apiId: '3bb7af4b-d915-496e-874e-7438988938e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barbogast/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1uxb52wi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
