-- pandoc Lua filter: replace <!--pagebreak--> with backend-specific page breaks
-- Place this file next to your other pandoc sources and include with --lua-filter=pagebreak.lua

local function pagebreak_block()
  if FORMAT:match('latex') or FORMAT:match('pdf') then
    return pandoc.RawBlock('latex', '\\clearpage')
  elseif FORMAT:match('html') then
    return pandoc.RawBlock('html', '<div style="page-break-after: always;"></div>')
  elseif FORMAT:match('docx') then
    -- openxml page break for docx output
    return pandoc.RawBlock('openxml', '<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
  else
    return pandoc.RawBlock('latex', '\\clearpage')
  end
end

function RawBlock(el)
  if el.format == 'html' and el.text:match('<!--%s*pagebreak%s*-->') then
    return pagebreak_block()
  end
end

function RawInline(el)
  if el.format == 'html' and el.text:match('<!--%s*pagebreak%s*-->') then
    -- return a block-level break instead of inline
    return pagebreak_block()
  end
end

function Para(el)
  -- some markdown parsers may leave the comment as a Str inside a Para
  if #el.content == 1 then
    local c = el.content[1]
    if c.t == 'Str' and c.text:match('^%s*<!--%s*pagebreak%s*-->%s*$') then
      return pagebreak_block()
    end
  end
end

return {
  { RawBlock = RawBlock },
  { RawInline = RawInline },
  { Para = Para }
}
