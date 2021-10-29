class TripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Trip.all, status: :ok
    end

    def show
        trip = find_trip
        render json: trip, status: :ok
    end

    def create
        trip = Trip.new(trip_params)
        trip.creator = current_user.first_name
        trip.save!
        user_trip = UserTrip.create!(
            user_id: @current_user.id,
            trip_id: trip.id
        )
        render json: trip, status: :created
    end

    def update
        trip = find_trip
        trip.update!(trip_params)
        render json: trip, status: :ok
    end

    def destroy
        trip = find_trip
        trip.destroy!
        head :no_content
    end

    def tripsbooked
        render json: @current_user.trips.all
    end

    private 

    def find_trip
        Trip.find(params[:id])
    end

    def trip_params
        params.permit(:name, :description, :location, :start_date, :end_date, :image, :budget)
    end

    def 

    def render_not_found_response
        render json: { error: "Trip not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
