(() => {
  'use strict';
  const {chapters, stops, legacy} = window.NORTHSTAR_TOUR;
  const byId = new Map(stops.map((stop, index) => [stop.id, index]));
  const $ = id => document.getElementById(id);
  let current = 0;
  let currentChapter = '';
  const makeOption = (value, text) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
  };
  function requestedIndex() {
    const query = new URLSearchParams(location.search);
    if (byId.has(query.get('screen'))) return byId.get(query.get('screen'));
    const oldStep = Number(query.get('step'));
    if (Number.isInteger(oldStep) && oldStep >= 1 && oldStep <= legacy.length) return byId.get(legacy[oldStep - 1]);
    const chapter = query.get('chapter');
    const first = stops.findIndex(stop => stop.chapter === chapter);
    return first < 0 ? 0 : first;
  }
  function show(index, push = false) {
    current = Math.max(0, Math.min(stops.length - 1, index));
    const stop = stops[current];
    const chapter = chapters.find(item => item.id === stop.chapter);
    if (currentChapter !== stop.chapter) {
      const chapterStops = stops.filter(item => item.chapter === stop.chapter);
      $('screen-select').replaceChildren(...chapterStops.map((item, i) => makeOption(item.id, `${i + 1}. ${item.title}`)));
      currentChapter = stop.chapter;
    }
    $('chapter-select').value = stop.chapter;
    $('screen-select').value = stop.id;
    $('chapter-description').textContent = chapter.description;
    $('chapter-label').textContent = chapter.title;
    $('stage-title').textContent = stop.title;
    $('summary').textContent = stop.summary;
    $('points').replaceChildren(...stop.points.map(point => {
      const li = document.createElement('li');
      li.textContent = point;
      return li;
    }));
    $('key-label').hidden = !stop.key;
    $('detail').hidden = !stop.detail;
    $('detail').open = false;
    $('detail-text').textContent = stop.detail;
    $('stage-image').alt = `Northstar: ${stop.title}. ${stop.note}`;
    $('stage-image').src = stop.image;
    $('image-link').href = stop.image;
    $('full-image').href = stop.image;
    $('image-note').textContent = stop.note;
    $('image-error').hidden = true;
    $('count').textContent = `${current + 1} of ${stops.length}`;
    $('progress').max = stops.length;
    $('progress').value = current + 1;
    $('previous').disabled = current === 0;
    $('next').disabled = current === stops.length - 1;
    $('previous-top').disabled = current === 0;
    $('next-top').disabled = current === stops.length - 1;
    $('next-label').textContent = current === stops.length - 1 ? 'End of the full application tour' : `Next: ${stops[current + 1].title}`;
    document.title = `${stop.title} | Northstar Application Tour`;
    $('announcement').textContent = `${chapter.title}. Screen ${current + 1} of ${stops.length}: ${stop.title}`;
    const url = new URL(location.href);
    url.searchParams.delete('step');
    url.searchParams.delete('chapter');
    url.searchParams.set('screen', stop.id);
    if (push) history.pushState(null, '', url);
    else history.replaceState(null, '', url);
  }
  function move(amount) {
    show(current + amount, true);
    $('stage-title').focus({preventScroll:true});
    $('stage-title').scrollIntoView({block:'start'});
  }
  $('chapter-select').replaceChildren(...chapters.map((chapter, i) =>
    makeOption(chapter.id, `${i + 1}. ${chapter.title} (${stops.filter(stop => stop.chapter === chapter.id).length} screens)`)));
  $('chapter-select').addEventListener('change', event => show(stops.findIndex(stop => stop.chapter === event.target.value), true));
  $('screen-select').addEventListener('change', event => show(byId.get(event.target.value), true));
  $('previous').addEventListener('click', () => move(-1));
  $('next').addEventListener('click', () => move(1));
  $('previous-top').addEventListener('click', () => move(-1));
  $('next-top').addEventListener('click', () => move(1));
  $('stage-image').addEventListener('error', () => { $('image-error').hidden = false; });
  window.addEventListener('popstate', () => show(requestedIndex()));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input,textarea,select,button,a,summary')) return;
    if (event.key === 'ArrowRight' && current < stops.length - 1) { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft' && current > 0) { event.preventDefault(); move(-1); }
  });
  const coverage = $('coverage-grid');
  for (const chapter of chapters) {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    heading.textContent = chapter.title;
    const list = document.createElement('ol');
    for (const stop of stops.filter(item => item.chapter === chapter.id)) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `?screen=${encodeURIComponent(stop.id)}`;
      link.textContent = stop.title;
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        show(byId.get(stop.id), true);
        $('stage-title').focus();
        $('stage-title').scrollIntoView({block:'start'});
      });
      li.append(link);
      list.append(li);
    }
    section.append(heading, list);
    coverage.append(section);
  }
  show(requestedIndex());
})();
