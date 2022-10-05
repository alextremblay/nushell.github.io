import{_ as e,o,c as p,a,t as n,d as t,e as c}from"./app.4626778d.js";const r={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),u=t(),d=t(" for dataframe or lazyframe"),k={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; filter-with (mask or expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>mask or expression</code>: boolean mask used to filter data</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter dataframe using a bool mask</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>true false<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask</span>
</code></pre></div><p>Filter dataframe using an expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> filter-with <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div>`,9);function h(s,f){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",k,n(s.$frontmatter.dataframe_or_lazyframe),1),m])}const b=e(r,[["render",h],["__file","filter-with.html.vue"]]);export{b as default};
