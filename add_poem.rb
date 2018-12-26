require 'json'
require 'fastimage'

puts 'Language:'
language = gets.chomp
puts 'Name of the author:'
author = gets.chomp
puts 'Image URL:'
img_url = gets.chomp
puts 'poem:'
poem = gets.chomp

poem_hash = { name: "<strong>#{author}</strong>",
              imgSource: img_url,
              imgWidth: FastImage.size(img_url)[0],
              imgHeight: FastImage.size(img_url)[1],
              poem: poem.split("\n") }

json = File.read("data/#{language}-poems.json")
json_array = JSON.parse(json)
json_array << poem_hash

File.open("data/#{language}-poems.json", "w") do |f|
  f.puts JSON.pretty_generate(json_array)
end
