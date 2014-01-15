require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
# require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Me
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    config.title = "Yavor Stoychev == Явор Стойчев"
    
    config.meta = {
      :description => {
        :index => """A Software Engineer and Entrepreneur from Sofia, Bulgaria and a Member of the Association of Bulgarian Leaders and Entrepreneurs""",
        :projects => """A select list of projects Yavor Stoychev has been working on.""",
        :publications => """A select list of publications Yavor Stoychev has written in the fields of Economics, Computer Science and Phoilosophy""",
        :achievements => """A select list of achievements Yavor Stoychev has earned in various fields"""
       
      }, :keywords => {
        :index => """Yavor Stoychev, Явор Стойчев, Software Engineering, American University in Bulgaria, AUBG,
          Association of Bulgarian Leaders and Entrepreneurs, ABLE, Rochester Institute of Technology, RIT""",
        :projects => """Books on Rails, TAGS, Tiny Rails Gallery, Share Scanner, Yavor Stoychev, Явор Стойчев, Projects, Java, Python, Ruby on Rails""",
        :publications => """Yavor Stoychev, Явор Стойчев, Publications, Economic Forecasting, Artificial Intelligence, Economic Policy""",
        :achievements => """Yavor Stoychev, Явор Стойчев, Awards, Achievements, Piano, ACM, English, Physics, Computer Science, Economics"""
      }
    }
    
    config.email = {
      :from => "contact@stoychev.bg",
      :to => "stoychev.yavor@gmail.com"
    }
    
    config.action_mailer.smtp_settings = {
      :address => "smtp.gmail.com",
      :port => 587,
      :domain => "example.com",
      :authentication => "plain",
      :enable_starttls_auto => true,
      :user_name => "stoychev.yavor@gmail.com",
      :password => "yks15208829",
      :enable_starttls_auto => true
    }
  end
end
