cube(`film`, {
  sql_table: `dvd_rental.film`,
  public: false,

  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    film_category: {
      sql: `${CUBE}.film_id = ${film_category}.film_id`,
      relationship: `many_to_one`
    },

    film_language: {
      sql: `${CUBE}.language_id = ${film_language}.language_id`,
      relationship: `many_to_one`
    }

  },

  segments: {
    film_released_in_2006: {
      sql: `${CUBE}.release_year=2006`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    total_rental_duration: {
      sql: `${CUBE}.rental_duration`,
      type: `sum`
    },

    avg_rental_rate: {
      sql: `rental_rate`,
      type: `avg`,
      title: `Average Rental Rate`
    },

    total_replacement_cost: {
      sql: `replacement_cost`,
      type: `sum`
    },

    total_rental_duration_2006: {
      sql: `${CUBE}.rental_duration`,
      title: `Total rental duration in 2006`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.release_year=2006` }]
    },

    total_rental_duration_animation_2006: {
      sql: `${CUBE}.rental_duration`,
      title: `Total Rental Duration Animation Movie In 2006`,
      type: `sum`,
      filters: [{
        sql: `${CUBE}.release_year=2006 and
                ${category}.category_name='Animation'
        `
      }]
    }

  },

  dimensions: {
    film_id: {
      sql: `film_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    language_id: {
      sql: `language_id`,
      type: `number`
    },     

    release_year: {
      sql: `release_year`,
      type: `number`
    },

    rental_duration: {
      sql: `rental_duration`,
      type: `number`,
      shown: false
    },

    rental_rate: {
      sql: `rental_rate`,
      type: `number`,
      shown: false
    },

    replacement_cost: {
      sql: `replacement_cost`,
      type: `number`,
      shown: false
    },

    title: {
      sql: `title`,
      type: `string`
    },
    
    rating: {
      sql: `rating`,
      type: `string`
    }
  }
});
