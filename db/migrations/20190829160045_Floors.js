
exports.up = function(knex) {
  return knex.schema.createTable('Floors', t => {
    t.increments();
    t.text('notes');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Floors');
};
