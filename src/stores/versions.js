class Versions {

  versions = [    
    {
      ver: '7.0',
      changes: [
        'update MobX version (delete mobx decorators from stores)',
        'add Bootstrap & restyling layout'
      ],
      current: true
    },
    {
      ver: '6.0',
      changes: [
        'add localization support;',
        'stylization for components.'
      ]
    },
    {
      ver: '5.1',
      changes: [
        'add important && complete btns;',
      ]
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