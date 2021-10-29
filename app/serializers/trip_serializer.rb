class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator, :location, :image, :budget, :user_trip

  has_many :plans
  has_many :users

  def user_trip
    current_user.user_trips.find_by(trip_id: object.id)
  end
end
