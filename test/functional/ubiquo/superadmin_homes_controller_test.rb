require File.dirname(__FILE__) + "/../../test_helper.rb"
class Ubiquo::SuperadminHomesControllerTest < ActionController::TestCase
  
  def test_should_get_show_if_superadmin
    
    user = UbiquoUser.find(login_as(:superadmin))

    assert user.is_superadmin?
    
    get :show
    
    assert_response :ok
  end
  
  def test_shouldnt_get_show_if_not_superadmin
    user = UbiquoUser.find(login_as(:eduard))
    assert !user.is_superadmin?
    
    get :show
    
    assert_redirected_to ubiquo_login_path
  end
end
