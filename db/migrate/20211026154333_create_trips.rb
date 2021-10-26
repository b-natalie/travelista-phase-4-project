class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name 
      t.string :description
      t.string :creator
      t.string :location
      t.string :start_date
      t.string :end_date
      t.string :image
      t.integer :budget
      t.timestamps
    end
  end
end
