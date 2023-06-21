cube(`category`, {
  sql_table: `dvd_rental.category`,
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
    category_id: {
      sql: `category_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    category_name: {
      sql: `category_name`,
      type: `string`
    }
  }
});
