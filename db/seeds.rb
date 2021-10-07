# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Review.destroy_all
Service.destroy_all
User.destroy_all

@admin = User.create!(username: 'First', email: 'first@email.com', password:'12345')

puts "#{User.count} users created"


@respiratory = Service.create!(specialty: 'pulmonology', description: 'listen to lungs for any signs of distress', image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbaycare.org%2Fservices%2Fpulmonary-and-respiratory&psig=AOvVaw0ghSPAX0VjdHIXkXeHB4zo&ust=1633534871276000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjvqvHNs_MCFQAAAAAdAAAAABAJ')
@cardiovascular = Service.create!(specialty:'cardiology', description: 'asses the transport of nutrients and oxygen-rich blood to all parts of the body', image_url: 'https://cdn.mos.cms.futurecdn.net/pYF5YURHV2xggu6L2Dnjfb-970-80.jpg.webp')
@muscular = Service.create!(specialty:'myology', description: 'asses the movement of the body, posture, circulation of blood through the body', image_url: 'https://d3q6qq2zt8nhwv.cloudfront.net/course/036baf3eabfd4752bfd2bb71116f66f7.jpg')
@digestive = Service.create!(specialty:'gastroenterology', description: 'asses the function of the digestive system', image_url: 'https://d3idks24kkd2lv.cloudfront.net/wp-content/uploads/2020/02/Food-Digestion-Feature-1024x555.jpg')
@skeletal = Service.create!(specialty:'osteology', description: 'asses the function of the skeleton and bony structures', image_url: 'https://cdn.mos.cms.futurecdn.net/mGfKXFfhxXuLuoCT8ZnuxZ.jpg')
@nasal = Service.create!(specialty:'nasal physiology', description: 'treatment of the nasal and sinus passages', image_url: 'https://www.visiblebody.com/hs-fs/hub/189659/file-2545156217.jpg')
@reproductive = Service.create!(specialty:'reproductive biology', description: 'treatments for reproductive disorders', image_url: 'https://assets.puzzlefactory.pl/puzzle/246/763/original.jpg')


puts "#{Service.count} services created"



Review.create!(content: 'great service', user: @admin , service: @respiratory)
Review.create!(content: 'great service', user: @admin , service: @cardiovascular)
Review.create!(content: 'great service', user: @admin , service: @muscular)
Review.create!(content: 'great service', user: @admin , service: @digestive)
Review.create!(content: 'great service', user: @admin , service: @skeletal)
Review.create!(content: 'great service', user: @admin , service: @nasal)
Review.create!(content: 'great service', user: @admin , service: @reproductive)
Review.create!(content: 'great service and compliments', user: @admin , service: @reproductive)



puts "#{Review.count} reviews created"
