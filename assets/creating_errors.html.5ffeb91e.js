import{_ as t,r as e,o,c as p,a,b as c,w as l,d as s,e as r}from"./app.4626778d.js";const i={},u=a("h1",{id:"\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u9519\u8BEF",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u9519\u8BEF","aria-hidden":"true"},"#"),s(" \u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u9519\u8BEF")],-1),d=s("\u4F7F\u7528 "),k=s("\u5143\u6570\u636E"),h=s(" \u4FE1\u606F\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u9519\u8BEF\uFF0C\u9519\u8BEF\u4FE1\u606F\u7531\u591A\u4E2A\u90E8\u5206\u6784\u6210\uFF1A"),m=r(`<ul><li>\u9519\u8BEF\u7684\u6807\u9898</li><li>\u9519\u8BEF\u4FE1\u606F\u7684\u6807\u7B7E\uFF0C\u5176\u4E2D\u5305\u62EC\u6807\u7B7E\u7684\u6587\u672C\u548C\u8981\u6807\u6CE8\u4E0B\u5212\u7EBF\u7684\u8303\u56F4</li></ul><p>\u4F60\u53EF\u4EE5\u4F7F\u7528<code>error make</code>\u547D\u4EE4\u6765\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u6709\u81EA\u5DF1\u7684\u540D\u4E3A<code>my-command</code>\u7684\u547D\u4EE4\uFF0C\u4F60\u60F3\u7ED9\u8C03\u7528\u8005\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\uFF0C\u8BF4\u660E\u4F20\u5165\u7684\u4E00\u4E2A\u53C2\u6570\u6709\u95EE\u9898\u3002</p><p>\u9996\u5148\uFF0C\u4F60\u53EF\u4EE5\u4ECE\u53C2\u6570\u7684\u6765\u6E90\u4E2D\u83B7\u53D6\u6807\u6CE8\u8303\u56F4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>error make</code> \u547D\u4EE4\u6765\u521B\u5EFA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u8BE5\u547D\u4EE4\u9700\u8981\u4E00\u4E2A\u53EF\u4EE5\u63CF\u8FF0\u5F85\u521B\u5EFA\u9519\u8BEF\u7684\u8BB0\u5F55\u4F5C\u4E3A\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span>, label: <span class="token punctuation">{</span>text: <span class="token string">&quot;fish right here&quot;</span>, start: <span class="token variable">$span</span>.start, end: <span class="token variable">$span</span>.end <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u4E0E\u4F60\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\u653E\u5728\u4E00\u8D77\u540E\uFF0C\u5B83\u53EF\u80FD\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def my-command <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
    error <span class="token function">make</span> <span class="token punctuation">{</span>
        msg: <span class="token string">&quot;this is fishy&quot;</span>,
        label: <span class="token punctuation">{</span>
            text: <span class="token string">&quot;fish right here&quot;</span>,
            start: <span class="token variable">$span</span>.start,
            end: <span class="token variable">$span</span>.end
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u5F53\u4F20\u5165\u4E00\u4E2A\u503C\u8C03\u7528\u65F6\uFF0C\u6211\u4EEC\u4F1A\u770B\u5230\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\u8FD4\u56DE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> my-command <span class="token number">100</span>

Error:
  \xD7 this is fishy
   \u256D\u2500<span class="token punctuation">[</span>entry <span class="token comment">#5:1:1]</span>
 <span class="token number">1</span> \u2502 my-command <span class="token number">100</span>
   \xB7            \u2500\u252C\u2500
   \xB7             \u2570\u2500\u2500 fish right here
   \u2570\u2500\u2500\u2500\u2500
</code></pre></div>`,10);function g(_,b){const n=e("RouterLink");return o(),p("div",null,[u,a("p",null,[d,c(n,{to:"/zh-CN/book/metadata.html"},{default:l(()=>[k]),_:1}),h]),m])}const v=t(i,[["render",g],["__file","creating_errors.html.vue"]]);export{v as default};
