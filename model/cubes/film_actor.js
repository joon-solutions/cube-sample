cube(`film_actor`, {
  sql_table: `dvd_rental.film_actor`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    actor: {
      sql: `${CUBE}.actor_id = ${actor}.actor_id`,
      relationship: `many_to_one`
    },
    
    film: {
      sql: `${CUBE}.film_id = ${film}.film_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    actor_id: {
      sql: `actor_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    film_id: {
      sql: `film_id`,
      type: `number`
    },    
  }
});
