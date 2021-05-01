class AuthController < ApplicationController
  def create
    @user = User.find_by(email: auth_params[:email])

    return render json: { error: 'Usuário e senha não confere' } unless @user&.authenticate(auth_params[:password])

    render json: { token: generate_token }, status: :created
  end

  private

  def auth_params
    params.permit(:email, :password)
  end

  def generate_token
    JWT.encode(payload, ENV['SECRET_HASH'], ENV['TOKEN_ALGO'] || 'HS256')
  end

  def payload
    {
      id: @user.id,
      email: @user.email,
      name: @user.name,
      iss: ENV['API_URL'],
      exp: Time.current.to_i + (ENV['TOKEN_TTL'] || 2).hours.to_i,
      nbf: Time.current.to_i,
      iat: Time.current.to_i
    }
  end
end
