class Useruser_planssController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity_response
    
    def index
        all_user_plans = UserPlan.all
        render json: all_user_plans
    end

    def show
        user_plans = find_user_plans
        render json: user_plan, status: :ok
    end

    def create
        user_plans = user_plan.create!(user_plans_params)
        render json: user_plan, status: :created
    end


    def destroy
        user_plans = find_user_plans
        UserPlan.destroy!
        head :no_content
    end


    private

    def find_user_plans
        UserPlan.find(params[:id])
    end

    def user_plans_params
        params.permit(:user_id, :plan_id)
    end

    def render_not_found_response
        render json: {errors: "user_plans not found"}, status: 404
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

end
