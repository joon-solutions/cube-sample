cube(`store`, {
  sql_table: `dvd_rental.store`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
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
    store_id: {
      sql: `store_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    manager_staff_id: {
      sql: `manager_staff_id`,
      type: `number`
    },     

    address_id: {
      sql: `address_id`,
      type: `number`
    },
    
  }
});
