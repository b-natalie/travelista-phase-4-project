class PlanSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :start_time, :duration, :cost
end
