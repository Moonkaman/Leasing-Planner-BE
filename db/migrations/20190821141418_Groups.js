
exports.up = function(knex) {
  return knex.schema.createTable('Groups', t => {
    t.increments();
    t.string('group_name');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Groups');
};
