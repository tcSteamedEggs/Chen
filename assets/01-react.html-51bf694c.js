import{_ as p,W as o,X as d,Y as r,a0 as u,a2 as a,Z as n,a1 as s,$ as e,C as v}from"./framework-f5e21fe7.js";const k={},m=n("p",null,[s("本文将分别从 "),n("code",null,"React"),s(" 脚手架和前端构建工具 "),n("code",null,"vite"),s(" 分别搭建一个简单的 "),n("code",null,"React"),s(" 项目!")],-1),h=e(`<h1 id="_1-创建简单的-react-项目" tabindex="-1"><a class="header-anchor" href="#_1-创建简单的-react-项目" aria-hidden="true">#</a> 1. 创建简单的 React 项目</h1><h2 id="_1-1-使用-react-脚手架创建-react-应用" tabindex="-1"><a class="header-anchor" href="#_1-1-使用-react-脚手架创建-react-应用" aria-hidden="true">#</a> 1.1 使用 React 脚手架创建 React 应用</h2><ul><li>使用 <code>create-react-app</code> 创建 <code>react</code> 应用，创建项目并启动</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 全局安装</span>
npm i <span class="token operator">-</span>g create-react-app
<span class="token comment"># 切换至需要创建项目的目录 使用命令</span>
create-react-app hello-react
<span class="token comment"># 创建项目 hello-react 并生成目录 hello-react</span>
cd hello-react
<span class="token comment"># 启动项目 </span>
npm <span class="token function">start</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本文后续搭建环境如上!</p></blockquote><h2 id="_1-2-使用-vite-搭建-react-项目" tabindex="-1"><a class="header-anchor" href="#_1-2-使用-vite-搭建-react-项目" aria-hidden="true">#</a> 1.2 使用 Vite 搭建 React 项目</h2><blockquote><p><code>vite</code> 给我的感觉就是快!</p></blockquote>`,7),b=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,`npm create vite@lastest my-vite-app  
cd my-vite-app  
npm install  
npm run dev  
`)]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("yarn create vite "),n("span",{class:"token comment"},"# 选择配置项即可"),s(`
yarn
yarn dev
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," ")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=e(`<h2 id="_1-3-hello-react-项目目录结构分析" tabindex="-1"><a class="header-anchor" href="#_1-3-hello-react-项目目录结构分析" aria-hidden="true">#</a> 1.3 hello-react 项目目录结构分析</h2><blockquote><p>这块瞅瞅就好 ~ 不过需要留意高亮行 ~</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 忽略 node_modules 项目依赖包文件夹 --&gt;</span> 
┌── public                      // 公共资源文件
│   ├── favicon.ico             // 网站页签图标
│   ├── index.html              // 主页面
│   ├── manifest.json           // 编译配置文件（应用“加壳”）
│   └── robots.txt              // 爬虫协议文件
│
├── src                         // 项目的源码编写目录
│   ├── App.css                 // App 组件样式
│   ├── App.js                  // 入口组件（App组件）
│   ├── App.test.js             // 给 App 做测试
│   ├── index.css               // 公共样式
│   ├── index.js                // 入口文件
│   ├── reportWebVitals.js 	    // 页面性能分析文件 需要 web-vitals 库的支持
│   ├── setupTests.js           // 组件单元测试的文件 需要jest-dom库的支持
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                // 项目依赖包配置文件（node配置文件）
└── README.md                   // 项目说明文档
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-编写和分析-index-js" tabindex="-1"><a class="header-anchor" href="#_1-4-编写和分析-index-js" aria-hidden="true">#</a> 1.4 编写和分析 index.js</h2><blockquote><p><code>index.js</code> 是作为项目的<u>主入口</u>文件</p></blockquote><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 引入 React 核心库</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入 ReactDOM 核心库</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入 App 组件</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 获取一个根容器，其返回一个 ReactDOMRoot 对象实例</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 相当于如下  </span>
<span class="token comment">// ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</span>
<span class="token comment">// 但是 ReactDOM.render 在 React 18 不再长期支持 现在使用 createRoot 替代 </span>

<span class="token comment">// 渲染根组件 App（开发环境下加上 React.StrictMode 比较好）</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_1-5-编写和分析-app-js" tabindex="-1"><a class="header-anchor" href="#_1-5-编写和分析-app-js" aria-hidden="true">#</a> 1.5 编写和分析 App.js</h1><ul><li>编写 <code>App</code> 组件</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 类式组件写法</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 可以不用导入本行</span>
<span class="token comment">// 引入 Hello 组件（默认引入 Hello/index.jsx）</span>
<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&#39;./components/Hello&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello React</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/* 可以写成自闭合标签 */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Hello</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 默认暴露 App 组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_1-6-编写-hello-组件" tabindex="-1"><a class="header-anchor" href="#_1-6-编写-hello-组件" aria-hidden="true">#</a> 1.6 编写 Hello 组件</h1><ul><li>推荐将 <code>Hello.jsx</code> 改为 <code>index.jsx</code> 可简写引入</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello 组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时访问 <code>localhost:3000</code> 即可看到 <code>Hello React</code> 和 <code>Hello 组件</code> 的标题文字！</li></ul><div class="hint-container info"><p class="hint-container-title">结束语🔚</p><p>简单的 <code>React</code> 项目就大功完成!</p></div>`,14);function _(w,f){const t=v("CodeTabs");return o(),d("div",null,[m,r(" more "),h,u(t,{id:"31",data:[{title:"npm"},{title:"yarn"}],"tab-id":"powershell"},{tab0:a(({title:l,value:i,isActive:c})=>[b]),tab1:a(({title:l,value:i,isActive:c})=>[g]),_:1}),x])}const R=p(k,[["render",_],["__file","01-react.html.vue"]]);export{R as default};
