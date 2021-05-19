(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{658:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"required-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-methods"}},[t._v("#")]),t._v(" Required Methods")]),t._v(" "),s("h2",{attrs:{id:"getmangadetails"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getmangadetails"}},[t._v("#")]),t._v(" getMangaDetails")]),t._v(" "),s("h3",{attrs:{id:"method-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-signature"}},[t._v("#")]),t._v(" Method signature")]),t._v(" "),s("p",[s("code",[t._v("async getMangaDetails(mangaId: string): Promise<Manga>")])]),t._v(" "),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("mangaId")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The ID of a manga. The manga ID is provided from the other discovery functions, such as the home page and performed searches. The manga ID should be used to return information about the manga, such as the title and author.")])])])]),t._v(" "),s("h3",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[t._v("Given an ID, this async function should return a filled out "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#manga"}},[t._v("Manga")]),t._v(" object.")],1),t._v(" "),s("h3",{attrs:{id:"example-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation"}},[t._v("#")]),t._v(" Example Implementation")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMangaDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Manga"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a request object which when executed, will yield a HTML page containing the data needed to fill out a Manga object")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequestObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://yourwebsite.com/manga/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Execute the request, and retrieve the HTML page\n    this.requestManager is provided to you by the parent class. Always use this to make requests.\n    The second parameter is the number of retries the app is allowed to make, if the request fails the first time.\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare to parse the page using CheerioJS (Class object included by parent class)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cheerio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -- Parse all of the information here --")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ALWAYS use the createManga({ }) wrapper when returning")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createManga")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mangaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        titles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// etc")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"getchapters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchapters"}},[t._v("#")]),t._v(" getChapters")]),t._v(" "),s("h3",{attrs:{id:"method-signature-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-signature-2"}},[t._v("#")]),t._v(" Method signature")]),t._v(" "),s("p",[s("code",[t._v("async getChapters(mangaId: string): Promise<Chapter[]>")])]),t._v(" "),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("mangaId")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The ID of a manga. The manga ID is provided from the other discovery functions, such as the home page and performed searches. The manga ID should be used to return information about the manga, such as the title and author.")])])])]),t._v(" "),s("h3",{attrs:{id:"returns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[t._v("Given an ID, this async function should return an array of "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#chapter"}},[t._v("Chapter")]),t._v(" objects.")],1),t._v(" "),s("h3",{attrs:{id:"example-implementation-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation-2"}},[t._v("#")]),t._v(" Example Implementation")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChapters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Chapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a request object which when executed, will yield a HTML page containing the data needed to fill out a Manga object")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequestObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://yourwebsite.com/manga/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Execute the request, and retrieve the HTML page\n    this.requestManager is provided to you by the parent class. Always use this to make requests.\n    The second parameter is the number of retries the app is allowed to make, if the request fails the first time.\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare to parse the page using CheerioJS (Class object included by parent class)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cheerio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare a storage location for all available chapters")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chapters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Chapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chances are, you're going to need to loop over some HTML element which each chapter identifier is displayed in")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someSelector'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse an individual chapter object's values here")]),t._v("\n\n        chapters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your manga chapter id here"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                mangaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mangaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// etc")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return a list of all of the chapters discovered")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" chapters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"getchapterdetails"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getchapterdetails"}},[t._v("#")]),t._v(" getChapterDetails")]),t._v(" "),s("h3",{attrs:{id:"method-signature-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-signature-3"}},[t._v("#")]),t._v(" Method Signature")]),t._v(" "),s("p",[s("code",[t._v("async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails>")])]),t._v(" "),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("mangaId")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The ID of a manga. The manga ID is provided from the other discovery functions, such as the home page and performed searches. The manga ID should be used to return information about the manga, such as the title and author.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("chapterId")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The ID of a chapter. defined by the "),s("a",{attrs:{href:"#getchapters"}},[t._v("Get Chapters")]),t._v(" method. The chapter ID can only contain letters, numbers, dashes and underscores.")])])])]),t._v(" "),s("h3",{attrs:{id:"returns-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[t._v("Given both a Manga and a Chapter ID, this function should populate a "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#chapterdetails"}},[t._v("ChapterDetails")]),t._v("\nobject.")],1),t._v(" "),s("h3",{attrs:{id:"example-implementation-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation-3"}},[t._v("#")]),t._v(" Example Implementation")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChapterDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chapterId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ChapterDetails"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a request object which when executed, will yield a HTML page containing the data needed to fill out a Manga object")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequestObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://yourwebsite.com/manga/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mangaId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("chapterId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Execute the request, and retrieve the HTML page\n    this.requestManager is provided to you by the parent class. Always use this to make requests.\n    The second parameter is the number of retries the app is allowed to make, if the request fails the first time.\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare to parse the page using CheerioJS (Class object included by parent class)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cheerio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -- Parse all of the information here --")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ALWAYS use the createChapterDetails({ }) wrapper when returning")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChapterDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chapterId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mangaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mangaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        longstrip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An array of strings, each being a URL to a page. See the typings for more information.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"searchrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchrequest"}},[t._v("#")]),t._v(" searchRequest")]),t._v(" "),s("h3",{attrs:{id:"method-signature-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-signature-4"}},[t._v("#")]),t._v(" Method signature")]),t._v(" "),s("p",[s("code",[t._v("async searchRequest(query: SearchRequest, metadata: any): Promise<PagedResults>")])]),t._v(" "),s("h3",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("query")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#searchrequest"}},[t._v("SearchRequest")])],1),t._v(" "),s("td",[t._v("The object representing the search. View the fields of the "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#searchrequest"}},[t._v("SearchRequest")]),t._v(" object to find out what a search can contain.")],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("metadata")])]),t._v(" "),s("td",[t._v("any")]),t._v(" "),s("td",[t._v("Metadata carried through function calls. View the "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/metadata/"}},[t._v("metadata page")]),t._v(" to learn more about how the parameter works.")],1)])])]),t._v(" "),s("h3",{attrs:{id:"returns-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[t._v("A "),s("RouterLink",{attrs:{to:"/help/contribution/extension-development/model-reference/#pagedresults"}},[t._v("PagedResults")]),t._v(" object with the results of the search for the current page, and metadata for the next page, if it exists.")],1),t._v(" "),s("h3",{attrs:{id:"example-implementation-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation-4"}},[t._v("#")]),t._v(" Example Implementation")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("searchRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("SearchRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PagedResults"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the current page the function is on")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" metadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If there is no current page, this must mean this is the first page.")]),t._v("\n\t\tpage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequestObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\turl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://mysite.com/search/?query=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("&page=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmethod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\tExecute the request, and retrieve the HTML page\n\tthis.requestManager is provided to you by the parent class. Always use this to make requests.\n\tThe second parameter is the number of retries the app is allowed to make, if the request fails the first time.\n\t*/")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare to parse the page using CheerioJS (The cheerio object is provided by the base class this extends)")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cheerio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This will contain the manga tiles that we found")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MangaTile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someSelector'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse the details in a MangaTile")]),t._v("\n\n\t\ttiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createMangaTile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mangaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\timage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" imageUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIconText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttext"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mangaTitle\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tpage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" createPagedResults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tresults"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmetadata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tpage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" page\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"optional-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-methods"}},[t._v("#")]),t._v(" Optional Methods")]),t._v(" "),s("p",[t._v("To be filled out")])])}),[],!1,null,null,null);a.default=n.exports}}]);