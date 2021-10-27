class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator, :location, :image, :budget

  has_many :plans
end
