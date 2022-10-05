import{_ as s,r,o as l,c as a,f as i,a as e,b as o,d as t,e as h}from"./app.4626778d.js";const d="/assets/0_36_tutor.1568fd1c.png",c={},u=e("h1",{id:"nushell-0-36",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-36","aria-hidden":"true"},"#"),t(" Nushell 0.36")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.36 of Nu. This release fixes some long-standing issues with history, improves the help system, improves dataframes, and much more.",-1),f=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),m=t("Nu 0.36 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.36.0",target:"_blank",rel:"noopener noreferrer"},b=t("pre-built binaries"),w=t(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=t("crates.io"),x=t(". If you have Rust installed you can install it using "),v=e("code",null,"cargo install nu",-1),N=t("."),j=h(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="help-now-has-search-fdncred" tabindex="-1"><a class="header-anchor" href="#help-now-has-search-fdncred" aria-hidden="true">#</a> Help now has search (fdncred)</h2><p>You can now use <code>help -f &lt;term&gt;</code> and search the help for text. This can come in handy if you know roughly what you want but can&#39;t remember the name of the command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; help -f string
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502           name           \u2502                     usage                      \u2502 extra_usage
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 ansi strip               \u2502 strip ansi escape sequences from string        \u2502
  1 \u2502 build-string             \u2502 Builds a string from the arguments.            \u2502
  2 \u2502 dataframe concatenate    \u2502 [Series] Concatenates strings with other array \u2502
  3 \u2502 dataframe contains       \u2502 [Series] Checks if a pattern is contained in a \u2502
    \u2502                          \u2502 string                                         \u2502
  4 \u2502 dataframe replace        \u2502 [Series] Replace the leftmost (sub)string by a \u2502
    \u2502                          \u2502 regex pattern                                  \u2502
...
</code></pre></div><h2 id="built-in-tutor-jt" tabindex="-1"><a class="header-anchor" href="#built-in-tutor-jt" aria-hidden="true">#</a> Built-in tutor (jt)</h2><p>In addition to the new help search, we&#39;ve also started to build out a built-in Nushell tutorial. You can navigate by topic or search the help text for a string.</p><p><img src="`+d+'" alt="Screenshot showing the tutor command running &#39;tutor table&#39;"></p><p>We&#39;ve only added a few topics so far, but we hope to grow these topics (with your help) over the coming releases.</p><h2 id="new-commands-and-features" tabindex="-1"><a class="header-anchor" href="#new-commands-and-features" aria-hidden="true">#</a> New commands and features</h2>',11),I={href:"https://github.com/nushell/nushell/pull/3917",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"drop nth",-1),B=t(" - drops the given rows (andrasio)"),R={href:"https://github.com/nushell/nushell/pull/3918",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"PROMPT_STRING",-1),V=t(" environment variable"),C=t(" - configures the script to run to create the prompt directly from the environment (elferherrera)"),E={href:"https://github.com/nushell/nushell/pull/3919",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"zip",-1),q=t(" - combine two lists into one list of pairs (andrasio)"),z=e("h2",{id:"dataframe-improvements-elferherrera",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dataframe-improvements-elferherrera","aria-hidden":"true"},"#"),t(" Dataframe improvements (elferherrera)")],-1),A={href:"https://github.com/nushell/nushell/pull/3894",target:"_blank",rel:"noopener noreferrer"},D=t("datetime commands"),L={href:"https://github.com/nushell/nushell/pull/3907",target:"_blank",rel:"noopener noreferrer"},P=t("describe command"),Y={href:"https://github.com/nushell/nushell/pull/3960",target:"_blank",rel:"noopener noreferrer"},G=t("rolling and cumulative commands"),H=e("h2",{id:"important-bugfixes-lily-mara-gwenn-jt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#important-bugfixes-lily-mara-gwenn-jt","aria-hidden":"true"},"#"),t(" Important bugfixes (lily-mara, gwenn, jt)")],-1),M=t("A long-standing issue with history getting garbled when you have multiple shells open sending history updates is hopefully "),O={href:"https://github.com/kkawakam/rustyline/pull/560",target:"_blank",rel:"noopener noreferrer"},F=t("now fixed"),J=t(". Thanks to the rustyline maintainers for helping find the root cause and creating a fix for it."),K=e("h2",{id:"additional-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),t(" Additional improvements")],-1),Q=t("waldyrious fixed "),U={href:"https://github.com/nushell/nushell/pull/3890",target:"_blank",rel:"noopener noreferrer"},X=t("a typo"),Z=t(", and fixed "),$={href:"https://github.com/nushell/nushell/pull/3891",target:"_blank",rel:"noopener noreferrer"},ee=t("issue templates"),te=t("fdncred started a list of "),ne={href:"https://github.com/nushell/nushell/pull/3895",target:"_blank",rel:"noopener noreferrer"},oe=t("projects that officially support Nushell"),se=t("RealCundo added "),re={href:"https://github.com/nushell/nushell/pull/3888",target:"_blank",rel:"noopener noreferrer"},le=t("PartialEq to ReturnValue"),ae=t("hedonihilist improved "),ie={href:"https://github.com/nushell/nushell/pull/3902",target:"_blank",rel:"noopener noreferrer"},he=t("how DirInfo calculates directory size"),de=t("soumil-07 "),ce={href:"https://github.com/nushell/nushell/pull/3905",target:"_blank",rel:"noopener noreferrer"},ue=t("worked around a BigDecimal issue that broke "),_e=e("code",null,"math floor",-1),pe=t("jt added "),fe={href:"https://github.com/nushell/nushell/pull/3906",target:"_blank",rel:"noopener noreferrer"},me=e("code",null,"in",-1),ge=t(" and "),be=e("code",null,"not-in",-1),we=t(" for strings"),ye=t(", changed the "),ke={href:"https://github.com/nushell/nushell/pull/3924",target:"_blank",rel:"noopener noreferrer"},xe=t("release build to focus on binary size"),ve=t("baoyachi "),Ne={href:"https://github.com/nushell/nushell/pull/3914",target:"_blank",rel:"noopener noreferrer"},je=t("updated shadow-rs, which fixes some datetime issues and more"),Ie=t("knottio added "),Te={href:"https://github.com/nushell/nushell/pull/3921",target:"_blank",rel:"noopener noreferrer"},Be=t("trailing slash when completing symlinked directory"),Re=t("fdncred fixed "),Se={href:"https://github.com/nushell/nushell/pull/3923",target:"_blank",rel:"noopener noreferrer"},Ve=e("code",null,"fetch",-1),Ce=t(" to better follow redirects"),Ee=t(", and improved the "),We={href:"https://github.com/nushell/nushell/pull/3962",target:"_blank",rel:"noopener noreferrer"},qe=t("issue template"),ze=t("filaretov fixed "),Ae={href:"https://github.com/nushell/nushell/pull/3936",target:"_blank",rel:"noopener noreferrer"},De=t("unaliasing to only affect the current scope"),Le=t("kubouch fixed "),Pe={href:"https://github.com/nushell/nushell/pull/3939",target:"_blank",rel:"noopener noreferrer"},Ye=t("an issue where "),Ge=e("code",null,"source",-1),He=t(" couldn't handle paths with emojis"),Me=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Oe=t("The ability to search help and improve a built-in tutorial gives us a lot of opportunties to make Nushell more user-friendly, especially to users who are just getting started learning what Nushell can do. If you're interested, these are some good places to "),Fe={href:"https://github.com/nushell/nushell/blob/main/crates/nu-command/src/commands/core_commands/tutor.rs",target:"_blank",rel:"noopener noreferrer"},Je=t("jump in and help"),Ke=t(" if you have specific topics or areas of interest."),Qe=e("p",null,"The projects we reported on last time, engine-q and reedline, are steadily improving. We're currently working through any remaining issues so that we can begin experimenting with integrating them into Nushell.",-1);function Ue(Xe,Ze){const n=r("ExternalLinkIcon");return l(),a("div",null,[u,_,p,i(" more "),f,e("p",null,[m,e("a",g,[b,o(n)]),w,e("a",y,[k,o(n)]),x,v,N]),j,e("ul",null,[e("li",null,[e("a",I,[T,o(n)]),B]),e("li",null,[e("a",R,[S,V,o(n)]),C]),e("li",null,[e("a",E,[W,o(n)]),q])]),z,e("ul",null,[e("li",null,[e("a",A,[D,o(n)])]),e("li",null,[e("a",L,[P,o(n)])]),e("li",null,[e("a",Y,[G,o(n)])])]),H,e("p",null,[M,e("a",O,[F,o(n)]),J]),K,e("ul",null,[e("li",null,[Q,e("a",U,[X,o(n)]),Z,e("a",$,[ee,o(n)])]),e("li",null,[te,e("a",ne,[oe,o(n)])]),e("li",null,[se,e("a",re,[le,o(n)])]),e("li",null,[ae,e("a",ie,[he,o(n)])]),e("li",null,[de,e("a",ce,[ue,_e,o(n)])]),e("li",null,[pe,e("a",fe,[me,ge,be,we,o(n)]),ye,e("a",ke,[xe,o(n)])]),e("li",null,[ve,e("a",Ne,[je,o(n)])]),e("li",null,[Ie,e("a",Te,[Be,o(n)])]),e("li",null,[Re,e("a",Se,[Ve,Ce,o(n)]),Ee,e("a",We,[qe,o(n)])]),e("li",null,[ze,e("a",Ae,[De,o(n)])]),e("li",null,[Le,e("a",Pe,[Ye,Ge,He,o(n)])])]),Me,e("p",null,[Oe,e("a",Fe,[Je,o(n)]),Ke]),Qe])}const et=s(c,[["render",Ue],["__file","2021-08-24-nushell_0_36.html.vue"]]);export{et as default};
