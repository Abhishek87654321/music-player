class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :genre
      t.string :duration
      t.string :file_path

      t.timestamps
    end
  end
end
