class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def index
    respond_html
  end
  
  def projects
    respond_html
  end
  
  def publications
    respond_html
  end
  
  def travels
    respond_html
  end

  def terms
    respond_html
  end
  def contact
    ContactMailer.contact_email(contact_params).deliver
    respond_to do |format|
      format.json { head :no_content }
    end
  end
    
  def respond_html
    respond_to do |format|
        format.html { render }
    end
  end
  
  def contact_params
    params.permit(:reply_to, :subject, :message)
  end
end
