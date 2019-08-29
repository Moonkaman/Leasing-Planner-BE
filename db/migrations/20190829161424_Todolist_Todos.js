
exports.up = function(knex) {
  return knex.schema.createTable('Todolist_Todos', t => {
    t.increments();
    t.integer('todo_list_id')
    .unsigned()
    .references('id')
    .inTable('Todo_Lists')
    .onDelete('CASCADE');

    t.integer('todo_id')
    .unsigned()
    .references('id')
    .inTable('Todos')
    .onDelete('CASCADE');

    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  
};
