function Span(el)
  if el.classes:includes('index') then
    if FORMAT == "latex" then
      -- For PDF: Keep text + add LaTeX index command
      local term = pandoc.utils.stringify(el.content)
      return { el, pandoc.RawInline('latex', '\\index{' .. term .. '}') }
    else
      -- For HTML/EPUB: Just return the text (clean, no raw code)
      return el
    end
  end
end