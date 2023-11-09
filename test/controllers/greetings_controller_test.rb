require 'test_helper'

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get api' do
    get greetings_api_url
    assert_response :success
  end
end
