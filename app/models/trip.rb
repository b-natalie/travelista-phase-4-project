class Trip < ApplicationRecord
    has_many :plans, dependent: :destroy
    has_many :user_trips, dependent: :destroy
    has_many :users, through: :user_trips

    validates :name, :description, :creator, :location, :start_date, :end_date, :image, :budget, presence: true
end
