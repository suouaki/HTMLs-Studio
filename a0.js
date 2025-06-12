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
          樱花文集模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>樱花雨下的诗意文章</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Microsoft YaHei', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
            cursor: none;
            position: relative;
        }

        /* 自定义鼠标 */
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(255, 182, 193, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            box-shadow: 0 0 20px rgba(255, 182, 193, 0.6);
        }

        .custom-cursor::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255, 182, 193, 0.3);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
        }

        /* 樱花雨 */
        .cherry-blossom {
            position: fixed;
            color: #ffb6c1;
            font-size: 20px;
            animation: fall linear infinite;
            pointer-events: none;
            z-index: 1;
            filter: drop-shadow(0 0 5px rgba(255, 182, 193, 0.5));
        }

        @keyframes fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }

        /* 动态背景粒子 */
        .bg-particle {
            position: fixed;
            width: 3px;
            height: 3px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float-particle linear infinite;
            pointer-events: none;
            z-index: 1;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(50px);
                opacity: 0;
            }
        }

        /* 页眉样式 */
        .top-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            transition: all 0.3s ease;
        }

        .header-logo {
            display: flex;
            align-items: center;
            gap: 15px;
            color: white;
            font-size: 1.5em;
            font-weight: bold;
        }

        .logo-icon {
            font-size: 2em;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .header-nav {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .nav-item {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 20px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .nav-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .nav-item:hover::before {
            left: 100%;
        }

        .nav-item:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }

        .header-controls {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        /* 音乐控制器 */
        .music-controller {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            position: relative;
        }

        .music-controller:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.3);
        }

        .music-icon {
            font-size: 20px;
            color: white;
            transition: all 0.3s ease;
        }

        .music-controller.playing .music-icon {
            animation: rotate 2s linear infinite;
        }

        .music-controller.playing::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 60px;
            border: 2px solid rgba(255, 182, 193, 0.6);
            border-radius: 50%;
            animation: ripple 1.5s ease-out infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes ripple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }

        /* 主题切换按钮 */
        .theme-toggle {
            width: 50px;
            height: 25px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 25px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .theme-toggle::before {
            content: '☀️';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 21px;
            height: 21px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .theme-toggle.night::before {
            content: '🌙';
            transform: translateX(25px);
        }

        /* 容器 */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 100px 20px 20px 20px; /* 为页眉留出空间 */
            position: relative;
            z-index: 10;
        }

        /* 标题区域 */
        .header {
            text-align: center;
            margin: 30px 0 80px 0;
            color: white;
            position: relative;
        }

        .main-title {
            font-size: 3.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 1s ease-out;
            background: linear-gradient(45deg, #fff, #ffb6c1, #fff);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out, shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .subtitle {
            font-size: 1.2em;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.3s both;
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

        /* 主要内容区域 */
        .main-content {
            display: flex;
            gap: 30px;
            align-items: flex-start;
        }

        /* TOC目录 */
        .toc {
            width: 280px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 15px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: sticky;
            top: 30px;
            max-height: 80vh;
            overflow-y: auto;
        }

        .toc h3 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.3em;
            text-align: center;
        }

        .toc ul {
            list-style: none;
        }

        .toc li {
            margin-bottom: 12px;
        }

        .toc a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            display: block;
            padding: 8px 15px;
            border-radius: 8px;
            transition: all 0.3s ease;
            font-size: 0.95em;
        }

        .toc a:hover, .toc a.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            transform: translateX(5px);
        }

        /* 文章内容 */
        .article {
            flex: 1;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            line-height: 1.8;
            position: relative;
            overflow: hidden;
        }

        .article::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.03), transparent);
            animation: shine 8s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        }

        .article h2 {
            font-size: 2em;
            margin: 40px 0 20px 0;
            color: #ffb6c1;
            border-bottom: 2px solid rgba(255, 182, 193, 0.3);
            padding-bottom: 10px;
            position: relative;
            animation: slideInLeft 0.8s ease-out;
        }

        .article h2::before {
            content: '🌸';
            position: absolute;
            left: -30px;
            top: 50%;
            transform: translateY(-50%);
            animation: bounce 2s ease-in-out infinite;
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(-50%);
            }
            40% {
                transform: translateY(-60%);
            }
            60% {
                transform: translateY(-55%);
            }
        }

        .article h2:first-child {
            margin-top: 0;
        }

        .article p {
            margin-bottom: 20px;
            text-align: justify;
            font-size: 1.1em;
            animation: fadeInUp 0.6s ease-out;
            transform: translateY(0);
            transition: all 0.3s ease;
        }

        .article p:hover {
            transform: translateY(-2px);
            text-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
        }

        .article blockquote {
            border-left: 4px solid #ffb6c1;
            padding-left: 20px;
            margin: 30px 0;
            font-style: italic;
            background: rgba(255, 182, 193, 0.1);
            padding: 20px;
            border-radius: 10px;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .main-content {
                flex-direction: column;
            }

            .toc {
                width: 100%;
                position: static;
            }

            .main-title {
                font-size: 2.5em;
            }

            .container {
                padding: 15px;
            }

            .article {
                padding: 25px;
            }
        }

        /* 滚动条样式 */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 182, 193, 0.5);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 182, 193, 0.7);
        }
    </style>
</head>
<body>
    <!-- 页眉 -->
    <header class="top-header">
        <div class="header-logo">
            <div class="logo-icon">🌸</div>
            <span>樱花文集</span>
        </div>
        <nav class="header-nav">
            <a href="#spring-arrival" class="nav-item">春日</a>
            <a href="#cherry-blossoms" class="nav-item">樱花</a>
            <a href="#nature-beauty" class="nav-item">自然</a>
            <a href="#life-philosophy" class="nav-item">哲思</a>
        </nav>
        <div class="header-controls">
            <div class="theme-toggle" id="themeToggle"></div>
            <div class="music-controller" id="musicController">
                <div class="music-icon">🎵</div>
            </div>
        </div>
    </header>

    <!-- 自定义鼠标 -->
    <div class="custom-cursor"></div>

    <!-- 音乐控制器 -->
    <div class="music-controller" id="musicController">
        <div class="music-icon">🎵</div>
    </div>

    <!-- 背景音乐 -->
    <audio id="backgroundMusic" loop>
        <source src="https://img.tool.hidns.vip/file/1748628604533_マイライフ(MP3_320K).mp3" type="audio/mpeg">
        <!-- 备用音乐源 -->
        <source src="https://img.tool.hidns.vip/file/1748628604533_マイライフ(MP3_320K).mp3" type="audio/mpeg">
    </audio>

    <div class="container">
        <!-- 标题区域 -->
        <header class="header">
            <h1 class="main-title">樱花雨下的春日诗篇</h1>
            <p class="subtitle">在粉色花瓣飞舞的季节里，品味生活的美好</p>
        </header>

        <!-- 主要内容 -->
        <div class="main-content">
            <!-- TOC目录 -->
            <nav class="toc">
                <h3>📖 文章目录</h3>
                <ul>
                    <li><a href="#spring-arrival" data-section="spring-arrival">春天的到来</a></li>
                    <li><a href="#cherry-blossoms" data-section="cherry-blossoms">樱花的诗意</a></li>
                    <li><a href="#nature-beauty" data-section="nature-beauty">自然之美</a></li>
                    <li><a href="#life-philosophy" data-section="life-philosophy">生活的哲学</a></li>
                    <li><a href="#seasonal-reflection" data-section="seasonal-reflection">季节的思考</a></li>
                </ul>
            </nav>

            <!-- 文章内容 -->
            <article class="article">
                <section id="spring-arrival">
                    <h2>春天的到来</h2>
                    <p>当第一缕春风轻抚大地，万物开始苏醒。樱花树枝头上，嫩绿的新芽悄然绽放，预示着一个充满希望的季节即将来临。在这个时刻，我们不禁要停下匆忙的脚步，去感受那份来自自然的纯真与美好。</p>
                    <p>春天是一个充满魔力的季节，它用温暖的阳光唤醒沉睡的花朵，用轻柔的雨滴滋润干涸的土地。每一片新绿都在诉说着生命的奇迹，每一朵花苞都蕴含着无限的可能。</p>
                    <blockquote>
                        "春风十里，不如你。" 在春天的怀抱中，一切都变得温柔而美好。
                    </blockquote>
                </section>

                <section id="cherry-blossoms">
                    <h2>樱花的诗意</h2>
                    <p>樱花，这个春天的使者，以其短暂而绚烂的绽放，诠释了生命的真谛。粉色的花瓣如雪花般飘洒，在空中翩翩起舞，每一片都承载着诗人的情怀，每一朵都散发着淡淡的清香。</p>
                    <p>日本人称樱花为"桜"，他们将赏樱视为一种艺术，一种对美的追求。在樱花树下，人们席地而坐，品茶赏花，享受这短暂而珍贵的美好时光。这种对瞬间之美的珍视，正是樱花教给我们的人生智慧。</p>
                    <p>樱花的美不仅在于其绚烂的绽放，更在于其优雅的凋零。当花瓣飘落的那一刻，没有哀伤，只有一种超脱的宁静。这种"落红不是无情物，化作春泥更护花"的精神，让我们明白了什么是真正的美。</p>
                </section>

                <section id="nature-beauty">
                    <h2>自然之美</h2>
                    <p>大自然是最伟大的艺术家，她用画笔勾勒出山川河流的轮廓，用调色板调配出四季的色彩。春天的绿意盎然，夏天的绿树成荫，秋天的金黄满地，冬天的银装素裹，每一个季节都有其独特的魅力。</p>
                    <p>在樱花飞舞的春日里，我们更能感受到自然的神奇。那些看似普通的花草树木，在春光的照耀下，都显得格外生动。鸟儿在枝头歌唱，蝴蝶在花间翩跹，一切都充满了生机与活力。</p>
                    <blockquote>
                        "天地有大美而不言。" 自然的美无需言语，它用最真实的姿态展现着生命的奇迹。
                    </blockquote>
                </section>

                <section id="life-philosophy">
                    <h2>生活的哲学</h2>
                    <p>从樱花的生命周期中，我们可以领悟到许多人生的道理。樱花教会我们要珍惜当下，因为美好的时光总是稍纵即逝。它也告诉我们，生命的意义不在于长短，而在于是否绽放出属于自己的光彩。</p>
                    <p>在快节奏的现代生活中，我们常常忘记停下来欣赏身边的美好。樱花的存在提醒我们，要学会放慢脚步，用心去感受生活中的每一个美好瞬间。无论是一杯香茶的温暖，还是一缕阳光的明媚，都值得我们用心去品味。</p>
                    <p>生活就像樱花一样，有绽放就有凋零，有聚散就有离别。重要的是，我们要学会在有限的时间里，活出无限的精彩，让每一天都过得充实而有意义。</p>
                </section>

                <section id="seasonal-reflection">
                    <h2>季节的思考</h2>
                    <p>每个季节都有其独特的美感和意义。春天代表着新生和希望，夏天象征着热情和活力，秋天意味着收获和成熟，冬天则是沉静和思考的时光。在这个循环往复的过程中，我们不断成长，不断领悟生命的真谛。</p>
                    <p>樱花的短暂绽放让我们明白，美好的事物往往是稍纵即逝的，这正是它们珍贵的原因。正如人生中的每一个重要时刻，都需要我们用心去体验，用情去珍藏。</p>
                    <p>在樱花雨中漫步，我们感受到的不仅仅是春天的美好，更是对生命的敬畏和对未来的憧憬。让我们带着这份美好的心境，继续走过人生的每一个季节，在时光的长河中留下属于自己的美丽印记。</p>
                    <blockquote>
                        "落红不是无情物，化作春泥更护花。" 即使是凋零，也要为下一个春天的到来贡献自己的力量。
                    </blockquote>
                </section>
            </article>
        </div>
    </div>

    <script>
        // 自定义鼠标跟随
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // 鼠标悬停效果
        document.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.2)';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });

        // 樱花雨效果
        function createCherryBlossom() {
            const cherryBlossom = document.createElement('div');
            cherryBlossom.className = 'cherry-blossom';
            const cherryTypes = ['🌸', '🌺', '🌹', '🏵️'];
            cherryBlossom.innerHTML = cherryTypes[Math.floor(Math.random() * cherryTypes.length)];
            cherryBlossom.style.left = Math.random() * window.innerWidth + 'px';
            cherryBlossom.style.animationDuration = (Math.random() * 5 + 5) + 's';
            cherryBlossom.style.animationDelay = Math.random() * 2 + 's';
            cherryBlossom.style.fontSize = (Math.random() * 10 + 15) + 'px';
            document.body.appendChild(cherryBlossom);

            setTimeout(() => {
                cherryBlossom.remove();
            }, 10000);
        }

        // 背景粒子效果
        function createBgParticle() {
            const particle = document.createElement('div');
            particle.className = 'bg-particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 20000);
        }

        // 定期创建樱花和粒子
        setInterval(createCherryBlossom, 300);
        setInterval(createBgParticle, 1000);

        // 音乐控制
        const musicController = document.getElementById('musicController');
        const backgroundMusic = document.getElementById('backgroundMusic');
        let isPlaying = false;

        musicController.addEventListener('click', () => {
            if (isPlaying) {
                backgroundMusic.pause();
                musicController.classList.remove('playing');
                musicController.querySelector('.music-icon').textContent = '🎵';
            } else {
                backgroundMusic.play().catch(e => {
                    console.log('音频播放失败:', e);
                });
                musicController.classList.add('playing');
                musicController.querySelector('.music-icon').textContent = '🎶';
            }
            isPlaying = !isPlaying;
        });

        // 主题切换
        const themeToggle = document.getElementById('themeToggle');
        let isDarkMode = false;

        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                themeToggle.classList.add('night');
                document.body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
            } else {
                themeToggle.classList.remove('night');
                document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
        });

        // 页眉滚动效果
        let lastScrollTop = 0;
        const header = document.querySelector('.top-header');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // 向下滚动，隐藏页眉
                header.style.transform = 'translateY(-100%)';
            } else {
                // 向上滚动，显示页眉
                header.style.transform = 'translateY(0)';
            }
            
            // 根据滚动位置改变页眉透明度
            const opacity = Math.min(scrollTop / 200, 0.95);
            header.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
            
            lastScrollTop = scrollTop;
        });

        // TOC导航功能（包含页眉导航）
        const tocLinks = document.querySelectorAll('.toc a, .header-nav a');
        const sections = document.querySelectorAll('article section');

        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100; // 为页眉留出空间
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // 更新active状态
                document.querySelectorAll('.toc a, .header-nav a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // 滚动时高亮当前章节
        function updateTOCHighlight() {
            let currentSection = '';
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) { // 考虑页眉高度
                    currentSection = section.id;
                }
            });

            document.querySelectorAll('.toc a, .header-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', () => {
            updateTOCHighlight();
            
            // 页眉滚动效果
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            const opacity = Math.min(scrollTop / 200, 0.95);
            header.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
            
            lastScrollTop = scrollTop;
        });

        // 页面加载完成后的初始化
        window.addEventListener('load', () => {
            updateTOCHighlight();
            
            // 添加页面加载动画
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 1s ease-in-out';
                document.body.style.opacity = '1';
            }, 100);

            // 为文章段落添加渐现动画
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.article p, .article h2, .article blockquote').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                observer.observe(el);
            });
        });

        // 为链接添加悬停效果
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(255, 182, 193, 1)';
            });

            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'rgba(255, 182, 193, 0.8)';
            });
        });
    </script>
</body>
</html>`
};

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
