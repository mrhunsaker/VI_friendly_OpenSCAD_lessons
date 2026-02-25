-- pandoc-codeblock.lua
-- Lua filter: convert fenced code blocks into raw LaTeX lstlisting
-- with language set to the fenced language and style=Alabaster.

local function escape_end_listing(s)
  -- avoid accidental end{lstlisting} in source by closing with a marker
  -- unlikely in code; replace the sequence if present
  return s:gsub("\\end%{lstlisting%}", "\\end{lstlisting}%")
end

function CodeBlock(el)
  local lang = ""
  if el.classes and #el.classes > 0 then
    lang = el.classes[1]
  end

  -- build lstlisting options: include language if present, always include style=Alabaster
  local opts = {}
  if lang ~= "" then
    table.insert(opts, "language=" .. lang)
  end
  table.insert(opts, "style=Alabaster")
  local optstr = table.concat(opts, ",")

  local content = el.text
  content = escape_end_listing(content)

  local latex = "\\begin{lstlisting}[" .. optstr .. "]\n" .. content .. "\n\\end{lstlisting}\n"
  return pandoc.RawBlock('latex', latex)
end

return { { CodeBlock = CodeBlock } }
