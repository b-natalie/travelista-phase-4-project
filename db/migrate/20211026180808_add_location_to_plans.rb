class AddLocationToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :location, :string
  end
end
