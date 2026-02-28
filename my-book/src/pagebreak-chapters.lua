-- pagebreak-chapters.lua
-- Inserts page breaks before sections, adapting to output format.
-- For LaTeX: \cleardoublepage (major lessons) or \newpage (others)
-- For EPUB:  CSS page-break div (all sections)

local lesson_patterns = {
  -- PowerShell lessons: PS-0, PS-Pre, PS-1 ... PS-6
  "^PS%-%d",
  "^PS%-Pre",
  "^PS%-Unit",
  -- CMD lessons
  "^CMD%-%d",
  "^CMD%-Pre",
  "^CMD%-Unit",
  -- GitBash lessons
  "^GitBash%-%d",
  "^GitBash%-Pre",
  "^GitBash%-Unit",
  -- 3dMake lessons
  "^Lessons_3dMake_%d",
  "^3dMake_Final",
  -- Setup sections
  "^Setup",
}

local function is_major_lesson(title)
  for _, pat in ipairs(lesson_patterns) do
    if title:match(pat) then
      return true
    end
  end
  return false
end

local function pagebreak(is_major)
  local fmt = FORMAT or ""

  if fmt:match("latex") then
    -- LaTeX: cleardoublepage for major lessons, newpage for everything else
    local cmd = is_major and "\\cleardoublepage" or "\\newpage"
    return pandoc.RawBlock("latex", cmd)

  elseif fmt:match("epub") or fmt:match("html") then
    -- EPUB/HTML: use both the EPUB spine page-break attribute and a CSS break.
    -- The <mbp:pagebreak> tag is recognized by Kindle; the div with
    -- page-break-after is the standard CSS approach used by most EPUB readers.
    if is_major then
      -- Major lesson: hard chapter break with extra top margin to visually
      -- distinguish it from a simple page turn.
      return pandoc.RawBlock("html", table.concat({
        '<div epub:type="chapter" style="',
          "page-break-before: always;",
          "break-before: page;",
          "margin-top: 4em;",
        '"></div>',
      }))
    else
      -- Regular section: plain page break, no extra margin.
      return pandoc.RawBlock("html", table.concat({
        '<div style="',
          "page-break-before: always;",
          "break-before: page;",
        '"></div>',
      }))
    end

  else
    -- Fallback for any other format pandoc might target (e.g. docx):
    -- use pandoc's native HorizontalRule which many writers map to a page break,
    -- or return nil to insert nothing.
    return nil
  end
end

local first_header = true  -- skip inserting before the very first section

function Header(el)
  if el.level == 1 then
    local title = pandoc.utils.stringify(el)

    if first_header then
      first_header = false
      return el
    end

    local major = is_major_lesson(title)
    local break_block = pagebreak(major)

    if break_block then
      return { break_block, el }
    else
      return el
    end
  end
end