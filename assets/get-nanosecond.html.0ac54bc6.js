import{_ as e,o,c,a,t as s,d as t,e as p}from"./app.4626778d.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=t(),u=t(" for dataframe"),h={class:"command-title"},f=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get-nanosecond </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns nanosecond from a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime <span class="token parameter variable">-z</span> <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> get-nanosecond
</code></pre></div>`,5);function k(n,m){return o(),c("div",null,[a("h1",l,[i,d,a("code",null,s(n.$frontmatter.title),1),u]),a("div",h,s(n.$frontmatter.dataframe),1),f])}const g=e(r,[["render",k],["__file","get-nanosecond.html.vue"]]);export{g as default};
