#This controller is used for the start screen of superadmin area.
class Ubiquo::SuperadminHomesController < UbiquoAreaController

  #Only superadmins can access to this controller
  before_filter :superadmin_required
  
  def show
  end
  
end
