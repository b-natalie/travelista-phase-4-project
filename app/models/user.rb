class User < ApplicationRecord
    has_secure_password

    has_many :user_trips
    has_many :trips, through: :user_trips
    has_many :user_plans
    has_many :plans, through: :user_plans

    validates :first_name, :last_name, :password_digest, presence: true
    validates :email, uniqueness: true
end
