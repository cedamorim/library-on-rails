#!/bin/bash
docker-compose run --rm --name library_on_rails_backend backend bash -c 'rm -rf ./tmp/pids/server.pid;
  rm -rf tmp/cache/bootsnap-*;
  bundle install;
  rails db:prepare;'
