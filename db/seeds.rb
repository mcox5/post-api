# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creando Posts..."

Post.create!(name: "Mi primer post de ejemplo", description: "Esto es para ver si se muestra correctamente en la API configurada en Rails")
Post.create!(name: "Mi segundo post de ejemplo", description: "Esto es para ver nuevamente si se muestra correctamente en la API configurada en Rails")
