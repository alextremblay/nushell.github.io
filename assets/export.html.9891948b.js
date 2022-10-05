import{_ as n,o,c,a,t,d as s,e as r}from"./app.4626778d.js";const i={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p=s(),h=s(" for core"),u={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export a definition from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module utils <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def my-command <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use utils my-command<span class="token punctuation">;</span> my-command
</code></pre></div>`,7);function _(e,f){return o(),c("div",null,[a("h1",d,[l,p,a("code",null,t(e.$frontmatter.title),1),h]),a("div",u,t(e.$frontmatter.core),1),m])}const k=n(i,[["render",_],["__file","export.html.vue"]]);export{k as default};
