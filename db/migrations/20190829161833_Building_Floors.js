
exports.up = function(knex) {
  return knex.schema.createTable('Building_Floors', t => {
    t.increments();
    t.integer('building_id')
    .unsigned()
    .references('id')
    .inTable('Buildings')
    .onDelete('CASCADE');

    t.integer('floor_id')
    .unsigned()
    .references('id')
    .inTable('Floors')
    .onDelete('CASCADE');

    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Building_Floors')
};
