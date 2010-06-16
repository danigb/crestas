#Exception notification
ExceptionNotifier.exception_recipients = %w( chan@ge.me )
ExceptionNotifier.sender_address = %("Application Error" <chan@ge.me>)
ExceptionNotifier.email_prefix = "[crestas #{RAILS_ENV} ERROR]"
