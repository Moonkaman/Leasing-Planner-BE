
exports.up = function(knex) {
  return knex.schema.createTable('Tours', t => {
    t.increments();
    t.integer('apartment_id')
    .unsigned()
    .references('id')
    .inTable('Apartments')
    .onDelete('CASCADE');
    t.text('guests');
    t.text('notes');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Tours');
};
