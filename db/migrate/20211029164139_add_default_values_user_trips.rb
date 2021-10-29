class AddDefaultValuesUserTrips < ActiveRecord::Migration[6.1]
  def change
    change_column_default :user_trips, :method_of_transportation, ""
    change_column_default :user_trips, :transportation_cost, 0
    change_column_default :user_trips, :stay, ""
    change_column_default :user_trips, :stay_cost, 0
  end
end
