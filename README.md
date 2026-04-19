# Personal Website

这是一个用 HTML、CSS、JavaScript 和 Vite 搭建的个人网站，已经配置为可直接部署到 GitHub Pages。

## 本地预览

先安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

生成生产环境文件：

```bash
npm run build
```

构建结果会输出到 `dist/`。

## 如何发布到 GitHub Pages

这个项目已经包含 GitHub Actions 部署文件：

- `.github/workflows/deploy.yml`
- `public/.nojekyll`

只要把当前文件夹推到 GitHub 仓库即可自动部署。

### 1. 初始化 Git 仓库

如果当前文件夹还不是 Git 仓库，在项目根目录执行：

```bash
git init
git add .
git commit -m "Initial personal website"
```

### 2. 在 GitHub 新建仓库

仓库名可以是：

- `<你的用户名>.github.io`
- 任何普通仓库名，例如 `personal-website`

这个项目已经改成相对资源路径，两种方式都可以正常部署。

### 3. 关联远程仓库并推送

把下面的 URL 替换成你自己的仓库地址：

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 4. 打开 GitHub Pages

进入 GitHub 仓库页面：

1. 打开 `Settings`
2. 打开 `Pages`
3. 在 `Build and deployment` 里选择 `GitHub Actions`

之后每次 push 到 `main` 或 `master`，GitHub 都会自动重新构建并发布网站。

## 网站结构

- `index.html`：主页
- `cv.html`：简历页
- `blog.html`：博客列表页
- `posts/`：单篇博客页面
- `public/`：图片、PDF、JSON、HTML 组件等静态资源
- `js/`：前端脚本
- `css/`：样式文件

## 说明

- 站点已经针对 GitHub Pages 调整为相对路径输出，不依赖固定仓库名。
- `dist/` 是构建产物，不需要手动编辑。
