class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :desc
      t.integer :item_type

      t.timestamps
    end
  end
end
