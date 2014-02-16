class ContactMailer < ActionMailer::Base
  default Rails.application.config.email
  
  def contact_email(form_data)
    @message = form_data[:message]
    mail(form_data)
  end
end
