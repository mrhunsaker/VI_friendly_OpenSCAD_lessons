
(function() {
  function jawsLang(hljs) {

    const BASE_KEYWORDS = [
      "endIf","while","Variant","endWhile","let","elIf","handle","object","int",
      "string","obj","var","void","return","if","collection","not","then","globals",
      "const","true","false","on","off","script","endScript","function",
      "endFunction","messages","endMessages","Include","Import","To","Descending",
      "ForEach","EndForEach","For","EndFor","New","IntArRAY","StringArray",
      "HandleArrya","ObjectArray","VariantArray","Use","Import","StringCOmparison",
      "Prototype","ScriptFile","ScriptFileVersion"
    ];

    const MSG_KEYWORDS = [
      "@msg", "@MSGCustomHotkeyHelp", "@msgFSHeadquarters", "@msgFSPhoneNumbers",
      "@msgFSPhoneNumberHelp", "@msgFSWebsites", "@msgFSWebsiteHelp", "@msgFSForum",
      "@msgFSForumHelp", "@msgFSFAQ", "@msgFSFAQHelp", "@msgFSContactUs",
      "@msgFSContactUsHelp", "@msgFSJawsHelp", "@msgFSJawsHelpHelp",
      "@msgFSJawsTutorials", "@msgFSJawsTutorialsHelp", "@msgFSJawsTrainingVideos",
      "@msgFSJawsTrainingVideosHelp", "@msgcustomhotkeyhelp", "@msgfsheadquarters",
      "@msgfsphonenumbers", "@msghello", "@msghotkeyhelp", "@msglinenumberprefix",
      "@msgmyname", "@msgmyworkplace", "@msgname", "@msgnoname", "@msgoneword",
      "@msgtest", "@msgtest2", "@msgtext_l", "@msgtext_s", "@msgvirtualviewer",
      "@msgwords"
    ];

    const KEYWORDS = {
      keyword: BASE_KEYWORDS.join(" "),
      literal: "true false on off"
    };

    const ATMSG = {
      className: "variable",
      begin: /@{1,2}[A-Za-z_][A-Za-z0-9_]*/
    };

    return {
      name: "JAWSScript",
      case_insensitive: true,
      keywords: KEYWORDS,
      contains: [
        hljs.COMMENT(/;/, /$/),
        { className: "string", variants: [
          { begin: /"/, end: /"/ },
          { begin: /'/, end: /'/ }
        ]},
        hljs.NUMBER_MODE,
        ATMSG
      ]
    };
  }

  // Export into mdBook global namespace:
  window.hljsJaws = jawsLang;
})();
