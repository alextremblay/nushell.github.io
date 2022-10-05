import{_ as p,r as c,o as l,c as i,a as s,b as e,w as t,d as n,e as o}from"./app.4626778d.js";const u={},r=s("h1",{id:"quick-tour",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#quick-tour","aria-hidden":"true"},"#"),n(" Quick Tour")],-1),d=s("p",null,"The easiest way to see what Nu can do is to start with some examples, so let's dive in.",-1),h=n("The first thing you'll notice when you run a command like "),m=s("code",null,"ls",-1),k=n(" is that instead of a block of text coming back, you get a structured table."),b=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 <span class="token number">404</span>.html              \u2502 <span class="token function">file</span> \u2502     <span class="token number">429</span> B \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">8</span> mins ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">5</span> \u2502 README.md             \u2502 <span class="token function">file</span> \u2502     <span class="token number">213</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.</p>`,2),_=n("The first thing we'll do is to sort our table by size. To do this, we'll take the output from "),f=s("code",null,"ls",-1),g=n(" and feed it into a command that can sort tables based on the contents of a column."),w=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 SUMMARY.md            \u2502 <span class="token function">file</span> \u2502   <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">9</span> mins ago  \u2502
\u2502  <span class="token number">5</span> \u2502 books.md              \u2502 <span class="token function">file</span> \u2502     <span class="token number">687</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div>`,1),v=n("You can see that to make this work we didn't pass commandline arguments to "),y=s("code",null,"ls",-1),x=n(". Instead, we used the "),B=s("code",null,"sort-by",-1),N=n(" command that Nu provides to do the sorting of the output of the "),T=s("code",null,"ls",-1),G=n(" command. To see the biggest files on top, we also used "),S=s("code",null,"reverse",-1),C=n("."),R=n("Nu provides many commands that can work on tables. For example, we could filter the contents of the "),j=s("code",null,"ls",-1),E=n(" table so that it only shows files over 1 kilobyte:"),M=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502       name        \u2502 type \u2502  size   \u2502  modified  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Gemfile           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">1</span> \u2502 Gemfile.lock      \u2502 <span class="token function">file</span> \u2502 <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">2</span> \u2502 LICENSE           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">3</span> \u2502 SUMMARY.md        \u2502 <span class="token function">file</span> \u2502 <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let&#39;s look at a different command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  <span class="token comment">#  \u2502 pid  \u2502         name         \u2502 status  \u2502  cpu  \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   <span class="token number">0</span> \u2502 <span class="token number">7570</span> \u2502 nu                   \u2502 Running \u2502  <span class="token number">1.96</span> \u2502  <span class="token number">23.2</span> MiB \u2502 <span class="token number">32.8</span> GiB \u2502
\u2502   <span class="token number">1</span> \u2502 <span class="token number">3533</span> \u2502 remindd              \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502 <span class="token number">103.6</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2502   <span class="token number">2</span> \u2502 <span class="token number">3495</span> \u2502 TVCacheExtension     \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">11.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
\u2502   <span class="token number">3</span> \u2502 <span class="token number">3490</span> \u2502 MusicCacheExtension  \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">12.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
<span class="token punctuation">..</span>.
</code></pre></div>`,3),K=n("You may be familiar with the "),I=s("code",null,"ps",-1),L=n(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes."),U=n("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),q=s("code",null,"ls",-1),z=n(" command earlier, we can also work with the table that the "),A=s("code",null,"ps",-1),Y=n(" command gives back to us:"),V=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 pid  \u2502      name      \u2502 status  \u2502  cpu   \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">1583</span> \u2502 Terminal       \u2502 Running \u2502  <span class="token number">20.69</span> \u2502 <span class="token number">127.8</span> MiB \u2502 <span class="token number">33.0</span> GiB \u2502
\u2502 <span class="token number">1</span> \u2502  <span class="token number">579</span> \u2502 photoanalysisd \u2502 Running \u2502 <span class="token number">139.50</span> \u2502  <span class="token number">99.9</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div>`,1),W=n("So far, we've been using "),J=s("code",null,"ls",-1),D=n(" and "),F=s("code",null,"ps",-1),H=n(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),O=s("code",null,"date",-1),P=n(" and "),Q=s("code",null,"sys",-1),$=n("."),X=o(`<p>Running <code>date now</code> gives us information about the current day and time:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>To get the date as a table we can feed it into <code>date to-table</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 year \u2502 month \u2502 day \u2502 hour \u2502 minute \u2502 second \u2502 timezone \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">2022</span> \u2502     <span class="token number">3</span> \u2502   <span class="token number">7</span> \u2502   <span class="token number">14</span> \u2502     <span class="token number">45</span> \u2502      <span class="token number">3</span> \u2502 <span class="token parameter variable">-08:00</span>   \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div>`,4),Z=n("Running "),ss=s("code",null,"sys",-1),ns=n(" gives information about the system that Nu is running on:"),as=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token function">host</span>  \u2502 <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> \u2502
\u2502 cpu   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 disks \u2502 <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 mem   \u2502 <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> \u2502
\u2502 temp  \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     \u2502
\u2502 net   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div>`,1),es=n("This is a bit different than the tables we saw before. The "),ts=s("code",null,"sys",-1),os=n(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),ps=s("em",null,"get",-1),cs=n(" the column to view:"),ls=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name           \u2502 Debian GNU/Linux       \u2502
\u2502 os version     \u2502 <span class="token number">11</span>                     \u2502
\u2502 kernel version \u2502 <span class="token number">5.10</span>.92-v8+            \u2502
\u2502 <span class="token function">hostname</span>       \u2502 lifeless               \u2502
\u2502 <span class="token function">uptime</span>         \u2502 19day 21hr 34min 45sec \u2502
\u2502 sessions       \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div>`,1),is=n("The "),us=s("code",null,"get",-1),rs=n(` command lets us jump into the contents of a column of the table. Here, we're looking into the "host" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:`),ds=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 jt \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Right now, there&#39;s just one user on the system named &quot;jt&quot;. You&#39;ll notice that we can pass a column path (the <code>host.sessions.name</code> part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.</p><p>You might have noticed something else that&#39;s different. Rather than having a table of data, we have just a single element: the string &quot;jt&quot;. Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.</p>`,3),hs=n("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),ms=s("code",null,"echo",-1),ks=n(" command (the "),bs=s("code",null,"^",-1),_s=n(" tells Nu to not use the built-in "),fs=s("code",null,"echo",-1),gs=n(" command):"),ws=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we&#39;ve called <code>^echo</code> with the value we saw earlier. This allows us to pass data out of Nu into <code>echo</code> (or any command outside of Nu, like <code>git</code> for example).</p><h3 id="getting-help" tabindex="-1"><a class="header-anchor" href="#getting-help" aria-hidden="true">#</a> Getting Help</h3>`,3),vs=n("Help text for any of Nu's built-in commands can be discovered with the "),ys=s("code",null,"help",-1),xs=n(" command. To see all commands, run "),Bs=s("code",null,"help commands",-1),Ns=n(". You can also search for a topic by doing "),Ts=s("code",null,"help -f <topic>",-1),Gs=n("."),Ss=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,1);function Cs(Rs,js){const a=c("RouterLink");return l(),i("div",null,[r,d,s("p",null,[h,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[m]),_:1}),k]),b,s("p",null,[_,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[f]),_:1}),g]),w,s("p",null,[v,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[y]),_:1}),x,B,N,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[T]),_:1}),G,e(a,{to:"/book/commands/reverse.html"},{default:t(()=>[S]),_:1}),C]),s("p",null,[R,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[j]),_:1}),E]),M,s("p",null,[K,e(a,{to:"/book/commands/ps.html"},{default:t(()=>[I]),_:1}),L]),s("p",null,[U,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[q]),_:1}),z,e(a,{to:"/book/commands/ps.html"},{default:t(()=>[A]),_:1}),Y]),V,s("p",null,[W,e(a,{to:"/book/commands/ls.html"},{default:t(()=>[J]),_:1}),D,e(a,{to:"/book/commands/ps.html"},{default:t(()=>[F]),_:1}),H,e(a,{to:"/book/commands/date.html"},{default:t(()=>[O]),_:1}),P,e(a,{to:"/book/commands/sys.html"},{default:t(()=>[Q]),_:1}),$]),X,s("p",null,[Z,e(a,{to:"/book/commands/sys.html"},{default:t(()=>[ss]),_:1}),ns]),as,s("p",null,[es,e(a,{to:"/book/commands/sys.html"},{default:t(()=>[ts]),_:1}),os,ps,cs]),ls,s("p",null,[is,e(a,{to:"/book/commands/get.html"},{default:t(()=>[us]),_:1}),rs]),ds,s("p",null,[hs,ms,ks,bs,_s,e(a,{to:"/book/commands/echo.html"},{default:t(()=>[fs]),_:1}),gs]),ws,s("p",null,[vs,e(a,{to:"/book/commands/help.html"},{default:t(()=>[ys]),_:1}),xs,Bs,Ns,Ts,Gs]),Ss])}const Ms=p(u,[["render",Cs],["__file","quick_tour.html.vue"]]);export{Ms as default};
