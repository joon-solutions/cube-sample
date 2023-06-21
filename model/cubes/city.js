cube(`city`, {
  sql_table: `dvd_rental.city`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    country: {
      sql: `${CUBE}.country_id = ${country}.country_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    city_id: {
      sql: `city_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    city: {
      sql: `city`,
      type: `string`
    }
  }
});
