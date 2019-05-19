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
        {{ page.date | date: "%Y-%m-%d" }}
      </time>
    </p>
    <div class="pijn-en-medicatie">
      <div class="pijn">
        <h3>Pijn</h3>
        <div>
          <label>Ochtend</label>
          <span>{{ page.pijnOchtend }}</span>
        </div>
        <div>
          <label>Middag</label>
          <span>{{ page.pijnMiddag }}</span>
        </div>
        <div>
          <label>Avond</label>
          <span>{{ page.pijnAvond }}</span>
        </div>
        <div>
          <label>Nacht</label>
          <span>{{ page.pijnNacht }}</span>
        </div>
      </div>
      <div class="medicatie">
        <h3>Pijnstilling</h3>
        <div>
          <label>Paracetamol 500mcg</label>
          <span>{{ page.pcml }}</span>
        </div>
        <div>
          <label>Ibuprofen 400mcg</label>
          <span>{{ page.ibu }}</span>
        </div>
        <div>
          <label>Diclofenac 400mcg retard</label>
          <span>{{ page.diclo }}</span>
        </div>
      </div>
    </div>
  </header>

  <div class="post-content" itemprop="articleBody">
    {{ content }}
  </div>
</article>
