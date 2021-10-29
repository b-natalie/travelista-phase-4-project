# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding trips"
trip1 = Trip.create(name: "Solo Trip", description: "Spanish speaking country, tapas, and beer", creator: "Erica", location: "Spain", start_date: "05/05/22", end_date: "05/25/22", image: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1270,c_fill,g_auto,h_714,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170706113411-spain.jpg", budget: 900)

trip2 = Trip.create(name: "Graduation Trip", description: "Tropical location, luaus, Road to Hana", creator: "Natalie", location: "Hawaii", start_date: "07/02/22", end_date: "07/07/22", image: "https://image.cnbcfm.com/api/v1/image/106755951-1603356916166-gettyimages-176612815-97e38d42-7d03-4258-b1a9-13dcaea7512c.jpeg?v=1603412599", budget: 1200)

trip3 = Trip.create(name: "Girl's Trip", description: "Sushi, street food, robot restaurant, Harajuku", creator: "Natalie", location: "Japan", start_date: "11/10/22", end_date: "11/20/22", image: "https://www.schwab.com/resource-center/insights/sites/g/files/eyrktu156/files/getty_1131743616_960x537.jpg", budget: 1700)

trip4 = Trip.create(name: "Anniversary Trip", description: "Portuguese speaking country, Carnival, Christ the Redeemer Statue", creator: "Gabe", location: "Brazil", start_date: "02/11/24", end_date: "02/16/24", image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1145D/production/_110794707_gettyimages-590664365.jpg", budget: 600)

puts "Seeding plans"
plan1 = Plan.create(name: "La Sagrada Familia", description: "Church designed by the Spanish architect Antoni Gaudi.", location: "Barcelona", date: "05/12/22", start_time: "1:00 pm", duration: 2, cost: 25, trip: trip1)

plan2 = Plan.create(name: "Road to Hana", description: "64.4 miles long stretch of Hawaii routes which connect Kahului to the town of Hana in East Maui.", location: "Maui", date: "07/04/22", start_time: "3:00 pm", duration: 4, cost: 10, trip: trip2)

plan3 = Plan.create(name: "Robot Restaurant", description: "Restaurant in Japan that has a live show with robots that serve you dinner.", location: "Tokyo", date: "11/15/22", start_time: "7:00 pm", duration: 3, cost: 50, trip: trip3)

plan4 = Plan.create(name: "Carnival", description: "Held every year before lent. One of the biggest carnivals in the world.", location: "Rio de Janeiro", date: "02/13/22", start_time: "1:00 pm", duration: 8, cost: 0, trip: trip4)

puts "Seeding users"
user1 = User.create(first_name: "Erica", last_name: "Rojo", email: "ericarojo@gmail.com", password: "123", password_confirmation: "123")

user2 = User.create(first_name: "Natalie", last_name: "Barba", email: "nataliebarba@gmail.com", password: "123", password_confirmation: "123")

user3 = User.create(first_name: "Nicole", last_name: "Materosian", email: "nicolematerosian@gmail.com", password: "123", password_confirmation: "123")

user4 = User.create(first_name: "Gabe", last_name: "Rodriguez", email: "gaberodriguez@gmail.com", password: "123", password_confirmation: "123")

puts "Seeding user trips"
usertrip1 = UserTrip.create(trip: trip1, user: user1, method_of_transportation: "Air", transportation_cost: 500, commentary: "Love the night life", stay: "Airbnb", stay_cost: 300)

usertrip2 = UserTrip.create(trip: trip2, user: user2, method_of_transportation: "Air", transportation_cost: 600, commentary: "Very relaxing", stay: "Hotel", stay_cost: 900)

usertrip3 = UserTrip.create(trip: trip3, user: user3, method_of_transportation: "Bus", transportation_cost: 10, commentary: "Feels like a different planet", stay: "Airbnb", stay_cost: 300)

usertrip4 = UserTrip.create(trip: trip4, user: user4, method_of_transportation: "Train", transportation_cost: 70, commentary: "Best party of my life", stay: "Stay with a friend", stay_cost: 300)

puts "Seeding user trips"
userplan1 = UserPlan.create(user: user1, plan: plan1)
userplan2 = UserPlan.create(user: user2, plan: plan2)
userplan3 = UserPlan.create(user: user3, plan: plan3)
userplan4 = UserPlan.create(user: user4, plan: plan4)