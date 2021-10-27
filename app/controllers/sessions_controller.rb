class SessionsController < ApplicationController

    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid email or password" }, status: :unauthorized
      end
    end

    def destroy
        if current_user
          session.delete :user_id
        else
          render json: { error: 'no active session'}, status: :unprocessable_entity
        end
    end

end