import{_ as t,o,c as r,a as e,t as s,d as n,e as l}from"./app.4626778d.js";const c={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d=n(),h=n(" for filters"),u={class:"command-title"},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; length --column</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--column</code>: Show the number of columns in a table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of entries in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> length
</code></pre></div><p>Count the number of columns in the calendar table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cal</span> <span class="token operator">|</span> length <span class="token parameter variable">-c</span>
</code></pre></div>`,9);function f(a,_){return o(),r("div",null,[e("h1",i,[p,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.filters),1),m])}const g=t(c,[["render",f],["__file","length.html.vue"]]);export{g as default};
