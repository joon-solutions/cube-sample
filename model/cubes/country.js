cube(`country`, {
  sql_table: `dvd_rental.country`,
  public: false,

  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    country_id: {
      sql: `country_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    country: {
      sql: `country`,
      type: `string`
    }
  }
});
