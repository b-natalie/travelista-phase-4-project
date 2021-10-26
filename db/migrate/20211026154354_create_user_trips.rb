class CreateUserTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :user_trips do |t|
      t.string :method_of_transportation
      t.integer :transportation_cost
      t.string :accommodation_description
      t.integer :accommodation_cost
      t.string :commentary
      t.integer :user_id
      t.integer :trip_id
      t.timestamps
    end
  end
end
