import{_ as n,o,c as r,a as s,t as a,d as t,e as c}from"./app.4626778d.js";const d={},i={id:"frontmatter-title-for-system",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),h=t(),l=t(" for system"),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sys </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show info about the system</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
</code></pre></div><p>Show the os system name with get</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host <span class="token operator">|</span> get name
</code></pre></div><p>Show the os system name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host.name
</code></pre></div>`,9);function g(e,_){return o(),r("div",null,[s("h1",i,[p,h,s("code",null,a(e.$frontmatter.title),1),l]),s("div",u,a(e.$frontmatter.system),1),m])}const y=n(d,[["render",g],["__file","sys.html.vue"]]);export{y as default};
