class ApplicationController < ActionController::API
  before_action :validate_token

  class Unauthorized < StandardError; end

  class Forbidden < StandardError; end

  rescue_from Unauthorized, Forbidden, ActiveRecord::RecordNotFound do |e|
    render json: { error: e.message },
           status: ActionDispatch::ExceptionWrapper.status_code_for_exception(e.class.name)
  end

  private

  def validate_token
    @token = JWT.decode(token_from_header, ENV['SECRET_HASH'], true, { algorithm: ENV['TOKEN_ALGO'] || 'HS256' })
  rescue JWT::ExpiredSignature
    raise Forbidden, 'Token expirado'
  rescue StandardError
    raise Unauthorized, 'Token não informado ou inválido'
  end

  def token_from_header
    @token_from_header ||= request.headers['Authorization'].gsub('Bearer ', '')
  end
end
