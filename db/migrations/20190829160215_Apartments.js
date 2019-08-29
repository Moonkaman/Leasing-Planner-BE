
exports.up = function(knex) {
  return knex.schema.createTable('Apartments', t => {
    t.increments();
    t.string('apartment_number');
    t.boolean('leased');
    t.text('move_in_date');
    t.text('move_out_date');
    t.text('trash_out');
    t.text('paint');
    t.text('make_ready');
    t.text('carpet');
    t.text('maid');
    t.text('counter_tops');
    t.text('tiles');
    t.text('inspected');
    t.text('notes');
    t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Apartments');
};
