# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = 'jekyll-theme-atlas-gr'
  s.version       = '0.1.0'
  s.license       = 'MIT'
  s.authors       = ['StudioTo']
  s.homepage      = 'https://github.com/StudioTo/atlas-gr'
  s.summary       = 'Atlas-GR is a custom Jekyll theme forked from Eracom Atlas'

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform = Gem::Platform::RUBY
  s.add_runtime_dependency 'jekyll', '> 3.5', '< 5.0'
end