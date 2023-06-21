cube(`customer`, {
  sql_table: `dvd_rental.customer`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    store: {
      sql: `${CUBE}.store_id = ${store}.store_id`,
      relationship: `many_to_one`
    },
    
    address: {
      sql: `${CUBE}.address_id = ${address}.address_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    customer_id: {
      sql: `customer_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    first_name: {
      sql: `first_name`,
      type: `string`
    },
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    create_date: {
      sql: `create_date`,
      type: `time`
    }
  }
});
