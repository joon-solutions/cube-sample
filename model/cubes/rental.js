cube(`rental`, {
  sql_table: `dvd_rental.rental`,
  public: false,
  
  data_source: `default`,
  
  pre_aggregations: {
    rental_by_week: {
      measures: [CUBE.total_number_of_rents],
      time_dimension: CUBE.rental_date,
      granularity: `week`,
      partition_granularity: `week`
    }
  },
  
  joins: {
    inventory: {
      sql: `${CUBE}.inventory_id = ${inventory}.inventory_id`,
      relationship: `many_to_one`
    },
    
    customer: {
      sql: `${CUBE}.customer_id = ${customer}.customer_id`,
      relationship: `many_to_one`
    },
    
    staff: {
      sql: `${CUBE}.staff_id = ${staff}.staff_id`,
      relationship: `many_to_one`
    }
  },
  
  measures: {
    total_number_of_rents: {
      type: `count`,
      title: `Total number of rents`
    }
  },
  
  dimensions: {
    rental_id: {
      sql: `rental_id`,
      type: `number`,
      format: `id`,
      primaryKey: true
    },

    inventory_id: {
      sql: `inventory_id`,
      type: `number`
    }, 

    customer_id: {
      sql: `customer_id`,
      type: `number`
    },   
    
    rental_date: {
      sql: `rental_date`,
      type: `time`
    },
    
    return_date: {
      sql: `return_date`,
      type: `time`
    }
  }
});
