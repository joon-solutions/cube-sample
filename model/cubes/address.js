cube(`address`, {
  sql_table: `dvd_rental.address`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    city: {
      sql: `${CUBE}.city_id = ${city}.city_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    address_id: {
      sql: `address_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    address: {
      sql: `address`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    district: {
      sql: `district`,
      type: `string`
    },
    
    postal_code: {
      sql: `postal_code`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    }
  }
});
