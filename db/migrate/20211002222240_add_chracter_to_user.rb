class AddChracterToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :character_id, :integer, foreign_key: true
  end
end
