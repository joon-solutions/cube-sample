view(`rental_summary`, {
  includes: [
    rental.rental_id,
    rental.rental_date,
    rental.return_date,
    rental.total_number_of_rents
  ],

  measures: {
    total_rental_duration: {
      sql: `${rental.inventory.film.total_rental_duration}`,
      type: `number`
    },

    total_rental_duration_2006: {
      sql: `${rental.inventory.film.total_rental_duration_2006}`,
      type: `number`
    },

    total_rental_duration_animation_2006: {
      sql: `${rental.inventory.film.total_rental_duration_animation_2006}`,
      type: `number`
    },

    avg_rental_rate: {
      sql: `${rental.inventory.film.avg_rental_rate}`,
      type: `number`
    },

    total_replacement_cost: {
      sql: `${rental.inventory.film.total_replacement_cost}`,
      type: `number`
    }
  },

  dimensions: {
    city: {
      sql: `${rental.inventory.store.address.city.city}`,
      type: `string`
    },

    title: {
      sql: `${rental.inventory.film.title}`,
      type: `string`
    },

    release_year: {
      sql: `${rental.inventory.film.release_year}`,
      type: `string`
    },

    category_name: {
      sql: `${rental.inventory.film.film_category.category.category_name}`,
      type: `string`
    }

  }
});
