import{_ as a,o as s,c as o,e}from"./app.4626778d.js";const n={},r=e(`<h1 id="explorando-seu-sistema" tabindex="-1"><a class="header-anchor" href="#explorando-seu-sistema" aria-hidden="true">#</a> Explorando seu sistema</h1><p>Shells mais antigos permitem que voc\xEA navegue pelo sistema de arquivos e execute comandos. Shells modernos como o Nu permitem que voc\xEA fa\xE7a o mesmo. Vamos dar uma olhada em alguns dos comandos comuns que voc\xEA vai usar quando estiver interagindo com seu sistema.</p><h2 id="visualizando-o-conteudo-de-directorios" tabindex="-1"><a class="header-anchor" href="#visualizando-o-conteudo-de-directorios" aria-hidden="true">#</a> Visualizando o conte\xFAdo de direct\xF3rios</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div><p>Como vimos em outros cap\xEDtulos, <code>ls</code> \xE9 um comando para visualizar o conte\xFAdo de um caminho. Nu retorna o conte\xFAdo como uma tabela que podemos usar adiante.</p><p>O comando <code>ls</code> tamb\xE9m recebe um par\xE2metro opcional para mudar o que voc\xEA gostaria de ver. Por exemplo, podemos listar os arquivos cujo nome termina em &quot;.txt&quot;.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.txt
---+--------------+------+----------+---------+--------------+--------------
 <span class="token comment"># | name         | type | readonly | size    | accessed     | modified</span>
---+--------------+------+----------+---------+--------------+--------------
 <span class="token number">0</span> <span class="token operator">|</span> history.txt  <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.3</span> KB  <span class="token operator">|</span> <span class="token number">2</span> months ago <span class="token operator">|</span> a day ago
 <span class="token number">1</span> <span class="token operator">|</span> readonly.txt <span class="token operator">|</span> File <span class="token operator">|</span> <span class="token builtin class-name">readonly</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>empty<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token number">2</span> months ago <span class="token operator">|</span> <span class="token number">2</span> months ago
---+--------------+------+----------+---------+--------------+--------------
</code></pre></div><p>O asterisco (*) usado no par\xE2metro opcional acima &quot;*.txt&quot; \xE9 chamado de coringa. Ele faz uma correspond\xEAncia com qualquer coisa. Voc\xEA pode ler o coringa &quot;*.txt&quot; como &quot;aceite qualquer nome de arquivo, desde que termine com &#39;.txt&#39;&quot;.</p><p>Nu tamb\xE9m usa coringas modernos, que permitem acesso a diret\xF3rios mais profundos.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> **/*.rs
-----+-----------------------------------------------------+------+----------+----------+----------------+----------------
 <span class="token comment">#   | name                                                | type | readonly | size     | accessed       | modified</span>
-----+-----------------------------------------------------+------+----------+----------+----------------+----------------
 <span class="token number">0</span>   <span class="token operator">|</span> src/cli.rs                                          <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">19.1</span> KB  <span class="token operator">|</span> <span class="token number">15</span> hours ago   <span class="token operator">|</span> <span class="token number">15</span> hours ago
 <span class="token number">1</span>   <span class="token operator">|</span> src/commands/args.rs                                <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">244</span> B    <span class="token operator">|</span> <span class="token number">2</span> months ago   <span class="token operator">|</span> <span class="token number">2</span> months ago
 <span class="token number">2</span>   <span class="token operator">|</span> src/commands/autoview.rs                            <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.5</span> KB   <span class="token operator">|</span> <span class="token number">15</span> hours ago   <span class="token operator">|</span> <span class="token number">15</span> hours ago
 <span class="token number">3</span>   <span class="token operator">|</span> src/commands/cd.rs                                  <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">277</span> B    <span class="token operator">|</span> a week ago     <span class="token operator">|</span> a week ago
 <span class="token number">4</span>   <span class="token operator">|</span> src/commands/classified.rs                          <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">13.5</span> KB  <span class="token operator">|</span> <span class="token number">15</span> hours ago   <span class="token operator">|</span> <span class="token number">15</span> hours ago
 <span class="token number">5</span>   <span class="token operator">|</span> src/commands/clip.rs                                <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.0</span> KB   <span class="token operator">|</span> <span class="token number">2</span> days ago     <span class="token operator">|</span> <span class="token number">2</span> days ago
</code></pre></div><p>Aqui estamos procurando qualquer arquivo cujo nome termine com &quot;.rs&quot; e os dois asteriscos dizem ainda &quot;em qualquer diret\xF3rio come\xE7ando a partir daqui&quot;.</p><h2 id="mudando-o-diretorio-atual" tabindex="-1"><a class="header-anchor" href="#mudando-o-diretorio-atual" aria-hidden="true">#</a> Mudando o diret\xF3rio atual</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div><p>Para mudar do diret\xF3rio atual para um outro, usamos o comando <code>cd</code>. Assim como em outros shells, podemos usar o nome do diret\xF3rio ou, se quisermos ir para um diret\xF3rio acima, podemos usar o atalho <code>..</code>.</p><h2 id="comandos-de-sistema-de-arquivo" tabindex="-1"><a class="header-anchor" href="#comandos-de-sistema-de-arquivo" aria-hidden="true">#</a> Comandos de sistema de arquivo</h2><p>Nu tamb\xE9m fornece alguns comandos b\xE1sicos de sistemas de arquivos que funcionam entre plataformas diferentes.</p><p>Podemos mover um item de um lugar para outro usando o comando <code>mv</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> item location
</code></pre></div><p>Podemos copiar um item de um local para outro:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> item location
</code></pre></div><p>Podemos remover um item:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> item
</code></pre></div><p>Os tr\xEAs comandos tamb\xE9m podem usar os coringas que vimos anteriormente com <code>ls</code>.</p><p>Por fim, podemos criar um novo diret\xF3rio usando o comando <code>mkdir</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> new_directory
</code></pre></div>`,25),p=[r];function t(c,l){return s(),o("div",null,p)}const m=a(n,[["render",t],["__file","explorando.html.vue"]]);export{m as default};
