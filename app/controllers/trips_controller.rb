class TripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity_response
    
    def index
        all_trips = Trip.all
        render json: all_trips
    end

    def show
        trip = find_trip
        render json: trip, status: :ok
    end

    def create
        trip = Trip.create!(trip_params)
        render json: trip, status: :created
    end

    def update
        trip = find_trip
        trip.update!(trip_params)
        render json: trip, status: :ok
    end

    def destroy
        trip = find_trip
        Trip.destroy!
        head :no_content
    end


    private

    def find_trip
        Trip.find(params[:id])
    end

    def trip_params
        params.permit(:name, :description, :creator, :location, :start_date, :end_date, :image, :budget)
    end

    def render_not_found_response
        render json: {errors: "Trip not found"}, status: 404
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
