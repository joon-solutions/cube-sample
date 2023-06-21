cube(`payment`, {
  sql_table: `dvd_rental.payment`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    customer: {
      sql: `${CUBE}.customer_id = ${customer}.customer_id`,
      relationship: `many_to_one`
    },
    
    staff: {
      sql: `${CUBE}.staff_id = ${staff}.staff_id`,
      relationship: `many_to_one`
    },
    
    rental: {
      sql: `${CUBE}.rental_id = ${rental}.rental_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    payment_id: {
      sql: `rental_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    customer_id: {
      sql: `customer_id`,
      type: `number`
    },

    staff_id: {
      sql: `staff_id`,
      type: `number`
    }, 

    rental_id: {
      sql: `rental_id`,
      type: `number`
    },         

    amount: {
      sql: `amount`,
      type: `string`
    },
    
    payment_date: {
      sql: `payment_date`,
      type: `time`
    }
  }
});
