
exports.up = function(knex) {
  return knex.schema.createTable('Buildings', t => {
    t.increments();
    t.string('building_name');
    t.timestamps(true, true)
    t.integer('Group')
    .unsigned()
    .references('id')
    .inTable('Groups')
    .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Buildings')
};
