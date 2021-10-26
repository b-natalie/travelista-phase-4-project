class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :description
      t.string :date
      t.string :start_time
      t.integer :duration
      t.integer :cost
      t.integer :trip_id
      t.timestamps
    end
  end
end
