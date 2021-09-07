class Versions {

  versions = [    
    {
      ver: '5.1',
      changes: [
        'add important && compare btns;',
      ],
      current: true
    },
    {
      ver: '5.0',
      changes: [
        'add 404 page;',
        'update routing;',
        'create texts store.'
      ]
    },
    {
      ver: '4.0',
      changes: [
        'add backend Api support.'
      ]
    },
    {
      ver: '3.0',
      changes: [
        'add actions alerts;',
        'add withStore HOC.'
      ]
    },
    {
      ver: '2.0',
      changes: [        
        'update webpack config. Added sass and postcss loaders. Added autoprefixer;',
        'all styles update on SASS;',
        'update About page: add versions table.'
      ]
    },
    {
      ver: '1.0',
      changes: [
        'Release stable version.'
      ]
    }
  ];
}

export default Versions;