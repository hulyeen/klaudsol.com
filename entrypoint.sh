#!/bin/bash

cd /app
ruby -v
bundle install
bundle exec rackup --host 0.0.0.0 -p 8888
