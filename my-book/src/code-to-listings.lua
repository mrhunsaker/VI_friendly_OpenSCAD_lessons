-- code-to-listings.lua
-- Pandoc Lua filter: replace fenced code blocks with \begin{lstlisting}...\end{lstlisting}
-- Always applies style=Alabaster and maps the fenced language to the correct listings language.

-- Map fenced code block language identifiers to listings language names.
-- Languages defined in template.tex: openscad, powershell, cmd (alias: batch), json.
-- Anything NOT in this table → no language= key (safe fallback, Alabaster style still applied).
local LANGUAGE_MAP = {
  -- OpenSCAD
  openscad   = "openscad",
  scad       = "openscad",
  -- Shell / scripting
  bash       = "bash",
  sh         = "bash",
  shell      = "bash",
  zsh        = "bash",
  -- PowerShell
  powershell = "powershell",
  ps1        = "powershell",
  -- Windows CMD / Batch
  batch      = "cmd",
  cmd        = "cmd",
  bat        = "cmd",
  doscon     = "cmd",
  -- JSON
  json       = "json",
  -- Python (listings built-in)
  python     = "Python",
  py         = "Python",
  -- C / C++
  c          = "C",
  cpp        = "C++",
  ["c++"]    = "C++",
  -- Java
  java       = "Java",
  -- JavaScript (no native JS in listings; Java lexer is close enough)
  javascript = "Java",
  js         = "Java",
  -- HTML / XML
  html       = "HTML",
  xml        = "XML",
  -- Explicit no-language identifiers
  text       = "",
  plain      = "",
  txt        = "",
  plaintext  = "",
  none       = "",
  default    = "",
  [""]       = "",
}

-- Protect against \end{lstlisting} appearing inside a code block.
local function escape_lstlisting(code)
  return code:gsub("\\end%s*{lstlisting}", "\\end {lstlisting}")
end

function CodeBlock(el)
  -- Get the first class as the language hint (lowercased).
  local lang_id = ""
  if el.classes and #el.classes > 0 then
    lang_id = el.classes[1]:lower()
  end

  -- Look up the listings language.
  -- If the key exists in the map, use its value (may be "").
  -- If the key is NOT in the map (unknown language), default to "" for safety.
  local listings_lang
  if LANGUAGE_MAP[lang_id] ~= nil then
    listings_lang = LANGUAGE_MAP[lang_id]
  else
    -- Unknown identifier: suppress rather than pass through to avoid
    -- "Couldn't load requested language" errors from listings.
    listings_lang = ""
  end

  -- Build the options string.
  local options = "style=Alabaster"
  if listings_lang ~= "" then
    options = options .. ", language=" .. listings_lang
  end

  -- Carry optional caption/label from block attributes.
  if el.attributes and el.attributes.caption then
    options = options .. ", caption={" .. el.attributes.caption .. "}"
  end
  if el.attributes and el.attributes.label then
    options = options .. ", label={" .. el.attributes.label .. "}"
  end

  local code = escape_lstlisting(el.text)

  local latex = "\\begin{lstlisting}[" .. options .. "]\n"
    .. code
    .. "\n\\end{lstlisting}"

  return pandoc.RawBlock("latex", latex)
end