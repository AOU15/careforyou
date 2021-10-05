class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :specialty
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
