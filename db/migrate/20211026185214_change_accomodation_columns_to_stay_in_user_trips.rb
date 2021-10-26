class ChangeAccomodationColumnsToStayInUserTrips < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_trips, :accommodation_description, :stay
    rename_column :user_trips, :accommodation_cost, :stay_cost
  end
end
