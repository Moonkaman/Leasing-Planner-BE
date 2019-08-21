
exports.up = function(knex) {
  return knex.schema.createTable('Users', t => {
    t.increments()
    t.string('username').notNullable().unique();
    t.string('password');
    t.string('picture');
    t.string('role');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
