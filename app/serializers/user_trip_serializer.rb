class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :method_of_transportation, :transportation_cost, :commentary, :stay, :stay_cost, :trip_id, :user_id
end
