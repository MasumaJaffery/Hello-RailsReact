# frozen_string_literal: true

# app/controllers/api/greetings_controller.rb
module Api
  class GreetingsController < ApplicationController
    def api
      random_greeting = Greeting.order('RANDOM()').first
      render json: { message: random_greeting&.message }
    end
  end
end
