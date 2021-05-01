ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

module TokenHelper
  def fetch_token(user)
    post '/api/auth', params: user

    JSON.parse(response.body.to_s)['token']
  end
end

class ActiveSupport::TestCase
  include TokenHelper

  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
