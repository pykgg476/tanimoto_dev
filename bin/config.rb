Encoding.default_external = 'UTF-8'

http_path = "/"
css_dir = "common/css"
sass_dir = "common/scss"
images_dir = "imageFile"
javascript_dir = "common/js"
output_style = :compressed
# line_comments = false

on_sprite_saved do |filename|
  if File.exists?(filename)
    FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
  end
end

on_stylesheet_saved do |filename|
  if File.exists?(filename)
    css = File.read filename
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
    end
  end
end
