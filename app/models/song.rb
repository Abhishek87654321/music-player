# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  duration   :string
#  file_path  :string
#  genre      :string
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    # after_commit :ensure_file_path_has_a_value
    has_one_attached :audio_file
    has_many :albums
    has_many :artists, through: :albums

   
     
end
