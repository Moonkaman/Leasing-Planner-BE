
exports.up = function(knex) {
  return knex.schema.createTable('Group_Users', t => {
    t.increments();
    t.integer('group_id')
    .unsigned()
    .references('id')
    .inTable('Groups')
    .onDelete('CASCADE');

    t.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('Users')
    .onDelete('CASCADE');

    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Group_Users')
};
