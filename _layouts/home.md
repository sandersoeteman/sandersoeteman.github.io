---
layout: base
---

<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
      </h2>
    </li>
    {% endfor %}

  </ul>

  <p class="rss-subscribe">subscribe <a href="/feed.xml">via RSS</a></p>
</div>
