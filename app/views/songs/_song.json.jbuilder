json.extract! song, :id, :title, :genre, :duration, :file_path, :created_at, :updated_at
json.url song_url(song, format: :json)
