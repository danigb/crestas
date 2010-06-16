Ubiquo::Config.add do |config|
  config.app_name = "crestas"
  config.app_title = "Crestas"
  config.app_description = "Crestas"
  case RAILS_ENV
  when 'development', 'test'
    config.notifier_email_from = 'railsmail@gnuine.com'
  else
    config.notifier_email_from = 'railsmail@gnuine.com'
  end
end
