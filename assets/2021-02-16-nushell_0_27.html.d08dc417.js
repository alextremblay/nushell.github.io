import{_ as s,r as l,o as r,c as h,f as a,a as e,b as o,d as t,e as i}from"./app.4626778d.js";const d={},_=e("h1",{id:"nushell-0-27",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-27","aria-hidden":"true"},"#"),t(" Nushell 0.27")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.27 of Nu. This release fixes some long-standing issues with Nushell.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.27 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.27.0",target:"_blank",rel:"noopener noreferrer"},m=t("pre-built binaries"),b=t(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=t("crates.io"),y=t(". If you have Rust installed you can install it using "),v=e("code",null,"cargo install nu",-1),x=t("."),N=i('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="book-updates-fdncred-jonathandturner" tabindex="-1"><a class="header-anchor" href="#book-updates-fdncred-jonathandturner" aria-hidden="true">#</a> Book updates (fdncred, jonathandturner)</h2><p>The Nushell book received some much-needed updates. You&#39;ll notice new chapters and updated chapters to bring it more up-to-date with recent Nushell.</p>',5),A={href:"https://www.nushell.sh/book/configuration.html",target:"_blank",rel:"noopener noreferrer"},T=t("Thoroughly updated configuration section"),j={href:"https://www.nushell.sh/book/types_of_data.html",target:"_blank",rel:"noopener noreferrer"},E=t("Updated section on data types"),z={href:"https://www.nushell.sh/book/custom_commands.html",target:"_blank",rel:"noopener noreferrer"},I=t("A new section on creating your own commands"),B={href:"https://www.nushell.sh/book/aliases.html",target:"_blank",rel:"noopener noreferrer"},W=t("An updated section on aliases"),M={href:"https://www.nushell.sh/book/variables_and_subexpressions.html",target:"_blank",rel:"noopener noreferrer"},R=t("A new section on working with variables and expressions"),S={href:"https://www.nushell.sh/book/scripts.html",target:"_blank",rel:"noopener noreferrer"},V=t("The start of a new section on writing your own Nushell scripts"),L=e("h1",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),D=e("h2",{id:"new-commands-fdncred",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands-fdncred","aria-hidden":"true"},"#"),t(" New commands (fdncred)")],-1),P=t("A new "),Y=e("code",null,"term size",-1),q=t(" commands "),C={href:"https://github.com/nushell/nushell/pull/3038",target:"_blank",rel:"noopener noreferrer"},F=t("lets you get the current size of the terminal"),K=t("New "),Q={href:"https://github.com/nushell/nushell/pull/2976",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"pow",-1),$=t(" operator"),G=t("New "),H={href:"https://github.com/nushell/nushell/pull/2975",target:"_blank",rel:"noopener noreferrer"},J=t("modulus("),O=e("code",null,"%",-1),X=t(") operator"),Z=e("h2",{id:"functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve-fdncred-ammkrn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve-fdncred-ammkrn","aria-hidden":"true"},"#"),t(" Functionality (jonathandturner, WatsonThink, ilius, andrasio, Qwanve, fdncred, ammkrn)")],-1),ee=t("Tables now "),te={href:"https://github.com/nushell/nushell/pull/3061",target:"_blank",rel:"noopener noreferrer"},ne=t("truncate instead of crashing when too large"),oe=e("code",null,"source",-1),se=t(" command now can "),le={href:"https://github.com/nushell/nushell/pull/3059",target:"_blank",rel:"noopener noreferrer"},re=t("use tilde in the path"),he=e("code",null,"let-env",-1),ae=t(" can now shadow "),ie={href:"https://github.com/nushell/nushell/pull/3057",target:"_blank",rel:"noopener noreferrer"},de=t("environment variables"),_e=t(" in addition to adding new ones"),ce=t("Prompts can now call "),ue={href:"https://github.com/nushell/nushell/pull/3056",target:"_blank",rel:"noopener noreferrer"},pe=t("external commands on initial startup"),fe=t("You can now configure the "),ge={href:"https://github.com/nushell/nushell/pull/3045",target:"_blank",rel:"noopener noreferrer"},me=t("file size standard to use"),be=t("Strings can now be passed in where "),we={href:"https://github.com/nushell/nushell/pull/3048",target:"_blank",rel:"noopener noreferrer"},ke=t("column-paths were expected"),ye=t(" and "),ve={href:"https://github.com/nushell/nushell/pull/3016",target:"_blank",rel:"noopener noreferrer"},xe=t("here"),Ne=t("More "),Ae={href:"https://github.com/nushell/nushell/pull/3035",target:"_blank",rel:"noopener noreferrer"},Te=t("file size types have been added"),je=e("code",null,"sort-by",-1),Ee=t(" can now "),ze={href:"https://github.com/nushell/nushell/pull/3025",target:"_blank",rel:"noopener noreferrer"},Ie=t("reverse sort"),Be=e("code",null,"which",-1),We=t(" can now take "),Me={href:"https://github.com/nushell/nushell/pull/3024",target:"_blank",rel:"noopener noreferrer"},Re=t("multiple applications"),Se=e("code",null,"ps -l",-1),Ve=t(" now has "),Le={href:"https://github.com/nushell/nushell/pull/3015",target:"_blank",rel:"noopener noreferrer"},De=t("a cleaner output when the parent is missing"),Pe=e("code",null,"select",-1),Ye=t(" can no longer "),qe={href:"https://github.com/nushell/nushell/pull/3012",target:"_blank",rel:"noopener noreferrer"},Ce=t("select the same column twice"),Fe=e("code",null,"to-md --per-element",-1),Ke=t(" now gives you "),Qe={href:"https://github.com/nushell/nushell/pull/2997",target:"_blank",rel:"noopener noreferrer"},Ue=t("more fine-grained control over the markdown output"),$e=t("A new "),Ge={href:"https://github.com/nushell/nushell/pull/2995",target:"_blank",rel:"noopener noreferrer"},He=e("code",null,"$nothing",-1),Je=t(" built-in variable to help check for the existence of a value"),Oe=e("code",null,"str from",-1),Xe=t(" can convert "),Ze={href:"https://github.com/nushell/nushell/pull/2977",target:"_blank",rel:"noopener noreferrer"},et=t("more things to strings"),tt=t("Booleans are now shown as "),nt={href:"https://github.com/nushell/nushell/pull/3043",target:"_blank",rel:"noopener noreferrer"},ot=t("true/false instead of Yes/No"),st=e("h2",{id:"internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner","aria-hidden":"true"},"#"),t(" Internal (stormasm, ilius, fdncred, LhKipp, RReverser, jonathandturner)")],-1),lt=t("Some "),rt={href:"https://github.com/nushell/nushell/pull/3053",target:"_blank",rel:"noopener noreferrer"},ht=t("comment parsing improvements"),at=t("The "),it=e("code",null,"block",-1),dt=t(" function is now "),_t={href:"https://github.com/nushell/nushell/pull/3047",target:"_blank",rel:"noopener noreferrer"},ct=e("code",null,"parse_block",-1),ut=t("More "),pt={href:"https://github.com/nushell/nushell/pull/3000",target:"_blank",rel:"noopener noreferrer"},ft=t("Value helpers were added"),gt={href:"https://github.com/nushell/nushell/pull/2986",target:"_blank",rel:"noopener noreferrer"},mt=t("Parser cleanup for handling "),bt=e("code",null,"def",-1),wt=t("The "),kt={href:"https://github.com/nushell/nushell/pull/2983",target:"_blank",rel:"noopener noreferrer"},yt=t("WASI build should now be working again"),vt=t("File size is "),xt={href:"https://github.com/nushell/nushell/pull/2984",target:"_blank",rel:"noopener noreferrer"},Nt=t("now a big int"),At=e("h2",{id:"documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra","aria-hidden":"true"},"#"),t(" Documentation (watzon, ahkrr, LhKipp, Andy-Python-Programmer, diogomafra)")],-1),Tt=t("Sample config has "),jt={href:"https://github.com/nushell/nushell/pull/3060",target:"_blank",rel:"noopener noreferrer"},Et=t("gotten an update"),zt=t(" and "),It={href:"https://github.com/nushell/nushell/pull/3031",target:"_blank",rel:"noopener noreferrer"},Bt=t("here"),Wt=t("Some "),Mt={href:"https://github.com/nushell/nushell/pull/3052",target:"_blank",rel:"noopener noreferrer"},Rt=t("README links got updated"),St=t("More "),Vt={href:"https://github.com/nushell/nushell/pull/3013",target:"_blank",rel:"noopener noreferrer"},Lt=t("README updates"),Dt=t(" and "),Pt={href:"https://github.com/nushell/nushell/pull/2996",target:"_blank",rel:"noopener noreferrer"},Yt=t("here"),qt=t("README now shows "),Ct={href:"https://github.com/nushell/nushell/pull/2993",target:"_blank",rel:"noopener noreferrer"},Ft=t("contributor icons"),Kt=e("h1",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Qt=t("Booleans are now shown as "),Ut={href:"https://github.com/nushell/nushell/pull/3043",target:"_blank",rel:"noopener noreferrer"},$t=t("true/false instead of Yes/No"),Gt=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Ht=e("p",null,"We're hard at work at putting together the proposed features for Nushell 1.0, which will help guide the work to get there. While there's still much work to do to achieve a 1.0 release, this proposal will let the community help refine and correct the direction. We're looking forward to kicking this off in the coming weeks.",-1);function Jt(Ot,Xt){const n=l("ExternalLinkIcon");return r(),h("div",null,[_,c,u,a(" more "),p,e("p",null,[f,e("a",g,[m,o(n)]),b,e("a",w,[k,o(n)]),y,v,x]),N,e("ul",null,[e("li",null,[e("a",A,[T,o(n)])]),e("li",null,[e("a",j,[E,o(n)])]),e("li",null,[e("a",z,[I,o(n)])]),e("li",null,[e("a",B,[W,o(n)])]),e("li",null,[e("a",M,[R,o(n)])]),e("li",null,[e("a",S,[V,o(n)])])]),L,D,e("ul",null,[e("li",null,[P,Y,q,e("a",C,[F,o(n)])]),e("li",null,[K,e("a",Q,[U,$,o(n)])]),e("li",null,[G,e("a",H,[J,O,X,o(n)])])]),Z,e("ul",null,[e("li",null,[ee,e("a",te,[ne,o(n)])]),e("li",null,[oe,se,e("a",le,[re,o(n)])]),e("li",null,[he,ae,e("a",ie,[de,o(n)]),_e]),e("li",null,[ce,e("a",ue,[pe,o(n)])]),e("li",null,[fe,e("a",ge,[me,o(n)])]),e("li",null,[be,e("a",we,[ke,o(n)]),ye,e("a",ve,[xe,o(n)])]),e("li",null,[Ne,e("a",Ae,[Te,o(n)])]),e("li",null,[je,Ee,e("a",ze,[Ie,o(n)])]),e("li",null,[Be,We,e("a",Me,[Re,o(n)])]),e("li",null,[Se,Ve,e("a",Le,[De,o(n)])]),e("li",null,[Pe,Ye,e("a",qe,[Ce,o(n)])]),e("li",null,[Fe,Ke,e("a",Qe,[Ue,o(n)])]),e("li",null,[$e,e("a",Ge,[He,Je,o(n)])]),e("li",null,[Oe,Xe,e("a",Ze,[et,o(n)])]),e("li",null,[tt,e("a",nt,[ot,o(n)])])]),st,e("ul",null,[e("li",null,[lt,e("a",rt,[ht,o(n)])]),e("li",null,[at,it,dt,e("a",_t,[ct,o(n)])]),e("li",null,[ut,e("a",pt,[ft,o(n)])]),e("li",null,[e("a",gt,[mt,bt,o(n)])]),e("li",null,[wt,e("a",kt,[yt,o(n)])]),e("li",null,[vt,e("a",xt,[Nt,o(n)])])]),At,e("ul",null,[e("li",null,[Tt,e("a",jt,[Et,o(n)]),zt,e("a",It,[Bt,o(n)])]),e("li",null,[Wt,e("a",Mt,[Rt,o(n)])]),e("li",null,[St,e("a",Vt,[Lt,o(n)]),Dt,e("a",Pt,[Yt,o(n)])]),e("li",null,[qt,e("a",Ct,[Ft,o(n)])])]),Kt,e("ul",null,[e("li",null,[Qt,e("a",Ut,[$t,o(n)])])]),Gt,Ht])}const en=s(d,[["render",Jt],["__file","2021-02-16-nushell_0_27.html.vue"]]);export{en as default};
