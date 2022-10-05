import{_ as r,o as n,c as o,a as e,t as s,d as t,e as c}from"./app.4626778d.js";const d={},i={id:"frontmatter-title-for-bytes",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),p=t(),h=t(" for bytes"),u={class:"command-title"},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes reverse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse bytes <code>0x[1F FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes reverse
</code></pre></div><p>Reverse bytes <code>0x[FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes reverse
</code></pre></div>`,9);function b(a,f){return n(),o("div",null,[e("h1",i,[l,p,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.bytes),1),_])}const x=r(d,[["render",b],["__file","bytes_reverse.html.vue"]]);export{x as default};
