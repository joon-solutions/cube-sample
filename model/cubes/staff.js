cube(`staff`, {
  sql_table: `dvd_rental.staff`,
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
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    film_id: {
      sql: `staff_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    address_id: {
      sql: `address_id`,
      type: `number`
    },     

    store_id: {
      sql: `store_id`,
      type: `number`
    },

    is_active: {
      sql: `active=1`,
      type: `boolean`
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
    
    username: {
      sql: `username`,
      type: `string`
    }
  }
});
