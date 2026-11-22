/*
 * programme-page.js: fills programme.html from js/programmes.js.
 *
 * URL:  programme.html?id=<slug>   (programme.html?programme=<slug> is also accepted)
 *
 * DATA CONTRACT: js/programmes.js must define window.LEAFSPIRE_PROGRAMMES, an object keyed by slug.
 * The key order is the display order (01 to 06). Every field except title is optional; a section whose
 * content is missing or empty is simply not shown. All values are plain text (no HTML).
 *
 *   window.LEAFSPIRE_PROGRAMMES = {
 *     "green-schooled": {
 *       title:    "Green Schooled",
 *       category: "Environment and education",          // small label above the title
 *       intro:    "One or two sentences.",
 *       tone:     "mid",                                 // panel colour: deep | mid | main | water
 *       visual:   { src: "img/x.jpg", alt: "..." },      // optional photograph over the panel
 *       description: "Short text for the browser tab / search snippet",   // optional; falls back to intro
 *
 *       overview:   { heading: "Overview", paragraphs: ["...", "..."] },  // or just an array / a string
 *       objectives: { heading, intro, items: [ "text", { title: "...", text: "..." } ] },  // or just an array
 *       activities: { heading, intro, items: [ same shape ] },
 *       audience:   { heading, intro, items: [ same shape ] },   // phrase as intended participants
 *       outcomes:   { heading, intro, items: [ same shape ], note: "replaces the default note" },
 *
 *       related:  ["suscomm", "civic-lore"]              // optional; defaults to the next two programmes
 *     },
 *     ...
 *   };
 */
(function () {
  'use strict';

  var DATA = (window.LEAFSPIRE_PROGRAMMES && typeof window.LEAFSPIRE_PROGRAMMES === 'object') ? window.LEAFSPIRE_PROGRAMMES : {};
  var ORDER = Object.keys(DATA);
  var ARROW = '<svg class="rel-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" aria-hidden="true" focusable="false"><path d="M3 12h17M14 6l6 6-6 6"/></svg>';
  var SECTIONS = ['overview', 'objectives', 'activities', 'audience', 'outcomes'];

  function $(id) { return document.getElementById(id); }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function str(v) { return typeof v === 'string' ? v.trim() : ''; }
  function isObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }
  function make(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt) n.textContent = txt;
    return n;
  }
  function setText(id, value) {
    var n = $(id); if (!n) return;
    value = str(value);
    n.textContent = value;
    n.hidden = !value;
  }
  function paragraphs(v) {
    if (typeof v === 'string') v = [v];
    return (Array.isArray(v) ? v : []).map(str).filter(Boolean);
  }
  function items(v) {
    return (Array.isArray(v) ? v : []).map(function (it) {
      if (typeof it === 'string') return str(it) ? { text: str(it) } : null;
      if (isObj(it) && (str(it.title) || str(it.text))) return { title: str(it.title), text: str(it.text) };
      return null;
    }).filter(Boolean);
  }
  function fillParagraphs(container, list) {
    container.textContent = '';
    list.forEach(function (t) { container.appendChild(make('p', '', t)); });
  }

  function renderSection(key, cfg) {
    var sec = $('programme-' + key); if (!sec) return;
    if (key === 'overview') { if (typeof cfg === 'string' || Array.isArray(cfg)) cfg = { paragraphs: cfg }; }
    else if (Array.isArray(cfg)) cfg = { items: cfg };
    if (!isObj(cfg)) cfg = {};

    var heading = str(cfg.heading);
    if (heading) $('programme-' + key + '-heading').textContent = heading;

    var hasContent;
    if (key === 'overview') {
      var paras = paragraphs(cfg.paragraphs);
      fillParagraphs($('programme-overview-body'), paras);
      hasContent = paras.length > 0;
    } else {
      var list = $('programme-' + key + '-list');
      var its = items(cfg.items);
      list.textContent = '';
      its.forEach(function (it) {
        var li = make('li');
        if (it.title) li.appendChild(make('h3', '', it.title));
        if (it.text) li.appendChild(make('p', '', it.text));
        list.appendChild(li);
      });
      fillParagraphs($('programme-' + key + '-intro'), paragraphs(cfg.intro));
      if (key === 'outcomes') {
        var note = $('programme-outcomes-note');
        if (note && str(cfg.note)) note.textContent = str(cfg.note);
      }
      hasContent = its.length > 0;
    }
    sec.hidden = !hasContent;
  }

  function renderRelated(slugs, heading) {
    var list = $('programme-related-list');
    list.textContent = '';
    slugs.forEach(function (slug) {
      var li = make('li');
      var a = make('a', 'rel-row');
      a.href = 'programme.html?id=' + encodeURIComponent(slug);
      a.appendChild(make('span', 'rel-num', pad(ORDER.indexOf(slug) + 1)));
      a.appendChild(make('span', 'rel-name', str(DATA[slug].title) || slug));
      a.insertAdjacentHTML('beforeend', ARROW);
      li.appendChild(a);
      list.appendChild(li);
    });
    list.hidden = slugs.length === 0;
    if (heading) $('programme-related-heading').textContent = heading;
  }

  function setMeta(title, description) {
    document.title = title + ' | Leafspire';
    var m = document.querySelector('meta[name="description"]');
    if (m && description) m.setAttribute('content', description);
  }

  function noVisual() { $('programme-hero-grid').classList.add('no-visual'); }

  function showMessage(state, title, intro) {
    $('programme').setAttribute('data-state', state);
    $('programme-title').textContent = title;
    setText('programme-intro', intro);
    $('programme-eyebrow').hidden = true;
    noVisual();
    SECTIONS.forEach(function (k) { $('programme-' + k).hidden = true; });
    var robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute('content', 'noindex, follow');
    setMeta(title, '');
    renderRelated(ORDER, 'Our programmes');
  }

  function render(slug) {
    var d = DATA[slug];
    var idx = ORDER.indexOf(slug);
    $('programme').setAttribute('data-state', 'ready');

    $('programme-title').textContent = str(d.title) || slug;
    setText('programme-intro', d.intro);
    setText('programme-category', d.category);
    setText('programme-number', 'Programme ' + pad(idx + 1) + ' of ' + pad(ORDER.length));
    $('programme-eyebrow').hidden = false;

    var vis = $('programme-visual');
    var tone = str(d.tone);
    if (['deep', 'mid', 'main', 'water'].indexOf(tone) > -1) vis.setAttribute('data-tone', tone);
    $('programme-visual-num').textContent = pad(idx + 1);
    if (isObj(d.visual) && str(d.visual.src)) {
      var img = make('img');
      img.alt = str(d.visual.alt);
      img.decoding = 'async';
      img.onload = function () { vis.classList.add('has-image'); vis.removeAttribute('aria-hidden'); };
      img.onerror = function () { img.remove(); };
      img.src = str(d.visual.src);
      vis.appendChild(img);
    }

    SECTIONS.forEach(function (k) { renderSection(k, d[k]); });

    var related = (Array.isArray(d.related) ? d.related : []).filter(function (s) { return has(DATA, s) && s !== slug; });
    if (!related.length) {
      for (var i = 1; i < ORDER.length && related.length < 2; i++) related.push(ORDER[(idx + i) % ORDER.length]);
    }
    renderRelated(related, 'Other programmes');

    setMeta(str(d.title) || slug, str(d.description) || str(d.intro));
  }

  function init() {
    var params = new URLSearchParams(window.location.search);
    var slug = (params.get('id') || params.get('programme') || '').trim().toLowerCase();

    if (!ORDER.length) {
      showMessage('unavailable', 'Programme details are on the way', 'This page is being prepared. In the meantime, you can find all six programmes on the programmes page.');
      $('programme-related-list').hidden = true;
    } else if (slug && has(DATA, slug)) {
      render(slug);
    } else {
      showMessage('not-found', 'Programme not found', 'We could not find that programme. You can choose one from the list below.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();