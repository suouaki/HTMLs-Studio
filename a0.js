// templates.js
window.templates = {
    色彩变化模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个网页</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .rainbow-text {
            background: linear-gradient(45deg,
                #ff0000, #ff7700, #ffdd00, #00ff00,
                #0099ff, #6600ff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: rainbow 3s ease-in-out infinite;
        }
        @keyframes rainbow {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(180deg); }
        }
        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 20px 0;
        }
        .highlight {
            background: rgba(255, 255, 0, 0.3);
            padding: 2px 8px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="rainbow-text">🌟 欢迎来到我的网页世界！</h1>
        <p>这是一个 <span class="highlight">现代化的HTML页面</span>，展示了CSS的强大功能。</p>
        <p>✨ 在左侧编辑器中修改代码，右侧会实时显示效果！</p>
        <p>🚀 开始你的HTML编程之旅吧！</p>
  <h1 style="color: #ff6600;">欢迎体验HTML编辑器</h1>
    <p>
  <span style="color: red;">在</span>
  <span style="color: orange;">这</span>
  <span style="color: yellow;">里</span>
  <span style="color: green;">编</span>
  <span style="color: blue;">写</span>
  <span style="color: indigo;">H</span>
  <span style="color: violet;">T</span>
  <span style="color: teal;">M</span>
  <span style="color: brown;">L</span>
  <span>代码，实时预览效果！</span>
</p>
    </div>
</body>
</html>`,
  带复制按钮的代码块: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>带复制按钮的代码块</title>
    <style>
        .code-block-container {
            position: relative;
            display: inline-block;
        }
        .copy-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 2px 8px;
            background: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.2s;
        }
        .copy-btn:hover {
            opacity: 1;
        }
        pre {
            margin-top: 0;
        }
    </style>
</head>
<body>

<div class="code-block-container">
    <button class="copy-btn">复制</button>
    <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();</code></pre>
</div>

<script>
document.querySelectorAll('.code-block-container').forEach(container => {
    const btn = container.querySelector('.copy-btn');
    const code = container.querySelector('code');

    btn.addEventListener('click', () => {
        // 获取 code 标签内容并复制
        const codeText = code.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            btn.textContent = '已复制!';
            setTimeout(() => btn.textContent = '复制', 1500);
        });
    });
});
</script>

</body>
</html>`,
  活力代码世界黑暗博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="暗色技术博客 - 充满活力的编程知识分享">
    <meta name="keywords" content="编程, JavaScript, 技术博客, 异步编程">
    <meta name="author" content="小刚">
    <title>暗色技术博客 - 活力代码世界</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Sans SC', sans-serif;
            line-height: 1.7;
            background-color: #181818;
            color: #e0e0e0;
        }

        .header {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            padding: 3rem 1rem;
            text-align: center;
            color: #fff;
        }

        .header h1 {
            font-size: 2.8rem;
            margin-bottom: 0.5rem;
        }

        .nav {
            background: #222;
            padding: 1rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav a {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.3s;
        }

        .nav a:hover {
            color: #ff6b6b;
       /* 颜色选择器弹窗样式 */
    .color-picker-modal {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.35);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        .article code {
            background: #333;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
        }

        .article pre {
            background: #333;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
        }

        .related-articles {
            background: #222;
            padding: 2rem;
            border-radius: 12px;
        }

        .related-articles h3 {
            font-size: 1.4rem;
            color: #ff6b6b;
            margin-bottom: 1rem;
        }

        .related-articles ul {
            list-style: none;
        }

        .related-articles li {
            margin-bottom: 0.8rem;
        }

        .related-articles a {
            color: #e0e0e0;
            text-decoration: none;
        }

        .related-articles a:hover {
            color: #ff6b6b;
        }

        .button {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background: #ff6b6b;
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.3s;
        }

        .button:hover {
            background: #e55a5a;
        }

        .footer {
            background: #222;
            color: #aaa;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 900px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .header h1 {
                font-size: 2rem;
            }
            .article {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>活力代码世界</h1>
        <p>点燃编程热情，分享技术洞见</p>
    </header>

    <nav class="nav">
        <a href="#home">首页</a>
        <a href="#articles">文章</a>
        <a href="#tutorials">教程</a>
        <a href="#about">关于</a>
    </nav>

    <div class="container">
        <article class="article">
            <h1>深入理解JavaScript异步编程</h1>
            <div class="meta">发布时间: 2025年6月2日 | 作者: 小刚</div>
            <h2>异步编程简介</h2>
            <p>异步编程是JavaScript的关键特性，支持非阻塞操作。常用工具包括 <code>Promise</code> 和 <code>async/await</code>。</p>
            <h2>代码示例</h2>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
            </code></pre>
            <h2>注意事项</h2>
            <p>异步编程需关注错误处理和性能优化，避免复杂回调链。</p>
            <a href="#more" class="button">了解更多</a>
        </article>

        <aside class="related-articles">
            <h3>相关文章</h3>
            <ul>
                <li><a href="#">JavaScript 事件循环详解</a></li>
                <li><a href="#">Node.js 异步编程实践</a></li>
                <li><a href="#">前端性能优化技巧</a></li>
            </ul>
        </aside>
    </div>

    <footer class="footer">
        <p>© 2025 活力代码世界. 保留所有权利.</p>
    </footer>
</body>
</html>`,
代码世界暗黑技术博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>暗色技术博客 - 代码世界</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #1a1a1a;
            color: #e0e0e0;
        }
        .header {
            background: #2c2c2c;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            color: #00adb5;
        }
        .container {
            max-width: 1000px;
            margin: 20px auto;
            background: #222222;
            padding: 30px;
            border-radius: 10px;
        }
        .article h1 {
            font-size: 2rem;
            color: #00adb5;
        }
        .meta {
            font-size: 0.9rem;
            color: #999;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #e0e0e0;
            border-left: 4px solid #00adb5;
            padding-left: 10px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .article code {
            background: #333;
            padding: 2px 6px;
            border-radius: 4px;
        }
        .article pre {
            background: #333;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background: #00adb5;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .button:hover {
            background: #008c93;
        }
        .footer {
            background: #2c2c2c;
            color: #999;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>代码世界</h1>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>深入理解JavaScript异步编程</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小刚
            </div>
            
            <h2>什么是异步编程？</h2>
            <p>异步编程是JavaScript的核心特性，允许非阻塞操作，提高程序效率。例如，<code>Promise</code> 和 <code>async/await</code> 是现代异步编程的基础。</p>
            
            <h2>代码示例</h2>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
            </code></pre>
            
            <h2>注意事项</h2>
            <p>异步编程需要注意错误处理和性能优化，避免回调地狱。</p>
            
            <a href="#more" class="button">了解更多</a>
        </article>
    </div>
    
    <footer class="footer">
        <p>© 2025 代码世界. 保留所有权利.</p>
    </footer>
</body>
</html>`,
    极简博客技术笔记: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>极简博客 - 技术笔记</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e0e0e0;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2rem;
            color: #2c3e50;
        }
        .header nav {
            margin-top: 10px;
        }
        .header nav a {
            margin: 0 15px;
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
        }
        .header nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .article h1 {
            font-size: 1.8rem;
            color: #2c3e50;
        }
        .meta {
            font-size: 0.85rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #34495e;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 15px;
        }
        .article ul {
            margin-bottom: 20px;
            padding-left: 25px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #2c3e50;
            color: #ecf0f1;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>技术笔记</h1>
        <nav>
            <a href="#home">首页</a>
            <a href="#about">关于</a>
            <a href="#archive">归档</a>
        </nav>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>响应式设计的艺术</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小明
            </div>
            
            <h2>引言</h2>
            <p>响应式设计是现代Web开发的核心，确保网页在手机、平板和桌面设备上都能完美呈现。</p>
            
            <h2>实现方法</h2>
            <p>通过CSS媒体查询、Flexbox和Grid布局，我们可以轻松构建灵活的页面结构。例如，使用 <code>vw</code> 和 <code>rem</code> 单位来适配不同屏幕大小。</p>
            
            <h2>工具推荐</h2>
            <ul>
                <li>Bootstrap：快速构建响应式布局</li>
                <li>Tailwind CSS：高效的工具类框架</li>
                <li>PostCSS：增强CSS功能</li>
            </ul>
            
            <h2>总结</h2>
            <p>响应式设计需要兼顾美观与性能，持续测试是关键。</p>
        </article>
    </div>
    
    <footer class="footer">
        <p>© 2025 技术笔记. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                
                杂志风格博客生活与技术: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杂志风格博客 - 生活与技术</title>
    <style>
        body {
            font-family: 'Lora', serif;
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .header {
            background: #e74c3c;
            color: white;
            padding: 50px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.8rem;
        }
        .container {
            display: flex;
            max-width: 1200px;
            margin: 20px auto;
            gap: 20px;
        }
        .main {
            flex: 3;
            background: white;
            padding: 30px;
            border-radius: 8px;
        }
        .sidebar {
            flex: 1;
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
        }
        .sidebar h3 {
            margin-top: 0;
            color: #2c3e50;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
        }
        .sidebar ul li {
            margin-bottom: 10px;
        }
        .sidebar ul li a {
            color: #3498db;
            text-decoration: none;
        }
        .article h1 {
            font-size: 2rem;
            color: #2c3e50;
        }
        .meta {
            font-size: 0.9rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        .article img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 800px) {
            .container {
                flex-direction: column;
            }
            .sidebar {
                order: -1;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>生活与技术</h1>
    </header>
    
    <div class="container">
        <main class="main">
            <article class="article">
                <h1>探索Web开发的未来</h1>
                <div class="meta">
                    发布时间: 2025年6月2日 | 作者: 小红
                </div>
                <img src="web-future.jpg" alt="Web开发插图">
                
                <h2>引言</h2>
                <p>Web开发正在快速发展，人工智能和WebAssembly正在改变我们的构建方式。</p>
                
                <h2>新兴技术</h2>
                <p>WebAssembly允许在浏览器中运行高性能代码，而AI驱动的工具可以自动优化用户界面。</p>
                
                <h2>案例分析</h2>
                <p>例如，某些公司利用WebAssembly构建了接近原生应用的网页体验。</p>
            </article>
        </main>
        <aside class="sidebar">
            <h3>热门文章</h3>
            <ul>
                <li><a href="#">如何学习React</a></li>
                <li><a href="#">CSS Grid布局入门</a></li>
                <li><a href="#">JavaScript性能优化</a></li>
            </ul>
        </aside>
    </div>
    
    <footer class="footer">
        <p>© 2025 生活与技术. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                 卡片式博客每日灵感: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>卡片式博客 - 每日灵感</title>
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #e9ecef;
        }
        .header {
            background: #0984e3;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 0 20px;
        }
        .card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 20px;
        }
        .card h2 {
            font-size: 1.5rem;
            margin: 0 0 10px;
            color: #2d3436;
        }
        .meta {
            font-size: 0.85rem;
            color: #636e72;
            margin-bottom: 15px;
        }
        .card p {
            color: #2d3436;
            margin-bottom: 15px;
        }
        .card a {
            color: #0984e3;
            text-decoration: none;
            font-weight: bold;
        }
        .card a:hover {
            text-decoration: underline;
        }
        .footer {
            background: #2d3436;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>每日灵感</h1>
    </header>
    
    <div class="container">
        <article class="card">
            <img src="article1.jpg" alt="文章1插图">
            <div class="card-content">
                <h2>如何提升前端开发效率</h2>
                <div class="meta">
                    发布时间: 2025年6月2日 | 作者: 小明
                </div>
                <p>探索现代前端工具如Vite和ESBuild，显著提升开发效率。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
        <article class="card">
            <img src="article2.jpg" alt="文章2插图">
            <div class="card-content">
                <h2>CSS动画的魅力</h2>
                <div class="meta">
                    发布时间: 2025年6月1日 | 作者: 小红
                </div>
                <p>通过CSS动画为网页添加生动的交互效果，提升用户体验。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
        <article class="card">
            <img src="article3.jpg" alt="文章3插图">
            <div class="card-content">
                <h2>学习TypeScript的5个理由</h2>
                <div class="meta">
                    发布时间: 2025年5月30日 | 作者: 小刚
                </div>
                <p>TypeScript为JavaScript开发带来类型安全和更好的可维护性。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 每日灵感. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                沉浸式博客创意笔记: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>沉浸式博客 - 创意笔记</title>
    <style>
        body {
            font-family: 'Playfair Display', serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            background: url('background.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
        }
        .header {
            background: rgba(0, 0, 0, 0.5);
            padding: 80px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 3rem;
            margin: 0;
        }
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 12px;
        }
        .article h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
        }
        .meta {
            font-size: 0.9rem;
            color: #ccc;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #fff;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .article img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .header h1 {
                font-size: 2rem;
            }
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>创意笔记</h1>
        <p>记录艺术与灵感的瞬间</p>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>摄影中的光影艺术</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小白
            </div>
            <img src="photo.jpg" alt="光影摄影">
            
            <h2>引言</h2>
            <p>光影是摄影的灵魂，掌握光线可以让平凡的场景变得非凡。</p>
            
            <h2>技巧分享</h2>
            <p>利用黄金时段的自然光，或通过人工光源创造戏剧性效果，都是摄影师的常用技巧。</p>
            
            <h2>案例展示</h2>
            <p>例如，逆光拍摄可以营造出梦幻的轮廓光效果。</p>
        </article>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 创意笔记. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                 交互式博客技术洞察: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>交互式博客 - 技术洞察</title>
    <style>
        body {
            font-family: 'Source Sans Pro', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .header {
            background: #1e90ff;
            color: white;
            padding: 50px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .container {
            max-width: 1000px;
            margin: 20px auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        }
        .article h1 {
            font-size: 2rem;
            color: #2d3436;
        }
        .meta {
            font-size: 0.9rem;
            color: #636e72;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #2d3436;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .comments {
            margin-top: 40px;
        }
        .comments h3 {
            color: #2d3436;
            margin-bottom: 20px;
        }
        .comment-form {
            margin-bottom: 30px;
        }
        .comment-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .comment-form input, .comment-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .comment-form button {
            padding: 10px 20px;
            background: #1e90ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .comment-form button:hover {
            background: #1873cc;
        }
        .comment {
            border-top: 1px solid #ddd;
            padding: 15px 0;
        }
        .footer {
            background: #2d3436;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>技术洞察</h1>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>深入探索Web性能优化</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小刚
            </div>
            
            <h2>引言</h2>
            <p>网页性能直接影响用户体验，优化加载速度是开发者的必修课。</p>
            
            <h2>优化技巧</h2>
            <p>包括图片懒加载、减少HTTP请求和使用CDN加速等方法。</p>
            
            <h2>工具推荐</h2>
            <ul>
                <li>Lighthouse：分析网页性能</li>
                <li>Webpack：打包优化</li>
                <li>Cloudflare：CDN服务</li>
            </ul>
        </article>
        
        <section class="comments">
            <h3>评论区</h3>
            <form class="comment-form">
                <label for="name">姓名</label>
                <input type="text" id="name" name="name" required>
                <label for="comment">评论</label>
                <textarea id="comment" name="comment" rows="4" required></textarea>
                <button type="submit">提交评论</button>
            </form>
            <div class="comment">
                <p><strong>用户1</strong>: 感谢分享，Lighthouse真的很好用！</p>
                <p><small>2025年6月2日</small></p>
            </div>
        </section>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 技术洞察. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                    
                博客文章我的博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>博客文章 - 我的博客</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
        }
        .header {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .header p {
            margin: 10px 0 0;
            opacity: 0.9;
        }
        .container {
            max-width: 800px;
            margin: -30px auto 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .article {
            padding: 40px;
        }
        .article h2 {
            color: #333;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }
        .article p {
            color: #555;
            margin-bottom: 20px;
        }
        .meta {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 30px;
        }
        .footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>我的技术博客</h1>
        <p>分享编程经验与技术见解</p>
    </div>
    
    <div class="container">
        <article class="article">
            <h1>如何构建现代化的网页</h1>
            <div class="meta">
                发布时间: 2024年1月1日 | 作者: 开发者
            </div>
            
            <h2>前言</h2>
            <p>在现代Web开发中，构建一个优秀的网页需要考虑多个方面：用户体验、性能优化、响应式设计等。本文将介绍一些最佳实践。</p>
            
            <h2>设计原则</h2>
            <p>优秀的网页设计应该遵循以下原则：</p>
            <ul>
                <li>简洁明了的布局</li>
                <li>一致的视觉风格</li>
                <li>良好的可访问性</li>
                <li>快速的加载速度</li>
            </ul>
            
            <h2>技术实现</h2>
            <p>使用HTML5、CSS3和现代JavaScript框架可以帮助我们构建更好的用户体验。同时，响应式设计确保网页在各种设备上都能正常显示。</p>
            
            <h2>总结</h2>
            <p>构建现代化网页是一个持续学习和改进的过程。通过不断实践和学习新技术，我们可以创造出更优秀的Web体验。</p>
        </article>
    </div>
    
    <div class="footer">
        <p>&copy; 2024 我的博客. 保留所有权利.</p>
    </div>
</body>
</html>`,               

                产品着陆页: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>产品着陆页</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
        }
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 20px;
        }
        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease;
        }
        .hero-content p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: fadeInUp 1s ease 0.2s both;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease 0.4s both;
        }
        .cta-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        .features {
            padding: 80px 20px;
            background: #f8f9fa;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }
        .feature {
            text-align: center;
            padding: 40px 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .feature:hover {
            transform: translateY(-10px);
        }
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #333;
        }
        .feature p {
            color: #666;
        }
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
        }
        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>🚀 创新产品</h1>
            <p>革命性的解决方案，让您的工作更高效、更智能</p>
            <a href="#features" class="cta-button">了解更多</a>
        </div>
    </section>
    
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">为什么选择我们？</h2>
            <p class="section-subtitle">我们的产品具有以下核心优势，帮助您实现更好的业务成果</p>
            
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>极速体验</h3>
                    <p>采用最新技术架构，提供闪电般的响应速度，让您的工作效率提升10倍。</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🛡️</div>
                    <h3>安全可靠</h3>
                    <p>企业级安全保障，多重加密技术确保您的数据安全无忧。</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🎯</div>
                    <h3>精准智能</h3>
                    <p>AI驱动的智能分析，为您提供精准的数据洞察和决策支持。</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`,
                代码世界博客模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="暗色技术博客 - 探索代码世界，分享编程知识与技术洞见">
    <meta name="keywords" content="编程, JavaScript, 技术博客, 异步编程">
    <meta name="author" content="小刚">
    <title>暗色技术博客 - 代码世界</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Noto Sans SC', 'Roboto', sans-serif;
            line-height: 1.7;
            background-color: #121212;
            color: #e0e0e0;
            overflow-x: hidden;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
            padding: 3rem 1rem;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .header h1 {
            font-size: 2.8rem;
            color: #00adb5;
            margin-bottom: 0.5rem;
        }

        .header p {
            font-size: 1.1rem;
            color: #b0b0b0;
        }

        /* Navigation */
        .nav {
            background: #1e1e1e;
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        .nav a {
            color: #e0e0e0;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav a:hover {
            color: #00adb5;
        }

        /* Main Container */
        .main-container {
            max-width: 1200px;
            margin: 2rem auto;
            display: flex;
            gap: 2rem;
            padding: 0 1rem;
        }

        /* Article Section */
        .article-container {
            flex: 3;
            background: #222222;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .article h1 {
            font-size: 2.2rem;
            color: #00adb5;
            margin-bottom: 1rem;
        }

        .meta {
            font-size: 0.9rem;
            color: #999;
            margin-bottom: 1.5rem;
            display: flex;
            gap: 1rem;
        }

        .article h2 {
            font-size: 1.6rem;
            color: #e0e0e0;
            border-left: 5px solid #00adb5;
            padding-left: 0.8rem;
            margin: 1.5rem 0 1rem;
        }

        .article p {
            margin-bottom: 1.2rem;
            font-size: 1rem;
        }

        .article code {
            background: #333;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }

        .article pre {
            background: #333;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* Sidebar */
        .sidebar {
            flex: 1;
            background: #222222;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .sidebar h3 {
            font-size: 1.4rem;
            color: #00adb5;
            margin-bottom: 1rem;
        }

        .sidebar ul {
            list-style: none;
        }

        .sidebar ul li {
            margin-bottom: 0.8rem;
        }

        .sidebar a {
            color: #e0e0e0;
            text-decoration: none;
        }

        .sidebar a:hover {
            color: #00adb5;
        }

        /* Buttons */
        .button {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background: #00adb5;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: background 0.3s;
            margin: 1rem 0;
        }

        .button:hover {
            background: #008c93;
        }

        /* Social Sharing */
        .social-share {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
        }

        .social-share a {
            color: #e0e0e0;
            font-size: 1.5rem;
            transition: color 0.3s;
        }

        .social-share a:hover {
            color: #00adb5;
        }

        /* Footer */
        .footer {
            background: #1e1e1e;
            color: #999;
            text-align: center;
            padding: 2rem;
            margin-top: 2rem;
            border-top: 1px solid #333;
        }

        .footer a {
            color: #00adb5;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
            .main-container {
                flex-direction: column;
            }
            .sidebar {
                order: -1;
            }
        }

        @media (max-width: 600px) {
            .header h1 {
                font-size: 2rem;
            }
            .nav ul {
                flex-direction: column;
                text-align: center;
            }
            .article-container, .sidebar {
                padding: 1rem;
            }
            .article h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>代码世界</h1>
        <p>探索编程的奥秘，分享技术与洞见</p>
    </header>

    <nav class="nav">
        <ul>
            <li><a href="#home">首页</a></li>
            <li><a href="#articles">文章</a></li>
            <li><a href="#tutorials">教程</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#contact">联系</a></li>
        </ul>
    </nav>

    <div class="main-container">
        <section class="article-container">
            <article class="article">
                <h1>深入理解JavaScript异步编程</h1>
                <div class="meta">
                    <span>发布时间: 2025年6月2日</span> | <span>作者: 小刚</span>
                </div>

                <h2>什么是异步编程？</h2>
                <p>异步编程是JavaScript的核心特性，允许非阻塞操作以提高程序效率。现代JavaScript通过 <code>Promise</code>、<code>async/await</code> 等机制简化了异步操作，使代码更易读和维护。</p>

                <h2>代码示例</h2>
                <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
                </code></pre>

                <h2>注意事项</h2>
                <p>异步编程需要关注错误处理、性能优化以及避免回调地狱。合理使用 <code>try/catch</code> 和 <code>Promise.all</code> 可以提升代码健壮性。</p>

                <h2>进阶技巧</h2>
                <p>例如，可以通过 <code>Promise.race</code> 实现超时控制，或者使用 <code>async/await</code> 结合 <code>for...of</code> 处理顺序执行的异步任务。</p>

                <a href="#more" class="button">了解更多</a>

                <div class="social-share">
                    <p>分享文章：</p>
                    <a href="#" title="分享到微信"><i class="fab fa-weixin"></i></a>
                    <a href="#" title="分享到微博"><i class="fab fa-weibo"></i></a>
                    <a href="#" title="分享到Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </article>
        </section>

        <aside class="sidebar">
            <h3>热门文章</h3>
            <ul>
                <li><a href="#">JavaScript 事件循环详解</a></li>
                <li><a href="#">TypeScript 入门指南</a></li>
                <li><a href="#">React 性能优化技巧</a></li>
            </ul>

            <h3>分类</h3>
            <ul>
                <li><a href="#">前端开发</a></li>
                <li><a href="#">后端开发</a></li>
                <li><a href="#">全栈开发</a></li>
            </ul>

            <h3>订阅</h3>
            <p>订阅我们的 newsletter 获取最新文章！</p>
            <form>
                <input type="email" placeholder="输入您的邮箱" style="padding: 0.5rem; width: 100%; margin-bottom: 1rem; border-radius: 4px; border: none;">
                <button type="submit" class="button">订阅</button>
            </form>
        </aside>
    </div>

    <footer class="footer">
        <p>© 2025 代码世界. 保留所有权利. | <a href="#privacy">隐私政策</a> | <a href="#terms">服务条款</a></p>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>`,
                个人作品集: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人作品集</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .header {
            background: linear-gradient(135deg, #2c3e50, #3498db);
            color: white;
            padding: 100px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .nav {
            background: rgba(255, 255, 255, 0.95);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
        }
        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }
        .nav a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        .nav a:hover {
            color: #3498db;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .section {
            padding: 80px 0;
        }
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 60px;
            color: #2c3e50;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
        }
        .project-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .project-image {
            height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
        }
        .project-content {
            padding: 30px;
        }
        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #2c3e50;
        }
        .project-content p {
            color: #666;
            margin-bottom: 20px;
        }
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .tag {
            background: #ecf0f1;
            color: #2c3e50;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
        }
        .about {
            background: #f8f9fa;
        }
        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            align-items: center;
        }
        .about-text {
            font-size: 1.1rem;
            color: #555;
        }
        .skills-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .skill-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 40px 20px;
        }
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            .nav ul {
                flex-direction: column;
                gap: 20px;
            }
            .about-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>👋 我是张设计师</h1>
        <p>专注于用户体验设计与前端开发</p>
    </header>
    
    <nav class="nav">
        <ul>
            <li><a href="#projects">作品集</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#contact">联系方式</a></li>
        </ul>
    </nav>
    
    <section class="section" id="projects">
        <div class="container">
            <h2 class="section-title">我的作品</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">🎨</div>
                    <div class="project-content">
                        <h3>电商平台设计</h3>
                        <p>为某知名品牌设计的全新电商平台，提升了用户转化率30%，获得了客户的高度认可。</p>
                        <div class="project-tags">
                            <span class="tag">UI设计</span>
                            <span class="tag">用户体验</span>
                            <span class="tag">响应式</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">📱</div>
                    <div class="project-content">
                        <h3>移动应用界面</h3>
                        <p>简洁直观的移动应用界面设计，注重用户操作的便捷性和视觉的美观性。</p>
                        <div class="project-tags">
                            <span class="tag">移动端</span>
                            <span class="tag">原型设计</span>
                            <span class="tag">交互设计</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">🌐</div>
                    <div class="project-content">
                        <h3>企业官网重设</h3>
                        <p>为传统企业打造现代化官网，融合品牌特色与现代设计理念，提升企业形象。</p>
                        <div class="project-tags">
                            <span class="tag">网页设计</span>
                            <span class="tag">品牌设计</span>
                            <span class="tag">前端开发</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section about" id="about">
        <div class="container">
            <h2 class="section-title">关于我</h2>
            <div class="about-content">
                <div>
                    <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white;">👨‍💻</div>
                </div>
                <div class="about-text">
                    <p>我是一名充满热情的设计师和开发者，拥有5年的用户体验设计经验。我专注于创造既美观又实用的数字产品，相信好的设计能够改变人们的生活方式。</p>
                    <p>我的设计理念是"以用户为中心"，通过深入了解用户需求，创造出真正有价值的产品体验。</p>
                    
                    <div class="skills-list">
                        <div class="skill-item">
                            <strong>UI/UX 设计</strong>
                        </div>
                        <div class="skill-item">
                            <strong>前端开发</strong>
                        </div>
                        <div class="skill-item">
                            <strong>原型设计</strong>
                        </div>
                        <div class="skill-item">
                            <strong>用户研究</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="footer" id="contact">
        <div class="container">
            <h3>让我们一起创造美好的产品</h3>
            <p>📧 contact@designer.com | 📱 +86 138 0000 0000</p>
            <p>&copy; 2024 张设计师作品集. 保留所有权利.</p>
        </div>
    </footer>
</body>
</html>`,  

          探索数字世界的奥秘: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>探索数字世界的奥秘</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --text-color: #333;
            --bg-color: #f8fafc;
            --card-bg: rgba(255, 255, 255, 0.2);
            --border-color: rgba(255, 255, 255, 0.3);
            --primary-color: #667eea;
            --secondary-color: #764ba2;
        }

        [data-theme="dark"] {
            --text-color: #e2e8f0;
            --bg-color: #0f172a;
            --card-bg: rgba(15, 23, 42, 0.2);
            --border-color: rgba(255, 255, 255, 0.1);
        }

        body {
            font-family: 'Microsoft YaHei', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background: url('https://img.tool.hidns.vip/file/1745658101612_illust_128708379_20250415_112946.jpg') center/cover fixed,
                        linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            min-height: 100vh;
            overflow-x: hidden;
            transition: all 0.3s ease;
        }

        /* 粒子背景 */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        /* 鼠标跟随效果 - 彩色粉末 */
        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            transition: all 0.1s ease;
        }

        .cursor-trail {
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            border-radius: 50%;
            mix-blend-mode: screen;
        }

        .powder-particle {
            position: fixed;
            pointer-events: none;
            z-index: 9997;
            border-radius: 50%;
            animation: powderFloat 2s ease-out forwards;
        }

        @keyframes powderFloat {
            0% { opacity: 1; transform: scale(1) rotate(0deg); }
            100% { opacity: 0; transform: scale(0.3) rotate(360deg) translate(var(--random-x), var(--random-y)); }
        }

        /* 页眉 */
        .header {
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-100%); }
            to { opacity: 1; transform: translateY(0); }
        }

        .nav-container {
            max-width: 2400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-menu a {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }

        .nav-menu a:hover {
            background: var(--card-bg);
            transform: translateY(-2px);
        }

        /* 主容器 */
        .container {
            max-width: 2400px;
            margin: 0 auto;
            padding: 8rem 2rem 2rem;
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 3rem;
        }

        /* TOC目录 */
        .toc {
            position: sticky;
            top: 8rem;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            padding: 1.5rem;
            height: fit-content;
            border: 1px solid var(--border-color);
            animation: fadeInLeft 1s ease-out;
        }

        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .toc h3 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .toc ul {
            list-style: none;
        }

        .toc li {
            margin-bottom: 0.5rem;
        }

        .toc a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            display: block;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        .toc a:hover, .toc a.active {
            background: var(--card-bg);
            color: white;
            transform: translateX(5px);
        }

        /* 文章内容 */
        .article {
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--border-color);
            animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .article-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
            text-align: center;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .article-meta {
            text-align: center;
            color: #666;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
        }

        .article-content h2 {
            color: #2c3e50;
            margin: 2rem 0 1rem;
            font-size: 1.8rem;
            border-left: 4px solid var(--primary-color);
            padding-left: 1rem;
        }

        .article-content h3 {
            color: #34495e;
            margin: 1.5rem 0 0.8rem;
            font-size: 1.4rem;
        }

        .article-content p {
            margin-bottom: 1.2rem;
            text-align: justify;
            line-height: 1.8;
        }

        .article-content img {
            max-width: 100%;
            border-radius: 10px;
            margin: 1rem 0;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* 音乐播放器 */
        .music-player {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            z-index: 1000;
            animation: pulse 2s infinite;
        }

        .music-player:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .music-player.playing {
            animation: spin 10s linear infinite;
        }

        @keyframes pulse {
            0%, 100% { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }
            50% { box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4); }
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .music-icon {
            width: 30px;
            height: 30px;
            fill: white;
        }

        /* 工具栏 */
        .toolbar {
            position: fixed;
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 1000;
        }

        .tool-btn {
            width: 50px;
            height: 50px;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: white;
        }

        .tool-btn:hover {
            background: var(--card-bg);
            transform: scale(1.1);
        }

        /* 进度条 */
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            z-index: 9999;
            transition: width 0.3s ease;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .container {
                grid-template-columns: 1fr;
                padding: 6rem 1rem 2rem;
            }

            .toc {
                position: relative;
                top: auto;
                order: 2;
            }

            .nav-menu {
                display: none;
            }

            .toolbar {
                display: none;
            }

            .article {
                padding: 2rem;
            }

            .article-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body data-theme="light">
    <!-- 鼠标跟随效果 -->
    <div class="cursor"></div>

    <!-- 粒子背景 -->
    <div class="particles"></div>

    <!-- 进度条 -->
    <div class="progress-bar"></div>

    <!-- 页眉 -->
    <header class="header">
        <div class="nav-container">
            <a href="#" class="logo">✨ 数字探索</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="#intro">简介</a></li>
                    <li><a href="#ai">人工智能</a></li>
                    <li><a href="#blockchain">区块链</a></li>
                    <li><a href="#iot">物联网</a></li>
                    <li><a href="#future">未来展望</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- 工具栏 -->
    <div class="toolbar">
        <div class="tool-btn" id="themeToggle" title="夜间模式">🌙</div>
        <div class="tool-btn" id="shareBtn" title="分享">📤</div>
        <div class="tool-btn" id="fontIncrease" title="增大字体">A+</div>
        <div class="tool-btn" id="fontDecrease" title="减小字体">A-</div>
        <div class="tool-btn" id="scrollTop" title="返回顶部">↑</div>
    </div>

    <!-- 主容器 -->
    <div class="container">
        <!-- TOC目录 -->
        <aside class="toc">
            <h3>📖 目录</h3>
            <ul>
                <li><a href="#intro" class="toc-link">引言</a></li>
                <li><a href="#ai" class="toc-link">人工智能的崛起</a></li>
                <li><a href="#blockchain" class="toc-link">区块链革命</a></li>
                <li><a href="#iot" class="toc-link">万物互联时代</a></li>
                <li><a href="#future" class="toc-link">未来展望</a></li>
            </ul>
        </aside>

        <!-- 文章内容 -->
        <main class="article">
            <h1 class="article-title">探索数字世界的奥秘</h1>
            <div class="article-meta">
                <p>📅 发布时间: 2025年6月13日 | ✍️ 作者: 数字探索者 | 🏷️ 标签: 科技, 未来, 创新</p>
            </div>

            <div class="article-content">
                <section id="intro">
                    <h2>🌟 引言</h2>
                    <p>在这个日新月异的数字时代，科技的发展速度令人叹为观止。从人工智能到区块链，从物联网到量子计算，每一项技术创新都在深刻地改变着我们的生活方式和工作模式。本文将带您深入探索这些前沿技术的奥秘，了解它们如何塑造我们的未来。</p>
                    <p>数字化转型不仅仅是技术的升级，更是思维方式和商业模式的革命。在这场变革中，我们既是见证者，也是参与者。让我们一起踏上这场精彩的数字之旅。</p>
                </section>

                <section id="ai">
                    <h2>🤖 人工智能的崛起</h2>
                    <h3>机器学习的突破</h3>
                    <p>人工智能技术正在以前所未有的速度发展。深度学习、自然语言处理、计算机视觉等领域的突破，使得AI能够在越来越多的场景中展现出超越人类的能力。从AlphaGo到ChatGPT，每一个里程碑都标志着人工智能技术的重大飞跃。</p>
                    <h3>AI在日常生活中的应用</h3>
                    <p>今天，AI已经悄然融入我们的日常生活。智能手机的语音助手、推荐系统、自动驾驶汽车、医疗诊断辅助等，这些应用正在改变我们与技术互动的方式。AI不再是科幻电影中的概念，而是我们生活中不可或缺的一部分。</p>
                </section>

                <section id="blockchain">
                    <h2>⛓️ 区块链革命</h2>
                    <h3>去中心化的力量</h3>
                    <p>区块链技术以其去中心化、不可篡改的特性，正在重新定义信任的概念。从比特币到智能合约，从DeFi到NFT，区块链正在构建一个全新的数字经济生态系统。这项技术不仅仅是一种存储数据的方式，更是一种全新的价值交换机制。</p>
                    <h3>区块链的实际应用</h3>
                    <p>除了加密货币，区块链技术在供应链管理、数字身份验证、版权保护、投票系统等领域也展现出巨大的潜力。企业和政府正在积极探索如何利用区块链技术提高透明度、降低成本、增强安全性。</p>
                </section>

                <section id="iot">
                    <h2>🌐 万物互联时代</h2>
                    <h3>智能设备的普及</h3>
                    <p>物联网（IoT）技术正在将我们的世界连接成一个巨大的智能网络。从智能家居到工业4.0，从智慧城市到精准农业，数以亿计的设备正在产生、传输和处理数据。这些数据不仅为我们提供了前所未有的洞察，也为人工智能的发展提供了丰富的"养料"。</p>
                    <h3>5G与边缘计算</h3>
                    <p>5G网络的部署和边缘计算技术的发展，为物联网应用提供了更低的延迟和更高的带宽。这使得实时数据处理和响应成为可能，为自动驾驶、远程医疗、工业自动化等应用开辟了新的可能性。</p>
                </section>

                <section id="future">
                    <h2>🚀 未来展望</h2>
                    <h3>技术融合的时代</h3>
                    <p>未来的技术发展将不再是单一技术的突破，而是多种技术的深度融合。AI与区块链的结合可以创造更智能、更可信的系统；IoT与AI的融合可以实现真正的智能化；区块链与IoT的结合可以构建更安全的物联网生态。</p>
                    <h3>面临的挑战与机遇</h3>
                    <p>虽然这些技术为我们带来了巨大的机遇，但也面临着诸多挑战。隐私保护、数据安全、技术伦理、数字鸿沟等问题需要我们认真对待。只有在技术发展与社会责任之间找到平衡，我们才能真正实现技术为人类服务的目标。</p>
                    <p>让我们怀着开放的心态拥抱这个数字化的未来，在享受技术便利的同时，也要承担起相应的责任。数字世界的奥秘等待着我们去探索，让我们一起创造一个更美好的明天。</p>
                </section>
            </div>
        </main>
    </div>

    <!-- 音乐播放器 -->
    <div class="music-player" id="musicToggle">
        <svg class="music-icon" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
    </div>

    <!-- 音频元素 -->
    <audio id="backgroundMusic" loop>
        <source src="https://img.tool.hidns.vip/file/1748916396183_Give me Love_ (feat. nyankobrq)(MP3_320K).mp3" type="audio/mpeg">
        您的浏览器不支持音频播放。
    </audio>

    <script>
        // 粒子系统
        function createParticles() {
            var particlesContainer = document.querySelector('.particles');
            var particleCount = 50;

            for (var i = 0; i < particleCount; i++) {
                var particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // 鼠标跟随效果 - 彩色粉末
        var mouseX = 0, mouseY = 0;
        var cursorX = 0, cursorY = 0;
        var cursor = document.querySelector('.cursor');
        var colors = [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
            '#dda0dd', '#98d8c8', '#f7dc6f', '#bb8fce', '#85c1e9'
        ];

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            if (Math.random() < 0.4) {
                createColorfulPowder(cursorX, cursorY);
            }

            requestAnimationFrame(animateCursor);
        }

        function createColorfulPowder(x, y) {
            var powder = document.createElement('div');
            powder.className = 'powder-particle';
            
            var size = Math.random() * 8 + 4;
            var color = colors[Math.floor(Math.random() * colors.length)];
            var randomX = (Math.random() - 0.5) * 100 + 'px';
            var randomY = (Math.random() - 0.5) * 100 + 'px';
            
            powder.style.width = size + 'px';
            powder.style.height = size + 'px';
            powder.style.left = x + 'px';
            powder.style.top = y + 'px';
            powder.style.background = 'radial-gradient(circle, ' + color + ', ' + color + '80)';
            powder.style.setProperty('--random-x', randomX);
            powder.style.setProperty('--random-y', randomY);
            
            document.body.appendChild(powder);

            setTimeout(function() { powder.remove(); }, 2000);
        }

        function createTrail(x, y) {
            var trail = document.createElement('div');
            trail.className = 'cursor-trail';
            var size = Math.random() * 12 + 6;
            var color = colors[Math.floor(Math.random() * colors.length)];
            
            trail.style.width = size + 'px';
            trail.style.height = size + 'px';
            trail.style.left = x + 'px';
            trail.style.top = y + 'px';
            trail.style.background = 'radial-gradient(circle, ' + color + ', transparent)';
            
            document.body.appendChild(trail);

            setTimeout(function() {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
                trail.style.transition = 'all 0.5s ease-out';
                setTimeout(function() { trail.remove(); }, 500);
            }, 100);
        }

        // 滚动进度条
        function updateProgressBar() {
            var scrollTop = window.pageYOffset;
            var docHeight = document.body.scrollHeight - window.innerHeight;
            var scrollPercent = (scrollTop / docHeight) * 100;
            document.querySelector('.progress-bar').style.width = scrollPercent + '%';
        }

        // TOC活跃状态
        function updateTOC() {
            var sections = document.querySelectorAll('section[id]');
            var tocLinks = document.querySelectorAll('.toc-link');
            
            var current = '';
            sections.forEach(function(section) {
                var sectionTop = section.offsetTop - 100;
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }

        // 音乐播放控制
        var isPlaying = false;
        var audio = document.getElementById('backgroundMusic');
        var musicPlayer = document.querySelector('.music-player');

        function toggleMusic() {
            if (isPlaying) {
                audio.pause();
                musicPlayer.classList.remove('playing');
                isPlaying = false;
            } else {
                audio.play().catch(function(error) {
                    console.log('音频播放失败:', error);
                });
                musicPlayer.classList.add('playing');
                isPlaying = true;
            }
        }

        // 工具函数
        function toggleNightMode() {
            var body = document.body;
            var isDark = body.getAttribute('data-theme') === 'dark';
            body.setAttribute('data-theme', isDark ? 'light' : 'dark');
            document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
        }

        function increaseFontSize() {
            var article = document.querySelector('.article-content');
            var currentSize = window.getComputedStyle(article).fontSize;
            var newSize = Math.min(parseFloat(currentSize) * 1.1, 24);
            article.style.fontSize = newSize + 'px';
        }

        function decreaseFontSize() {
            var article = document.querySelector('.article-content');
            var currentSize = window.getComputedStyle(article).fontSize;
            var newSize = Math.max(parseFloat(currentSize) * 0.9, 12);
            article.style.fontSize = newSize + 'px';
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function shareArticle() {
            if (navigator.share) {
                navigator.share({
                    title: document.querySelector('.article-title').textContent,
                    text: '探索数字世界的奥秘，了解人工智能、区块链和物联网的未来！',
                    url: window.location.href
                }).catch(function(error) {
                    console.log('分享失败:', error);
                });
            } else {
                navigator.clipboard.writeText(window.location.href).then(function() {
                    var shareBtn = document.getElementById('shareBtn');
                    shareBtn.textContent = '✅';
                    setTimeout(function() { shareBtn.textContent = '📤'; }, 2000);
                }).catch(function(error) {
                    console.log('复制失败:', error);
                });
            }
        }

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // 事件监听
        window.addEventListener('scroll', function() {
            updateProgressBar();
            updateTOC();
        });

        // 初始化
        window.addEventListener('load', function() {
            createParticles();
            animateCursor();
            updateProgressBar();
            updateTOC();

            document.getElementById('themeToggle').addEventListener('click', toggleNightMode);
            document.getElementById('shareBtn').addEventListener('click', shareArticle);
            document.getElementById('fontIncrease').addEventListener('click', increaseFontSize);
            document.getElementById('fontDecrease').addEventListener('click', decreaseFontSize);
            document.getElementById('scrollTop').addEventListener('click', scrollToTop);
            document.getElementById('musicToggle').addEventListener('click', toggleMusic);
        });

        // 元素悬停效果
        document.querySelectorAll('.tool-btn, .nav-menu a, .toc a').forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(255, 255, 255, 0.3)';
            });
            el.addEventListener('mouseleave', function() {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'transparent';
            });
        });
    </script>
</body>
</html>`,
    
           美化博客模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>现代化博客 - 文章标题</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #667eea;
            --secondary-color: #764ba2;
            --text-color: #333;
            --bg-color: #f8fafc;
            --card-bg: rgba(255, 255, 255, 0.75);
            --border-color: rgba(255, 255, 255, 0.3);
            --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        [data-theme="dark"] {
            --text-color: #e2e8f0;
            --bg-color: #0f172a;
            --card-bg: rgba(15, 23, 42, 0.75);
            --border-color: rgba(255, 255, 255, 0.1);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: var(--text-color);
            line-height: 1.6;
            min-height: 100vh;
            transition: all 0.3s ease;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            backdrop-filter: blur(10px);
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            box-shadow: var(--shadow);
        }

        /* 页眉 */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 30px;
            border-bottom: 2px solid var(--border-color);
            margin-bottom: 30px;
            background: var(--card-bg);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow);
            position: relative;
            z-index: 10;
        }

        .logo {
            font-size: 28px;
            font-weight: 800;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            letter-spacing: -0.5px;
        }

        .header-nav {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .nav-link {
            color: var(--text-color);
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 25px;
            transition: all 0.3s ease;
            font-weight: 500;
            opacity: 0.8;
        }

        .nav-link:hover {
            background: rgba(102, 126, 234, 0.1);
            opacity: 1;
            transform: translateY(-1px);
        }

        .controls {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }

        .control-btn {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid var(--border-color);
            border-radius: 25px;
            padding: 10px 18px;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            color: var(--text-color);
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .control-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
            background: rgba(255, 255, 255, 1);
        }

        .control-btn:active {
            transform: translateY(0);
        }

        /* 主内容区域 */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
            margin-bottom: 30px;
        }

        .article {
            background: var(--card-bg);
            border-radius: 15px;
            padding: 30px;
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
        }

        .article h1 {
            font-size: 32px;
            margin-bottom: 20px;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .article-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            color: var(--text-color);
            opacity: 0.7;
            font-size: 14px;
        }

        .article h2 {
            font-size: 24px;
            margin: 30px 0 15px 0;
            color: var(--primary-color);
        }

        .article h3 {
            font-size: 20px;
            margin: 25px 0 10px 0;
            color: var(--secondary-color);
        }

        .article p {
            margin-bottom: 15px;
            text-align: justify;
        }

        /* TOC 目录 */
        .toc {
            background: var(--card-bg);
            border-radius: 15px;
            padding: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            height: fit-content;
            position: sticky;
            top: 20px;
        }

        .toc h3 {
            margin-bottom: 15px;
            color: var(--primary-color);
            font-size: 18px;
        }

        .toc ul {
            list-style: none;
        }

        .toc li {
            margin-bottom: 8px;
        }

        .toc a {
            color: var(--text-color);
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
            display: block;
            position: relative;
        }

        .toc a:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: translateX(5px);
        }

        .toc a.active {
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: white;
        }

        /* 页脚 */
        footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid var(--border-color);
            margin-top: 30px;
            opacity: 0.7;
        }

        /* 音乐控制器 */
        .music-controls {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 15px;
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow);
            z-index: 1000;
        }

        .music-btn {
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .music-btn:hover {
            transform: scale(1.1);
        }

        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .container {
            animation: fadeInUp 0.8s ease;
        }

        /* 滚动条美化 */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, var(--secondary-color), var(--primary-color));
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 15px;
                border-radius: 15px;
            }

            .main-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .toc {
                position: static;
                order: -1;
            }

            .article {
                padding: 20px;
            }

            .article h1 {
                font-size: 24px;
            }

            header {
                flex-direction: column;
                gap: 20px;
                padding: 20px;
                text-align: center;
            }

            .header-nav {
                order: 2;
                flex-wrap: wrap;
                justify-content: center;
                gap: 15px;
            }

            .controls {
                order: 3;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }

            .control-btn {
                font-size: 12px;
                padding: 8px 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 页眉 -->
        <header>
            <div class="logo">🌟 现代化博客</div>
            <nav class="header-nav">
                <a href="#" class="nav-link">首页</a>
                <a href="#" class="nav-link">文章</a>
                <a href="#" class="nav-link">分类</a>
                <a href="#" class="nav-link">关于</a>
            </nav>
            <div class="controls">
                <button class="control-btn" id="themeToggle">🌙 夜间模式</button>
                <button class="control-btn" id="fontSizeToggle">🔍 字体大小</button>
                <button class="control-btn" id="shareBtn">📤 分享</button>
            </div>
        </header>

        <!-- 主内容 -->
        <div class="main-content">
            <!-- 文章内容 -->
            <article class="article">
                <h1>现代化Web设计指南</h1>
                <div class="article-meta">
                    <span>📅 2025年6月18日</span>
                    <span>👤 作者：设计师</span>
                    <span>🏷️ 标签：Web设计, UI/UX</span>
                    <span>⏱️ 阅读时间：5分钟</span>
                </div>

                <p>在当今数字化时代，现代化的Web设计不仅仅是美观的表现，更是用户体验的核心。本文将为您详细介绍如何创建一个既美观又实用的现代化网站。</p>

                <h2 id="design-principles">设计原则</h2>
                <p>现代化Web设计遵循几个核心原则：简洁性、一致性、可访问性和响应式设计。这些原则确保您的网站能够为所有用户提供优质的体验。</p>

                <h3 id="simplicity">简洁性</h3>
                <p>简洁的设计能够让用户快速找到所需信息，避免视觉干扰。使用充足的空白空间，精心选择的字体，以及有意义的颜色搭配。</p>

                <h3 id="consistency">一致性</h3>
                <p>保持设计元素的一致性，包括颜色、字体、间距和交互方式。这有助于建立用户的信任感和使用习惯。</p>

                <h2 id="visual-elements">视觉元素</h2>
                <p>现代化设计广泛使用毛玻璃效果、渐变背景、圆角边框和微妙的阴影。这些元素共同创造出深度感和现代感。</p>

                <h3 id="glass-effect">毛玻璃效果</h3>
                <p>毛玻璃效果通过backdrop-filter属性实现，为界面增添层次感和现代感。它特别适合用于卡片、导航栏和模态框。</p>

                <h3 id="gradients">渐变背景</h3>
                <p>渐变背景能够创造视觉吸引力，但应该谨慎使用，确保不会影响文本的可读性。</p>

                <h2 id="responsive-design">响应式设计</h2>
                <p>响应式设计确保您的网站在各种设备上都能完美显示。使用弹性网格系统、灵活的图片和媒体查询来实现这一目标。</p>

                <h3 id="mobile-first">移动优先</h3>
                <p>从移动设备开始设计，然后逐步增强到桌面版本。这种方法确保核心功能在所有设备上都能正常工作。</p>

                <h2 id="accessibility">可访问性</h2>
                <p>确保您的网站对所有用户都是可访问的，包括使用辅助技术的用户。这包括适当的颜色对比度、键盘导航支持和语义化的HTML结构。</p>

                <p>总结来说，现代化Web设计是技术与美学的完美结合。通过遵循这些原则和最佳实践，您可以创建出既美观又实用的网站。</p>
            </article>

            <!-- TOC 目录 -->
            <aside class="toc">
                <h3>📋 文章目录</h3>
                <ul>
                    <li><a href="#design-principles">设计原则</a>
                        <ul>
                            <li><a href="#simplicity">简洁性</a></li>
                            <li><a href="#consistency">一致性</a></li>
                        </ul>
                    </li>
                    <li><a href="#visual-elements">视觉元素</a>
                        <ul>
                            <li><a href="#glass-effect">毛玻璃效果</a></li>
                            <li><a href="#gradients">渐变背景</a></li>
                        </ul>
                    </li>
                    <li><a href="#responsive-design">响应式设计</a>
                        <ul>
                            <li><a href="#mobile-first">移动优先</a></li>
                        </ul>
                    </li>
                    <li><a href="#accessibility">可访问性</a></li>
                </ul>
            </aside>
        </div>

        <!-- 页脚 -->
        <footer>
            <p>© 2025 现代化博客. 用心设计，用爱分享。</p>
        </footer>
    </div>

    <!-- 音乐控制器 -->
    <div class="music-controls">
        <button class="music-btn" id="musicToggle">🎵</button>
    </div>

    <!-- 背景音乐 -->
    <audio id="bgMusic" loop>
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.wav" type="audio/wav">
        您的浏览器不支持音频播放。
    </audio>

    <script>
        // 主题切换
        var themeToggle = document.getElementById('themeToggle');
        var body = document.body;
        var isDarkTheme = false;

        themeToggle.addEventListener('click', function() {
            isDarkTheme = !isDarkTheme;
            body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
            themeToggle.textContent = isDarkTheme ? '☀️ 日间模式' : '🌙 夜间模式';
        });

        // 字体大小切换
        var fontSizeToggle = document.getElementById('fontSizeToggle');
        var fontSize = 16;

        fontSizeToggle.addEventListener('click', function() {
            fontSize = fontSize === 16 ? 18 : fontSize === 18 ? 20 : 16;
            document.documentElement.style.fontSize = fontSize + 'px';
            fontSizeToggle.textContent = '🔍 字体 ' + fontSize + 'px';
        });

        // 背景音乐控制
        var musicToggle = document.getElementById('musicToggle');
        var bgMusic = document.getElementById('bgMusic');
        var isMusicPlaying = false;

        musicToggle.addEventListener('click', function() {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicToggle.textContent = '🎵';
            } else {
                bgMusic.play().catch(function(error) {
                    console.log('音频播放失败:', error);
                });
                musicToggle.textContent = '🔇';
            }
            isMusicPlaying = !isMusicPlaying;
        });

        // TOC 目录高亮
        var tocLinks = document.querySelectorAll('.toc a');
        var sections = document.querySelectorAll('h2[id], h3[id]');

        function highlightTOC() {
            var currentId = '';
            sections.forEach(function(section) {
                var sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    currentId = section.getAttribute('id');
                }
            });

            tocLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightTOC);

        // 平滑滚动
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var targetId = link.getAttribute('href').substring(1);
                var targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 初始化 TOC 高亮
        highlightTOC();

        // 分享功能
        var shareBtn = document.getElementById('shareBtn');
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: '现代化Web设计指南',
                    text: '查看这篇关于现代化Web设计的精彩文章！',
                    url: window.location.href
                }).catch(function(error) {
                    console.log('分享失败:', error);
                });
            } else {
                navigator.clipboard.writeText(window.location.href).then(function() {
                    shareBtn.textContent = '✅ 已复制链接';
                    setTimeout(function() {
                        shareBtn.textContent = '📤 分享';
                    }, 2000);
                }).catch(function(error) {
                    console.log('复制失败:', error);
                });
            }
        });
    </script>
</body>
</html>`,
    
           博客文章模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>博客文章 - 我的博客</title>
    <style>
        :root {
            --primary-color: #667eea;
            --secondary-color: #764ba2;
            --text-color: #333;
            --light-text: #777;
            --border-color: rgba(255,255,255,0.2);
            --bg-color: #f0f2f5;
            --glass-bg: rgba(255, 255, 255, 0.75);
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
        }
        
        /* 导航栏样式 */
        .navbar {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 0 20px;
            border-bottom: 1px solid var(--border-color);
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        /* 页眉样式 */
        .header {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
            color: white;
            padding: 100px 20px 60px;
            text-align: center;
            margin-bottom: 40px;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
        
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        
        .header p {
            margin: 10px 0 0;
            opacity: 0.9;
        }
        
        /* 主内容布局 */
        .main-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 40px;
            padding: 0 20px;
        }
        
        /* 文章容器 - 毛玻璃效果 */
        .article-container {
            flex: 1;
            background: var(--glass-bg);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
        }
        
        .article {
            padding: 40px;
        }
        
        .article h1 {
            color: var(--text-color);
            margin-top: 0;
        }
        
        .article h2 {
            color: var(--text-color);
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
            margin-top: 40px;
        }
        
        .article h3 {
            color: var(--text-color);
            margin-top: 30px;
        }
        
        .article p {
            color: var(--light-text);
            margin-bottom: 20px;
        }
        
        .article ul, .article ol {
            margin-bottom: 20px;
            padding-left: 20px;
        }
        
        .meta {
            color: var(--light-text);
            font-size: 0.9rem;
            margin-bottom: 30px;
            display: flex;
            gap: 15px;
        }
        
        /* 侧边栏目录 - 桌面样式 */
        .sidebar {
            width: 300px;
            position: sticky;
            top: 90px;
            height: fit-content;
            align-self: flex-start;
        }
        
        .toc {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            padding: 25px;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }
        
        .toc-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin: 0 0 20px 0;
            color: var(--primary-color);
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
        }
        
        .toc-title::before {
            content: "📑";
            margin-right: 10px;
            font-size: 1.1em;
        }
        
        .toc-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .toc-list li {
            margin-bottom: 10px;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .toc-list li:hover {
            transform: translateX(5px);
        }
        
        .toc-list a {
            color: var(--text-color);
            text-decoration: none;
            transition: all 0.3s ease;
            display: block;
            padding: 8px 12px;
            border-radius: 6px;
        }
        
        .toc-list a:hover {
            color: white;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .toc-list .level-2 {
            padding-left: 20px;
        }
        
        .toc-list .level-3 {
            padding-left: 35px;
        }
        
        /* 悬浮球样式 - 移动端 */
        .toc-floating {
            display: none;
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
            z-index: 998;
            font-size: 1.5rem;
        }
        
        .toc-floating::before {
            content: "📑";
        }
        
        .toc-popup {
            display: none;
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 280px;
            max-height: 70vh;
            overflow-y: auto;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            padding: 20px;
            border: 1px solid var(--border-color);
            z-index: 997;
        }
        
        .toc-popup.active {
            display: block;
        }
        
        /* 返回顶部按钮 */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }
        
        .back-to-top::after {
            content: "↑";
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        /* 页脚样式 */
        .footer {
            background: rgba(51, 51, 51, 0.8);
            color: white;
            text-align: center;
            padding: 40px 20px;
            margin-top: 60px;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
        
        /* 响应式设计 */
        @media (max-width: 1080px) {
            .sidebar {
                display: none;
            }
            
            .toc-floating {
                display: flex;
            }
            
            .main-container {
                flex-direction: column;
            }
            
            .article-container {
                margin-bottom: 0;
            }
            
            .back-to-top {
                bottom: 100px;
            }
        }
        
        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
                height: auto;
                padding: 15px 0;
            }
            
            .nav-links {
                margin-top: 15px;
                gap: 15px;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .header {
                padding: 80px 20px 40px;
            }
            
            .meta {
                flex-direction: column;
                gap: 5px;
            }
            
            .toc-floating {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
                bottom: 20px;
                right: 20px;
            }
            
            .toc-popup {
                width: calc(100% - 40px);
                right: 20px;
                bottom: 80px;
            }
            
            .back-to-top {
                width: 40px;
                height: 40px;
                bottom: 90px;
                right: 20px;
            }
        }
    </style>
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">技术博客</a>
            <div class="nav-links">
                <a href="#">首页</a>
                <a href="#">文章</a>
                <a href="#">分类</a>
                <a href="#">关于</a>
                <a href="#">联系</a>
            </div>
        </div>
    </nav>
    
    <!-- 页眉 -->
    <div class="header">
        <h1>我的技术博客</h1>
        <p>分享编程经验与技术见解</p>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-container">
        <!-- 文章内容 -->
        <div class="article-container">
            <article class="article">
                <h1>如何构建现代化的网页</h1>
                <div class="meta">
                    <span>发布时间: 2024年1月1日</span>
                    <span>作者: 开发者</span>
                    <span>分类: Web开发</span>
                </div>
                
                <h2 id="preface">前言</h2>
                <p>在现代Web开发中，构建一个优秀的网页需要考虑多个方面：用户体验、性能优化、响应式设计等。本文将介绍一些最佳实践。</p>
                
                <h2 id="design-principles">设计原则</h2>
                <p>优秀的网页设计应该遵循以下原则：</p>
                <ul>
                    <li>简洁明了的布局</li>
                    <li>一致的视觉风格</li>
                    <li>良好的可访问性</li>
                    <li>快速的加载速度</li>
                </ul>
                
                <h3 id="user-experience">用户体验</h3>
                <p>良好的用户体验是现代化网页的核心。我们需要考虑用户的使用习惯、浏览设备的多样性以及无障碍访问需求。</p>
                
                <h2 id="technical-implementation">技术实现</h2>
                <p>使用HTML5、CSS3和现代JavaScript框架可以帮助我们构建更好的用户体验。同时，响应式设计确保网页在各种设备上都能正常显示。</p>
                
                <h3 id="responsive-design">响应式设计</h3>
                <p>通过媒体查询和弹性布局，我们可以创建适应不同屏幕尺寸的网页。这包括移动设备、平板电脑和桌面电脑。</p>
                
                <h3 id="performance">性能优化</h3>
                <p>优化图片、使用CDN、代码拆分和懒加载等技术可以显著提高网页加载速度，改善用户体验。</p>
                
                <h2 id="conclusion">总结</h2>
                <p>构建现代化网页是一个持续学习和改进的过程。通过不断实践和学习新技术，我们可以创造出更优秀的Web体验。</p>
            </article>
        </div>
        
        <!-- 侧边栏目录 - 桌面版 -->
        <aside class="sidebar">
            <div class="toc">
                <h3 class="toc-title">文章目录</h3>
                <ul class="toc-list">
                    <li><a href="#preface">前言</a></li>
                    <li>
                        <a href="#design-principles">设计原则</a>
                        <ul class="toc-list">
                            <li class="level-2"><a href="#user-experience">用户体验</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#technical-implementation">技术实现</a>
                        <ul class="toc-list">
                            <li class="level-2"><a href="#responsive-design">响应式设计</a></li>
                            <li class="level-2"><a href="#performance">性能优化</a></li>
                        </ul>
                    </li>
                    <li><a href="#conclusion">总结</a></li>
                </ul>
            </div>
        </aside>
    </div>
    
    <!-- 侧边栏目录 - 移动悬浮球版 -->
    <div class="toc-floating" id="tocFloating"></div>
    <div class="toc-popup" id="tocPopup">
        <h3 class="toc-title">文章目录</h3>
        <ul class="toc-list">
            <li><a href="#preface">前言</a></li>
            <li>
                <a href="#design-principles">设计原则</a>
                <ul class="toc-list">
                    <li class="level-2"><a href="#user-experience">用户体验</a></li>
                </ul>
            </li>
            <li>
                <a href="#technical-implementation">技术实现</a>
                <ul class="toc-list">
                    <li class="level-2"><a href="#responsive-design">响应式设计</a></li>
                    <li class="level-2"><a href="#performance">性能优化</a></li>
                </ul>
            </li>
            <li><a href="#conclusion">总结</a></li>
        </ul>
    </div>
    
    <!-- 返回顶部按钮 -->
    <div class="back-to-top" id="backToTop"></div>
    
    <!-- 页脚 -->
    <div class="footer">
        <p>&copy; 2024 我的博客. 保留所有权利.</p>
    </div>

    <script>
        // 返回顶部按钮功能
        const backToTopButton = document.getElementById('backToTop');
        
        // 当用户滚动页面时显示/隐藏按钮
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // 点击按钮返回顶部
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // TOC悬浮球功能
        const tocFloating = document.getElementById('tocFloating');
        const tocPopup = document.getElementById('tocPopup');
        
        // 点击悬浮球显示/隐藏目录
        tocFloating.addEventListener('click', (e) => {
            e.stopPropagation();
            tocPopup.classList.toggle('active');
        });
        
        // 点击页面其他区域隐藏目录
        document.addEventListener('click', () => {
            tocPopup.classList.remove('active');
        });
        
        // 阻止目录内容点击事件冒泡
        tocPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // 点击目录链接后隐藏目录
        const tocLinks = tocPopup.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', () => {
                tocPopup.classList.remove('active');
            });
        });
    </script>
</body>
</html>`
};

//个人作品集: ``
// 自动渲染模板选择区
(function() {
    function getTitleAndDesc(key, value) {
        if (typeof value === 'object' && value !== null) {
            return {
                title: value.title || key,
                desc: value.desc || 'HTML模板',
            };
        }
        // 兼容字符串模板
        return {
            title: key,
            desc: 'HTML模板',
        };
    }
    document.addEventListener('DOMContentLoaded', function() {
        var grid = document.getElementById('templates-grid');
        if (!grid || !window.templates) return;
        grid.innerHTML = '';
        Object.entries(window.templates).forEach(function([key, value]) {
            var meta = getTitleAndDesc(key, value);
            var item = document.createElement('div');
            item.className = 'template-item';
            item.onclick = function() { loadTemplate(key); };
            item.innerHTML =
                '<div class="template-title">' + meta.title + '</div>' +
                '<div class="template-desc">' + meta.desc + '</div>';
            grid.appendChild(item);
        });
    });

    // 优化 loadTemplate 兼容对象和字符串
    if (typeof window.loadTemplate === 'function') {
        var oldLoadTemplate = window.loadTemplate;
        window.loadTemplate = function(templateName) {
            var t = window.templates && window.templates[templateName];
            var code = (typeof t === 'object' && t !== null && 'code' in t) ? t.code : t;
            if (code) {
                if (typeof editor !== 'undefined' && editor.setValue) {
                    editor.setValue(code);
                }
                if (typeof showToast === 'function') {
                    showToast(templateName + '模板已加载！');
                }
            } else {
                if (typeof showToast === 'function') {
                    showToast('模板未找到');
                }
            }
        };
    }
})();
