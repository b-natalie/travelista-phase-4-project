class UserPlansController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: UserPlan.all, status: :ok
    end

    def show
        user_plan = find_user_plan
        render json: user_plan, status: :ok
    end

    def create
        user_plan = UserPlan.create!(user_plan_params)
        render json: user_plan, status: :created
    end

    def destroy
        user_plan = find_user_plan
        user_plan.destroy!
        head :no_content
    end

    private 

    def find_user_plan
        UserPlan.find(params[:id])
    end

    def user_plan_params
        params.permit(:method_of_transportation, :transportation_cost, :commentary, :stay, :stay_cost, :trip_id, :user_id)
    end

    def 

    def render_not_found_response
        render json: { error: "UserPlan not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
