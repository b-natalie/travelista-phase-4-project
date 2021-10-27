
class UserTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: UserTrip.all, status: :ok
    end

    def show
        user_trip = find_user_trip
        render json: user_trip, status: :ok
    end

    def create
        user_trip = UserTrip.create!(user_trip_params)
        render json: user_trip, status: :created
    end

    def update
        user_trip = find_user_trip
        user_trip.update!(user_trip_params)
        render json: user_trip, status: :ok
    end

    def destroy
        user_trip = find_user_trip
        user_trip.destroy!
        head :no_content
    end

    private 

    def find_user_trip
        UserTrip.find(params[:id])
    end

    def user_trip_params
        params.permit(:method_of_transportation, :transportation_cost, :commentary, :stay, :stay_cost, :trip_id, :user_id)
    end

    def 

    def render_not_found_response
        render json: { error: "UserTrip not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
