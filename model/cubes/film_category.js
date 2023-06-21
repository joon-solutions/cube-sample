cube(`film_category`, {
  sql_table: `dvd_rental.film_category`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {    
    category: {
      sql: `${CUBE}.category_id = ${category}.category_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    film_id: {
      sql: `film_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    category_id: {
      sql: `category_id`,
      type: `number`
    },        
  }
});
