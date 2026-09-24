(function(){
  // Small helper utilities
  const $ = (sel, root=document) => root.querySelector(sel);
  const el = (tag, attrs={}, children=[])=>{const e=document.createElement(tag);for(const k in attrs){if(k.startsWith("on")&&typeof attrs[k]==='function'){e.addEventListener(k.slice(2), attrs[k]);}else if(k==='html'){e.innerHTML=attrs[k];}else{e.setAttribute(k, attrs[k]);}};children.forEach(c=>e.appendChild(typeof c==='string'?document.createTextNode(c):c));return e}

  const ROWS_CONTAINER = $('#rows');
  const HERO = $('#hero');
  const HERO_TITLE = $('#hero-title');
  const HERO_OVERVIEW = $('#hero-overview');
  const PLAY_BTN = $('#play-btn');
  const MORE_BTN = $('#more-btn');
  const MODAL = $('#modal');
  const MODAL_CONTENT = $('#modal-content');
  const CLOSE_MODAL = $('#close-modal');
  const SEARCH = $('#search');

  // Fallback static data (provided by js/data.js)
  let allMovies = window.MOVIES || [];
  let currentHero = allMovies[0] || null;

  // TMDB integration config
  const TMDB_KEY = (window.TMDB_CONFIG && window.TMDB_CONFIG.apiKey) || window.TMDB_API_KEY || null;
  let TMDB_GENRES = {};

  function setHero(movie){
    if(!movie) return;
    currentHero = movie;
    // prefer a larger backdrop if available
    const bg = (movie.backdrop || movie.poster || '').replace('w500','w1280');
    HERO.style.backgroundImage = `url('${bg}')`;
    HERO_TITLE.textContent = movie.title + (movie.year?` (${movie.year})`: '');
    HERO_OVERVIEW.textContent = movie.overview || '';
  }

  function createCard(movie){
    const card = el('div',{class:'card',title:movie.title});
    card.style.backgroundImage = `url('${movie.poster}')`;
    const title = el('div',{class:'card-title',html:`<strong>${movie.title}</strong>`});
    card.appendChild(title);
    card.addEventListener('click', ()=>openModal(movie));
    return card;
  }

  function renderRow(title, movies){
    const row = el('div',{class:'row'});
    const rowTitle = el('h3',{class:'row-title'},[document.createTextNode(title)]);
    const cards = el('div',{class:'row-cards'});
    movies.forEach(m=>cards.appendChild(createCard(m)));
    row.appendChild(rowTitle);
    row.appendChild(cards);
    return row;
  }

  function renderRows(dataset){
    ROWS_CONTAINER.innerHTML = '';
    // Recommended (first few)
    if(dataset.length) ROWS_CONTAINER.appendChild(renderRow('Recommended', dataset.slice(0,8)));

    // group by some genres
    const genres = ['Action','Comedy','Drama','Documentary'];
    genres.forEach(g=>{
      const list = dataset.filter(m=>m.genres && m.genres.includes(g));
      if(list.length) ROWS_CONTAINER.appendChild(renderRow(g, list));
    });
  }

  async function fetchTMDBGenres(key){
    try{
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
      if(!res.ok) return {};
      const j = await res.json();
      const map = {};
      (j.genres||[]).forEach(g=>map[g.id]=g.name);
      return map;
    }catch(e){console.warn('Failed to fetch TMDB genres', e); return {};}
  }

  async function fetchTMDBMovies(){
    if(!TMDB_KEY) return;
    try{
      TMDB_GENRES = await fetchTMDBGenres(TMDB_KEY);
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`;
      const res = await fetch(url);
      if(!res.ok) throw new Error('TMDB fetch failed');
      const j = await res.json();
      const results = (j.results||[]).slice(0,18);
      // map to our minimal shape
      const mapped = results.map(r=>({
        tmdbId: r.id,
        title: r.title || r.name,
        year: r.release_date ? r.release_date.split('-')[0] : '',
        genres: (r.genre_ids||[]).map(id=>TMDB_GENRES[id]).filter(Boolean),
        overview: r.overview,
        poster: r.poster_path ? `https://image.tmdb.org/t/p/w500${r.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image',
        backdrop: r.backdrop_path ? `https://image.tmdb.org/t/p/w1280${r.backdrop_path}` : null,
        youtubeId: null // fetched on demand
      }));
      allMovies = mapped;
    }catch(e){
      console.warn('TMDB load failed, falling back to static data', e);
    }
  }

  async function fetchTrailerForMovie(movie){
    if(!TMDB_KEY || !movie.tmdbId) return null;
    try{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/videos?api_key=${TMDB_KEY}&language=en-US`);
      if(!res.ok) return null;
      const j = await res.json();
      const vids = j.results || [];
      const yt = vids.find(v=>v.site==='YouTube' && (v.type==='Trailer' || v.type==='Teaser')) || vids.find(v=>v.site==='YouTube');
      return yt?yt.key:null;
    }catch(e){console.warn('Failed to fetch trailer', e); return null;}
  }

  async function openModal(movie){
    MODAL_CONTENT.innerHTML = '';
    const title = el('h2',{},[document.createTextNode(movie.title+' ('+(movie.year||'')+')')]);
    const overview = el('p',{style:'color:#ddd'},[document.createTextNode(movie.overview || '')]);
    MODAL_CONTENT.appendChild(title);
    MODAL_CONTENT.appendChild(overview);

    // if we don't have a youtubeId but have a TMDB id and a key, try to fetch
    let youtubeId = movie.youtubeId || null;
    if(!youtubeId && movie.tmdbId && TMDB_KEY){
      const k = await fetchTrailerForMovie(movie);
      youtubeId = k;
      // store it to avoid refetch
      movie.youtubeId = k;
    }

    if(youtubeId){
      const iframe = el('iframe',{src:`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`,allow:'autoplay; encrypted-media',width:'100%',height:'480'});
      MODAL_CONTENT.appendChild(iframe);
    } else {
      const noTrailer = el('p',{style:'color:var(--muted)'},[document.createTextNode('Trailer not available')]);
      MODAL_CONTENT.appendChild(noTrailer);
    }
    MODAL.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    // stop video by clearing content
    MODAL_CONTENT.innerHTML = '';
    MODAL.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // Search functionality
  function doSearch(q){
    const s = String(q||'').trim().toLowerCase();
    if(!s){ renderRows(allMovies); return; }
    const matches = allMovies.filter(m=>m.title.toLowerCase().includes(s) || (m.overview||'').toLowerCase().includes(s));
    ROWS_CONTAINER.innerHTML = '';
    ROWS_CONTAINER.appendChild(renderRow(`Search results (${matches.length})`, matches));
  }

  // Wire events
  CLOSE_MODAL.addEventListener('click', closeModal);
  MODAL.addEventListener('click', (ev)=>{ if(ev.target === MODAL) closeModal(); });
  SEARCH.addEventListener('input', (e)=>doSearch(e.target.value));
  PLAY_BTN.addEventListener('click', ()=>{ if(currentHero) openModal(currentHero); });

  // Initialize page
  async function init(){
    if(TMDB_KEY){
      await fetchTMDBMovies();
    }
    if(allMovies.length===0){ ROWS_CONTAINER.innerHTML = '<p style="color:var(--muted)">No movies available</p>'; return; }
    setHero(allMovies[0]);
    renderRows(allMovies);
  }

  // expose for debugging
  window.__miniNetflix = {setHero, openModal, renderRows};

  init();
})();
