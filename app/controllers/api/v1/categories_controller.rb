class Api::V1::CategoriesController < ApiController

  def index
    created_game = GameCreator.new
    created_game.generate_new_game
binding.pry
    render json: {
      categories: gCategories.last(4)
    }
  end

  # def categories_response(categories_data_array)
  #   categories_with_clues = []

  #   categories_data_array.each do |category|
  #     categories_with_clues << JAPI::Trebek.category(category)
  #   end

  #   # do I need to clean up the categories_with_clues array, or is it ready to be returend to the frontend

  #     # categories_with_clues
  # end

  # def parsed_category(category_with_clues)

  #   cleaned_category = {
  #     category: { 
  #       title: categories_with_clues.title,
  #       clues: categories_with_clues.questions
  #     }
  #   }
  # end
end
