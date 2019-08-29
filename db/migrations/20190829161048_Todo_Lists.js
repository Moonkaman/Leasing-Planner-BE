
exports.up = function(knex) {
  return knex.schema.createTable('Todo_Lists', t => {
    t.increments();
    t.string('name');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Todo_Lists');
};
