
exports.up = function(knex) {
  return knex.schema.createTable('Todos', t => {
    t.increments();
    t.text('todo');
    t.boolean('completed');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Todos')
};
