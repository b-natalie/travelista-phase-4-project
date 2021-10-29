class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator, :location, :image, :budget

  has_many :plans
  has_many :users

  # def trip_members
  #   Trip.users 
  # end
end
