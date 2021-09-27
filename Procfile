DISABLE_DATABASE_ENVIRONMENT_CHECK=1
web: bundle exec rails s
release: bin/rake rails db:drop db:create db:migrate db:seed
