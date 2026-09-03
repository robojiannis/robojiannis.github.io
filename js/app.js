(function () {
  const TYPE_LABEL = { hired: "Client work", own: "Own project" };
  const SEAT_LABEL = {
    lead: "Project lead",
    programming: "Programming",
    production: "Production",
  };
  const ORG_LABEL = { honig: "Honig Studios", whether: "whether.games" };

  const person = window.PORTFOLIO.person;
  const projects = window.PORTFOLIO.projects.slice();

  const indexEl = document.getElementById("index");
  const metaEl = document.getElementById("meta");
  const hireEl = document.getElementById("hire");
  const eduEl = document.getElementById("edu");
  const skillsEl = document.getElementById("skills");
  const contactEl = document.getElementById("contact");
  const hoverSlot = document.getElementById("hover-slot");
  const hoverCard = document.getElementById("hover-card");
  const hoverVideo = hoverCard.querySelector("video");
  const hoverImage = hoverCard.querySelector("img");
  let hoverRow = null;
  let hideTimer = null;

  const knownIds = new Set(projects.map((project) => project.id));
  const listToggleEl = document.getElementById("list-toggle");

  const state = {
    types: new Set(),
    seats: new Set(),
    show: new Set(),
    listAll: false,
    openId: null,
  };

  metaEl.innerHTML = `Berlin · DE / EN / EL · ${escapeHtml(person.email)} · <a href="${escapeHtml(person.linkedin)}" rel="noreferrer">LinkedIn</a>`;
  hireEl.textContent = person.hire;
  eduEl.innerHTML = person.education
    .map(
      (item) =>
        `<li><span class="edu-degree">${escapeHtml(item.degree)}</span><span class="edu-place">${escapeHtml(item.place)}, ${escapeHtml(item.year)}</span></li>`
    )
    .join("");
  skillsEl.innerHTML = person.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("");
  contactEl.innerHTML = [
    `<li class="contact-email">${escapeHtml(person.email)}</li>`,
    `<li><a href="${escapeHtml(person.linkedin)}" rel="noreferrer">LinkedIn</a></li>`,
  ].join("");

  function parseShow(raw) {
    const ids = String(raw || "")
      .split(",")
      .map((id) => id.trim())
      .filter((id) => knownIds.has(id));
    return new Set(ids);
  }

  function parseQuery() {
    const params = new URLSearchParams(location.search);
    const role = params.get("role") || params.get("seat");
    if (role && SEAT_LABEL[role]) {
      state.seats = new Set([role]);
    }
    state.show = parseShow(params.get("show"));
    state.listAll = state.show.size > 0 && params.get("list") === "all";
  }

  function writeQuery(push) {
    const url = new URL(location.href);
    url.searchParams.delete("seat");
    if (state.seats.size === 1) {
      url.searchParams.set("role", [...state.seats][0]);
    } else {
      url.searchParams.delete("role");
    }
    if (state.show.size) {
      url.searchParams.set("show", [...state.show].join(","));
    } else {
      url.searchParams.delete("show");
    }
    if (state.show.size && state.listAll) {
      url.searchParams.set("list", "all");
    } else {
      url.searchParams.delete("list");
    }
    if (push) history.pushState({}, "", url);
    else history.replaceState({}, "", url);
  }

  function listHref(wantAll) {
    const url = new URL(location.href);
    if (state.show.size) {
      url.searchParams.set("show", [...state.show].join(","));
    } else {
      url.searchParams.delete("show");
    }
    if (wantAll) url.searchParams.set("list", "all");
    else url.searchParams.delete("list");
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function syncListToggle() {
    if (!listToggleEl) return;
    if (!state.show.size) {
      listToggleEl.hidden = true;
      listToggleEl.removeAttribute("href");
      listToggleEl.textContent = "Full list";
      return;
    }
    listToggleEl.hidden = false;
    if (state.listAll) {
      listToggleEl.textContent = "Selection";
      listToggleEl.href = listHref(false);
    } else {
      listToggleEl.textContent = "Full list";
      listToggleEl.href = listHref(true);
    }
  }

  function byYear(a, b) {
    return b.yearSort - a.yearSort || b.yearStart - a.yearStart || a.name.localeCompare(b.name);
  }

  function sortProjects(list) {
    if (state.show.size && !state.listAll) {
      const rank = new Map([...state.show].map((id, i) => [id, i]));
      return list.sort((a, b) => {
        const aRank = rank.get(a.id);
        const bRank = rank.get(b.id);
        const aIn = aRank !== undefined;
        const bIn = bRank !== undefined;
        if (aIn && bIn) return aRank - bRank;
        if (aIn) return -1;
        if (bIn) return 1;
        return byYear(a, b);
      });
    }
    return list.sort(byYear);
  }

  function matches(project) {
    const showOk =
      state.show.size === 0 || state.listAll || state.show.has(project.id);
    const typeOk = state.types.size === 0 || state.types.has(project.type);
    const seatOk =
      state.seats.size === 0 || project.seats.some((seat) => state.seats.has(seat));
    return showOk && typeOk && seatOk;
  }

  function syncChips() {
    document.querySelectorAll("[data-type]").forEach((btn) => {
      btn.classList.toggle("is-on", state.types.has(btn.dataset.type));
    });
    document.querySelectorAll("[data-seat]").forEach((btn) => {
      btn.classList.toggle("is-on", state.seats.has(btn.dataset.seat));
    });
  }

  function markHtml(org) {
    const label = escapeHtml(ORG_LABEL[org] || "");
    const svg =
      org === "whether"
        ? `<svg class="mark mark-sq" viewBox="0 0 10 10"><rect width="10" height="10" /></svg>`
        : `<svg class="mark mark-hex" viewBox="0 0 10 12"><polygon points="5,0 10,2.9 10,9.1 5,12 0,9.1 0,2.9" /></svg>`;
    return `<span class="mark-slot" title="${label}" aria-label="${label}">${svg}</span>`;
  }

  function paras(text, kicker) {
    const parts = String(text || "")
      .split(/\n\n+/)
      .map((part) => part.trim())
      .filter(Boolean);
    if (!parts.length) return "";
    return parts
      .map((part, i) =>
        i === 0 && kicker
          ? `<p><span class="kicker">${kicker}</span><br>${escapeHtml(part)}</p>`
          : `<p>${escapeHtml(part)}</p>`
      )
      .join("");
  }

  function scaleImpactHtml(project) {
    const parts = [project.scopeNote, project.result, project.awards].filter(Boolean);
    if (!parts.length) return "";
    return paras(parts.join("\n\n"), "Scale & impact");
  }

  function clippingsHtml(project) {
    const quotes = (project.press || [])
      .map(
        (item) =>
          `<blockquote><p>${escapeHtml(item.quote)}</p><cite>${escapeHtml(item.source)}</cite></blockquote>`
      )
      .join("");
    if (!quotes) return "";
    return `<div class="clippings">${quotes}</div>`;
  }

  function render() {
    const ordered = sortProjects(projects.slice());
    indexEl.innerHTML = ordered
      .map((project) => {
        const seats = project.seats.map((seat) => SEAT_LABEL[seat]).join(" · ");
        const visual = project.visual
          ? project.visual.kind === "video"
            ? `<div class="visual"><video muted loop playsinline preload="metadata" poster="${project.visual.poster}" src="${project.visual.src}"></video></div>`
            : `<div class="visual"><img src="${project.visual.src}" alt=""></div>`
          : "";
        const clippings = clippingsHtml(project);
        const scaleImpact = scaleImpactHtml(project);

        return `
          <article class="row" data-id="${project.id}" data-video="${project.visual && project.visual.kind === "video" ? project.visual.src : ""}" data-image="${project.visual && project.visual.kind === "image" ? project.visual.src : ""}" data-poster="${project.visual ? project.visual.poster || project.visual.src : ""}">
            <button class="row-line" type="button" aria-expanded="false">
              ${markHtml(project.org)}
              <span class="name-cell">
                <span class="proj-name">${escapeHtml(project.name)}</span>
                <span class="row-years">
                  <span>${escapeHtml(project.years)}</span>
                </span>
                <span class="row-meta">${escapeHtml(TYPE_LABEL[project.type])} · ${escapeHtml(seats)}${project.partners.length ? " · " + escapeHtml(project.partners.join(", ")) : ""}</span>
              </span>
              <span class="muted">${TYPE_LABEL[project.type]}</span>
              <span class="muted">${escapeHtml(seats)}</span>
              <span class="muted">${project.partners.length ? escapeHtml(project.partners.join(" · ")) : "—"}</span>
            </button>
            <div class="panel">
              <div class="panel-inner">
                <div class="panel-body">
                  <div class="panel-copy">
                    <div class="story">${paras(project.story, "Story")}</div>
                    ${paras(project.responsibilities, "Responsibilities")}
                    ${scaleImpact}
                    ${clippings}
                  </div>
                  ${visual}
                </div>
              </div>
            </div>
            <span class="row-rule" aria-hidden="true"></span>
          </article>
        `;
      })
      .join("");

    bindRows();
    applyFilter(false);
  }

  function bindRows() {
    indexEl.querySelectorAll(".row").forEach((row) => {
      const button = row.querySelector(".row-line");
      const video = row.querySelector("video");

      button.addEventListener("click", () => {
        const already = state.openId === row.dataset.id;
        hideHover(true);
        closeAll();
        if (!already) {
          state.openId = row.dataset.id;
          row.classList.add("is-open");
          row.classList.remove("is-peek", "just-closed");
          button.setAttribute("aria-expanded", "true");
          if (video) {
            video.play().catch(() => {});
          }
          row.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          row.classList.add("just-closed");
          row.classList.remove("is-peek");
          button.blur();
        }
      });

      row.addEventListener("mouseenter", () => {
        if (!row.classList.contains("is-open") && !row.classList.contains("just-closed")) {
          row.classList.add("is-peek");
        }
        showHover(row);
      });
      row.addEventListener("mouseleave", () => {
        row.classList.remove("is-peek", "just-closed");
        hideHover();
      });
    });
  }

  function closeAll() {
    state.openId = null;
    indexEl.querySelectorAll(".row").forEach((row) => {
      row.classList.remove("is-open");
      row.querySelector(".row-line").setAttribute("aria-expanded", "false");
      const video = row.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function applyFilter(animate) {
    indexEl.querySelectorAll(".row").forEach((row) => {
      const project = projects.find((item) => item.id === row.dataset.id);
      const show = matches(project);
      if (!show && state.openId === row.dataset.id) closeAll();
      row.classList.toggle("is-filtered", !show);
    });
    if (animate) {
      /* reflow only */
    }
  }

  function clearHoverMedia() {
    hoverVideo.pause();
    hoverVideo.removeAttribute("src");
    hoverVideo.removeAttribute("poster");
    hoverVideo.load();
    hoverImage.removeAttribute("src");
    hoverCard.classList.remove("is-video", "is-image");
  }

  function showHover(row) {
    if (window.matchMedia("(max-width: 860px)").matches) return;
    if (row.classList.contains("is-open") || row.dataset.id === state.openId) return;
    const videoSrc = row.dataset.video;
    const imageSrc = row.dataset.image;
    if (!videoSrc && !imageSrc) return;

    if (hideTimer) {
      window.clearTimeout(hideTimer);
      hideTimer = null;
    }

    if (hoverRow && hoverRow !== row) hoverRow.classList.remove("has-hover");
    hoverRow = row;
    row.classList.add("has-hover");
    row.appendChild(hoverSlot);
    const rule = row.querySelector(".row-rule");
    if (rule) row.appendChild(rule);

    clearHoverMedia();
    if (videoSrc) {
      hoverCard.classList.add("is-video");
      hoverVideo.poster = row.dataset.poster || "";
      hoverVideo.src = videoSrc;
    } else {
      hoverCard.classList.add("is-image");
      hoverImage.src = imageSrc;
    }

    hoverSlot.hidden = false;
    hoverCard.classList.remove("is-on");
    void hoverCard.offsetWidth;
    if (videoSrc) hoverVideo.play().catch(() => {});
    requestAnimationFrame(() => hoverCard.classList.add("is-on"));
  }

  function hideHover(immediate) {
    hoverCard.classList.remove("is-on");
    hoverVideo.pause();
    const from = hoverRow;
    hoverRow = null;
    const hide = () => {
      if (hoverCard.classList.contains("is-on")) {
        if (from && from !== hoverRow) from.classList.remove("has-hover");
        return;
      }
      from?.classList.remove("has-hover");
      hoverSlot.hidden = true;
      clearHoverMedia();
      document.body.appendChild(hoverSlot);
    };
    if (immediate) hide();
    else hideTimer = window.setTimeout(hide, 1100);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  document.querySelectorAll("[data-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.type;
      if (state.types.size === 1 && state.types.has(key)) {
        state.types.clear();
      } else {
        state.types = new Set([key]);
      }
      syncChips();
      applyFilter(true);
    });
  });

  document.querySelectorAll("[data-seat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.seat;
      if (state.seats.has(key)) state.seats.delete(key);
      else state.seats.add(key);
      syncChips();
      writeQuery();
      syncListToggle();
      applyFilter(true);
    });
  });

  if (listToggleEl) {
    listToggleEl.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }
      event.preventDefault();
      if (!state.show.size) return;
      state.listAll = !state.listAll;
      writeQuery(true);
      syncListToggle();
      render();
    });
  }

  window.addEventListener("popstate", () => {
    parseQuery();
    syncChips();
    syncListToggle();
    render();
  });

  parseQuery();
  syncChips();
  syncListToggle();
  render();
})();
