
exports.up = function(knex) {
  return knex.schema.createTable('Calls', t => {
    t.increments();
    t.text('phone_number');
    t.text('name');
    t.text('description');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Calls');
};
