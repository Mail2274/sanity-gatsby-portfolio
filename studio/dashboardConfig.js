export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60ed99e68f4cf6467869b463',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rj8bdrsn',
                  apiId: '0b3b6cbd-c28a-4579-a7a1-d05c4f14657c'
                },
                {
                  buildHookId: '60ed99e6adac6824e1b3eeea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6bv1q78d',
                  apiId: 'c286c555-71c9-4bcf-806e-504a0ffb7dfd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mail2274/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6bv1q78d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
