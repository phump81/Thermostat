require 'sinatra/base'

class Thermostat < Sinatra::Base

  get '/' do
    File.read('public/index.html')
  end
end
