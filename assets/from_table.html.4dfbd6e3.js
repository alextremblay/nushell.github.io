import{_ as r,o,c as n,a as e,t,d as s,e as d}from"./app.4626778d.js";const l={},c={id:"frontmatter-title-for-database",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),h=s(),p=s(" for database"),f={class:"command-title"},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from table (select) --as</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>select</code>: table of derived table to select from</li><li><code>--as {string}</code>: Alias for the selected table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Selects a table from database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite <span class="token operator">|</span> from table table_a <span class="token operator">|</span> describe
</code></pre></div>`,7);function m(a,b){return o(),n("div",null,[e("h1",c,[i,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",f,t(a.$frontmatter.database),1),_])}const g=r(l,[["render",m],["__file","from_table.html.vue"]]);export{g as default};
