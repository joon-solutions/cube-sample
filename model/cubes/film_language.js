cube(`film_language`, {
  sql_table: `dvd_rental.film_language`,
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
    language_id: {
      sql: `language_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    language_name: {
      sql: `language_name`,
      type: `string`
    }
  }
});
