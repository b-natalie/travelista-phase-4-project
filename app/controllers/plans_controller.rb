class PlansController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Plan.all, status: :ok
    end

    def show
        plan = find_plan
        render json: plan, status: :ok
    end

    def create
        plan = Plan.create!(plan_params)
        render json: plan, status: :created
    end

    def update
        plan = find_plan
        plan.update!(plan_params)
        render json: plan, status: :ok
    end

    def destroy
        plan = find_plan
        plan.destroy!
        head :no_content
    end

    private 

    def find_plan
        Plan.find(params[:id])
    end

    def plan_params
        params.permit(:name, :description, :location, :date, :start_time, :duration, :cost, :trip_id)
    end

    def 

    def render_not_found_response
        render json: { error: "Plan not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
