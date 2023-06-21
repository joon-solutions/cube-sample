cube(`inventory`, {
  sql_table: `dvd_rental.inventory`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    film: {
      sql: `${CUBE}.film_id = ${film}.film_id`,
      relationship: `many_to_one`
    },
    
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
    inventory_id: {
      sql: `inventory_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    film_id: {
      sql: `film_id`,
      type: `number`
    }, 

    store_id: {
      sql: `store_id`,
      type: `number`
    },         
  }
});
