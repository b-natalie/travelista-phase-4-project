class Plan < ApplicationRecord
    belongs_to :trip
    has_many :user_plans
    has_many :users, through: :user_plans

    validates :name, :description, :location, :date, :start_time, :duration, :cost, presence: true
end
