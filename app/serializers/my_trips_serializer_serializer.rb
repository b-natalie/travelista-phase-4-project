class MyTripsSerializerSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator, :location, :image, :budget

  has_many :plans

  def user_trip 
    current_user.user_trips.find_by(trip_id: object.id)
  end
end
