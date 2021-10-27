class UsersController < ApplicationController

    def show
        user = find_user
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "User not found"}
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
