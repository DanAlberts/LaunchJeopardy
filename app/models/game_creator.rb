class GameCreator
  attr_reader :categories, :selections, :game, :score

  def initialize(user)
    @user = user
    
    @game = Game.create
    @categories = []
    @selections = []
    @score = 0
  end
  
  def generate_new_game
    create_game_session
    jservice_request
    # binding.pry
    create_categories
    create_selections_for_game
  end

  private

  def create_game_session
    GameSession.create(user: @user, game: @game, score: @score)
  end

  def create_selections_for_game
    @game.categories = @categories

    @categories.each do |category|
      category.clues.each do |clue| 
        # binding.pry
        @selections << Selection.create(game: @game, clue: clue, answer_status: false)
      end 
    end

    return @selections
  end 

  def create_categories 
    @categories_json.each do |category_data|
      category = Category.new
      category.title = category_data.title
      clues = []
# binding.pry
      category_data.clues.each_with_index do |clue, index|
        newClue = Clue.new
        newClue.question = clue.question
        newClue.answer = clue.answer

        newClue.value = determine_clue_rank(index)

        clues << newClue
      end

      category.clues = clues

      category.save!
      @categories << category
    end
    return @categories
  end

  def jservice_request
    @categories_json ||= JAPI::Trebek.categories(options = {count: 4, offset: rand(10000)})
    # binding.pry
  end

  def determine_clue_rank(index)
    if index == 0
      return 100
    elsif index == 1
      return 200
    elsif index == 2
      return 300
    elsif index == 3
      return 400
    elsif index == 4
      return 500
    elsif index == 5
      return 100
    elsif index == 6
      return 200
    elsif index == 7
      return 300
    elsif index == 8
      return 400
    elsif index == 9
      return 500
    elsif index == 10
      return 100
    elsif index == 11
      return 200
    elsif index == 12
      return 300
    elsif index == 13
      return 400
    else
      return 500
    end
  end
end

