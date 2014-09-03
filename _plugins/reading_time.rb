# --------------------------------------------------------------------
#
# Plugin:       Read Time
# Description:  Outputs the reading time
# Author:       zahcleat - https://gist.github.com/zachleat/5792681
#
# Instal:       Put into your _plugins dir in your Jekyll site
# Usage:        Read this in about {{ page.content | reading_time }}
# Example:      Read this in “about 4 minutes”
#
# --------------------------------------------------------------------


module ReadingTimeFilter
    def reading_time( input )
        words_per_minute = 180

        words = input.split.size;
        minutes = ( words / words_per_minute ).floor
        minutes_label = minutes === 1 ? " minuto" : " minutos"
        minutes > 0 ? "Leia em: #{minutes} #{minutes_label}" : "menos de 1 minutos"
    end
end

Liquid::Template.register_filter(ReadingTimeFilter)
