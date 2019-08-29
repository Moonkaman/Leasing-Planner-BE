
exports.up = function(knex) {
  return knex.schema.createTable('Building_Apartments', t => {
    t.increments();
    t.integer('building_id')
    .unsigned()
    .references('id')
    .inTable('Buildings')
    .onDelete('CASCADE');

    t.integer('apartment_id')
    .unsigned()
    .references('id')
    .inTable('Apartments')
    .onDelete('CASCADE');

    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  
};
