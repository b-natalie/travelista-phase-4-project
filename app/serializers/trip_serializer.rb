class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator, :location, :image, :budget, :user_trip, :user_plans

  has_many :plans
  has_many :users

  def user_trip
    current_user.user_trips.find_by(trip_id: object.id)
  end

  def user_plans
    current_user.user_plans.filter{|user_plan| user_plan.plan.trip_id == object.id}
  end
end
