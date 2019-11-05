class CreateAssignedCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :assigned_categories do |t|
      t.belongs_to :game
      t.belongs_to :category
      t.timestamps
    end
  end
end
