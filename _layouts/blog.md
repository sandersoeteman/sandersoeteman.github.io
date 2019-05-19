---
layout: base
---

<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
  <header class="post-header">
    <h1 class="post-title" itemprop="name headline">
      {{ page.title }}
    </h1>
    <p class="post-meta">
      <time datetime="{{ page.date }}" itemprop="datePublished">
        {{ page.date | date: "%Y-%m-%d %H:%M" }}
      </time>
    </p>
  </header>

  <div class="post-content" itemprop="articleBody">
    {{ content }}
  </div>
</article>
