class Api::V1::CategoriesController < ApiController

  def index
    categories = JAPI::Trebek.categories(options = {count: 4, offset: rand(10000)})
    
    clues = [] 
    categories.each do |category|
      clues << category.clues
    end

    render json: {
      categories: categories,
      clues: clues
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
    # category0 = JAPI::Trebek.category(categories[0].id)
    # category1 = JAPI::Trebek.category(categories[1].id)
    # category2 = JAPI::Trebek.category(categories[2].id)
    # category3 = JAPI::Trebek.category(categories[3].id)