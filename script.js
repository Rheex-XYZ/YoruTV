document.addEventListener("DOMContentLoaded", function () {
  // M3U playlist data
  const m3uData = `#EXTM3U
# KATEGORI DAFTAR
#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_indosiar.png",Indosiar
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/indosiar/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_sctv.png",SCTV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/sctv/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_MNC-180x180_2025_11_06_13_06_02.jpg",MNCTV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/mnctv/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_RCTI-180x180_2025_11_06_13_09_06.jpg",RCTI
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/rcti/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_GTV-180x180_2025_11_06_13_07_56.jpg",GTV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/globaltv/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_rtv.png",RTV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/RAJAWALI_TV/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_kompastv.png",Kompas TV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/KOMPAS_TV/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_inews.png",iNews
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/inews/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_tvone.png",TVOne
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/tvone/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_cartoonito.png",Cartoonito
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/boomerang/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_funplanet.png",FunPlanet
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/indikids/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_mykidz.png",My Kidz
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/mykids/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_kplus.png",K-Plus
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/kplus/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_warnertv.png",Warner TV
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/warner/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_rockaction.png",ROCK Action
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/ROCK_ACTION/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_HBO-180x180_2025_11_05_11_21_29.jpg",HBO
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/hbo/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_HBO-Familly-180x180_2025_11_05_11_14_46.jpg",HBO Family
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/hbofamily/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_HBO-Hits-180x180_2025_11_05_11_23_20.jpg",HBO Hits
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/hbohits/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_HBO-Signature-180x180_2025_11_05_12_57_49.jpg",HBO Signature
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/hbosignature/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/imageCir_Cinemax-180x180_2025_11_05_13_11_15.jpg",CINEMAX
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/cinemax/manifest.mpd

#EXTINF:-1 group-title="DAFTAR" tvg-logo="https://raw.githubusercontent.com/apistech/project/refs/heads/main/logo/image_ch_thrill.png",Thrill
https://alibaba-cdn.cdnpub-maxstream.com/atm/DASH/thrill/manifest.mpd`;

  // Parse M3U data
  const channels = parseM3U(m3uData);

  // DOM elements
  const channelGrid = document.getElementById("channel-grid");
  const playerModal = document.getElementById("player-modal");
  const videoPlayer = document.getElementById("video-player");
  const channelName = document.getElementById("channel-name");
  const closePlayer = document.getElementById("close-player");
  const loadingSpinner = document.getElementById("loading-spinner");
  const qualityOptions = document.getElementById("quality-options");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const categoryItems = document.querySelectorAll(".category-item");

  // External controls
  const playPauseBtn = document.getElementById("play-pause-btn");
  const progressBar = document.getElementById("progress-bar");
  const progressFilled = document.getElementById("progress-filled");
  const timeDisplay = document.getElementById("time-display");
  const qualityBtn = document.getElementById("quality-btn");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  // Quality popup
  const qualityPopup = document.getElementById("quality-popup");
  const qualityCloseBtn = document.getElementById("quality-close-btn");
  const qualityPopupBackdrop = document.querySelector(
    ".quality-popup-backdrop"
  );

  // Initialize Shaka Player
  let shakaPlayer = null;

  // Current playing channel
  let currentChannel = null;

  // Parse M3U function
  function parseM3U(data) {
    const lines = data.split("\n");
    const channels = [];
    let currentChannel = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("#EXTINF:")) {
        // Parse channel info
        const nameMatch = line.match(/,(.+)$/);
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        const groupMatch = line.match(/group-title="([^"]+)"/);

        currentChannel = {
          name: nameMatch ? nameMatch[1] : "Unknown",
          logo: logoMatch ? logoMatch[1] : "",
          group: groupMatch ? groupMatch[1] : "Unknown",
          url: "",
          licenseType: "",
          licenseKey: "",
          referrer: "",
        };
      } else if (line.startsWith("#EXTVLCOPT:http-referrer=")) {
        // Parse referrer
        currentChannel.referrer = line.split("=")[1];
      } else if (
        line.startsWith("#KODIPROP:inputstream.adaptive.license_type=")
      ) {
        // Parse license type
        currentChannel.licenseType = line.split("=")[1];
      } else if (
        line.startsWith("#KODIPROP:inputstream.adaptive.license_key=")
      ) {
        // Parse license key
        currentChannel.licenseKey = line.split("=")[1];
      } else if (line && !line.startsWith("#")) {
        // URL line
        currentChannel.url = line;
        channels.push({ ...currentChannel });
        currentChannel = {};
      }
    }

    return channels;
  }

  // Render channels
  function renderChannels(channelsToRender = channels) {
    channelGrid.innerHTML = "";

    channelsToRender.forEach((channel, index) => {
      const channelCard = document.createElement("div");
      channelCard.className = "channel-card";
      channelCard.setAttribute("tabindex", "0");
      channelCard.setAttribute("data-index", index);

      channelCard.innerHTML = `
                <img src="${channel.logo}" alt="${channel.name}" class="channel-logo">
                <div class="channel-info">
                    <h3 class="channel-name">${channel.name}</h3>
                    <p class="channel-category">${channel.group}</p>
                </div>
            `;

      channelCard.addEventListener("click", () => playChannel(channel));
      channelCard.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          playChannel(channel);
        }
      });

      channelGrid.appendChild(channelCard);
    });
  }

  // Play channel
  async function playChannel(channel) {
    currentChannel = channel;
    channelName.textContent = channel.name;
    playerModal.style.display = "flex";
    loadingSpinner.style.display = "flex";

    try {
      // Destroy previous player instance if exists
      if (shakaPlayer) {
        shakaPlayer.destroy();
      }

      // Create new player instance
      shakaPlayer = new shaka.Player(videoPlayer);

      // Configure player with correct structure
      shakaPlayer.configure({
        abr: {
          enabled: true,
          defaultBandwidthEstimate: 5000000,
        },
        streaming: {
          bufferingGoal: 30,
          rebufferingGoal: 2,
        },
      });

      // Configure DRM if needed - Improved handling
      if (channel.licenseType && channel.licenseKey) {
        // Parse license key correctly
        const [keyId, key] = channel.licenseKey.split(":");

        // Normalize license type
        const licenseType =
          channel.licenseType === "org.w3.clearkey" ||
          channel.licenseType === "clearkey"
            ? "clearkey"
            : channel.licenseType;

        console.log("Configuring DRM:", {
          licenseType,
          keyId,
          key,
        });

        // Configure DRM with proper structure
        shakaPlayer.configure({
          drm: {
            [licenseType]: {
              clearKeys: {
                [keyId]: key,
              },
            },
          },
        });
      }

      // Set up networking filters for referrer - Improved handling
      if (channel.referrer) {
        const networkingEngine = shakaPlayer.getNetworkingEngine();

        // Add request filter for all request types
        networkingEngine.registerRequestFilter((type, request) => {
          // Apply referrer to all relevant request types
          if (
            type === shaka.net.NetworkingEngine.RequestType.MANIFEST ||
            type === shaka.net.NetworkingEngine.RequestType.SEGMENT ||
            type === shaka.net.NetworkingEngine.RequestType.LICENSE ||
            type === shaka.net.NetworkingEngine.RequestType.KEY
          ) {
            request.headers["Referer"] = channel.referrer;
            request.headers["Origin"] = channel.referrer;
            request.headers["User-Agent"] =
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

            console.log(
              "Applied referrer to request type:",
              type,
              channel.referrer
            );
          }
        });

        // Add response filter to handle CORS issues
        networkingEngine.registerResponseFilter((type, response) => {
          // Handle CORS headers if needed
          if (type === shaka.net.NetworkingEngine.RequestType.MANIFEST) {
            console.log("Manifest response headers:", response.headers);
          }
        });
      }

      const manifestUrl = channel.url;

      // Load the video with error handling
      try {
        await shakaPlayer.load(manifestUrl);
        console.log("Video loaded successfully");
      } catch (error) {
        console.error("Error loading video:", error);

        // Try to load with additional configuration if initial load fails
        if (channel.licenseType && channel.licenseKey) {
          console.log("Attempting to load with alternative DRM configuration");

          // Try alternative DRM configuration
          const [keyId, key] = channel.licenseKey.split(":");
          shakaPlayer.configure({
            drm: {
              clearKeys: {
                [keyId]: key,
              },
            },
          });

          try {
            await shakaPlayer.load(manifestUrl);
            console.log("Video loaded with alternative DRM configuration");
          } catch (secondError) {
            throw secondError;
          }
        } else {
          throw error;
        }
      }

      // Auto-play
      videoPlayer.play().catch((e) => {
        console.log("Auto-play failed:", e);
        // Show play button overlay
        showPlayOverlay();
      });

      // Get available qualities
      const tracks = shakaPlayer.getVariantTracks();
      updateQualityOptions(tracks);

      loadingSpinner.style.display = "none";
    } catch (error) {
      console.error("Error loading video:", error);
      loadingSpinner.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading video. Please try again later.</p>
                <p>Details: ${error.message || "Unknown error"}</p>
            `;
    }
  }

  // Show play overlay for auto-play blocked
  function showPlayOverlay() {
    const playOverlay = document.createElement("div");
    playOverlay.className = "play-overlay";
    playOverlay.innerHTML = `
            <button class="play-button">
                <i class="fas fa-play"></i>
            </button>
        `;

    const videoContainer = document.querySelector(".video-container");
    videoContainer.appendChild(playOverlay);

    playOverlay.addEventListener("click", () => {
      videoPlayer.play();
      playOverlay.remove();
    });
  }

  // Update quality options
  function updateQualityOptions(tracks) {
    qualityOptions.innerHTML = "";

    // Group tracks by resolution
    const qualities = {};
    tracks.forEach((track) => {
      const resolution = `${track.height}p`;
      if (
        !qualities[resolution] ||
        track.bandwidth > qualities[resolution].bandwidth
      ) {
        qualities[resolution] = track;
      }
    });

    // Add "Auto" option
    const autoOption = document.createElement("div");
    autoOption.className = "quality-option active";
    autoOption.textContent = "Auto";
    autoOption.setAttribute("tabindex", "0");

    autoOption.addEventListener("click", () => {
      shakaPlayer.configure({
        abr: {
          enabled: true,
        },
      });

      // Update active state
      document.querySelectorAll(".quality-option").forEach((opt) => {
        opt.classList.remove("active");
      });
      autoOption.classList.add("active");

      // Close popup
      qualityPopup.style.display = "none";
    });

    qualityOptions.appendChild(autoOption);

    // Add quality options
    Object.entries(qualities).forEach(([resolution, track]) => {
      const qualityOption = document.createElement("div");
      qualityOption.className = "quality-option";
      qualityOption.textContent = resolution;
      qualityOption.setAttribute("tabindex", "0");

      qualityOption.addEventListener("click", () => {
        // Disable ABR and select this quality
        shakaPlayer.configure({
          abr: {
            enabled: false,
          },
        });

        shakaPlayer.selectVariantTrack(track);

        // Update active state
        document.querySelectorAll(".quality-option").forEach((opt) => {
          opt.classList.remove("active");
        });
        qualityOption.classList.add("active");

        // Close popup
        qualityPopup.style.display = "none";
      });

      qualityOptions.appendChild(qualityOption);
    });
  }

  // Setup player controls
  function setupPlayerControls() {
    // Play/Pause button
    playPauseBtn.addEventListener("click", () => {
      if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        videoPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });

    // Update play/pause button
    videoPlayer.addEventListener("play", () => {
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    videoPlayer.addEventListener("pause", () => {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Progress bar
    videoPlayer.addEventListener("timeupdate", () => {
      const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
      progressFilled.style.width = percent + "%";

      const currentMinutes = Math.floor(videoPlayer.currentTime / 60);
      const currentSeconds = Math.floor(videoPlayer.currentTime % 60);
      const durationMinutes = Math.floor(videoPlayer.duration / 60);
      const durationSeconds = Math.floor(videoPlayer.duration % 60);

      timeDisplay.textContent = `${currentMinutes
        .toString()
        .padStart(2, "0")}:${currentSeconds
        .toString()
        .padStart(2, "0")} / ${durationMinutes
        .toString()
        .padStart(2, "0")}:${durationSeconds.toString().padStart(2, "0")}`;
    });

    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoPlayer.currentTime = percent * videoPlayer.duration;
    });

    // Quality button
    qualityBtn.addEventListener("click", () => {
      qualityPopup.style.display = "flex";
      // Focus first quality option
      if (qualityOptions.firstChild) {
        qualityOptions.firstChild.focus();
      }
    });

    // Quality popup close events
    qualityCloseBtn.addEventListener("click", () => {
      qualityPopup.style.display = "none";
      qualityBtn.focus();
    });

    qualityPopupBackdrop.addEventListener("click", () => {
      qualityPopup.style.display = "none";
      qualityBtn.focus();
    });

    // Fullscreen button
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen().catch((err) => {
          console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
      } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
      }
    });

    // Listen for fullscreen changes
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
      }
    });
  }

  // Close player
  closePlayer.addEventListener("click", () => {
    if (shakaPlayer) {
      shakaPlayer.destroy();
      shakaPlayer = null;
    }
    playerModal.style.display = "none";
  });

  // Search functionality
  function searchChannels() {
    const searchTerm = searchInput.value.toLowerCase();

    if (!searchTerm) {
      renderChannels();
      return;
    }

    const filteredChannels = channels.filter(
      (channel) =>
        channel.name.toLowerCase().includes(searchTerm) ||
        channel.group.toLowerCase().includes(searchTerm)
    );

    renderChannels(filteredChannels);
  }

  searchBtn.addEventListener("click", searchChannels);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      searchChannels();
    }
  });

  // Category filter
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Update active state
      categoryItems.forEach((cat) => cat.classList.remove("active"));
      item.classList.add("active");

      // Filter channels
      const category = item.getAttribute("data-category");
      if (category === "all") {
        renderChannels();
      } else {
        const filteredChannels = channels.filter(
          (channel) => channel.group === category
        );
        renderChannels(filteredChannels);
      }
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        item.click();
      }
    });
  });

  // Remote control navigation
  let focusedElement = document.activeElement;

  document.addEventListener("keydown", (e) => {
    // Handle player controls when player is open
    if (playerModal.style.display === "flex") {
      switch (e.key) {
        case "Escape":
          if (qualityPopup.style.display === "flex") {
            qualityPopup.style.display = "none";
            qualityBtn.focus();
          } else {
            closePlayer.click();
          }
          break;
        case "f":
        case "F":
          fullscreenBtn.click();
          break;
        case " ":
          e.preventDefault();
          playPauseBtn.click();
          break;
      }
      return;
    }

    // Only handle remote control keys when player modal is not open
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        navigate("up");
        break;
      case "ArrowDown":
        e.preventDefault();
        navigate("down");
        break;
      case "ArrowLeft":
        e.preventDefault();
        navigate("left");
        break;
      case "ArrowRight":
        e.preventDefault();
        navigate("right");
        break;
      case "Enter":
        e.preventDefault();
        if (focusedElement) {
          focusedElement.click();
        }
        break;
    }
  });

  function navigate(direction) {
    const focusableElements = Array.from(
      document.querySelectorAll(
        ".channel-card, .category-item, .search-container input, .close-btn, .quality-option, .control-btn"
      )
    );

    if (focusableElements.length === 0) return;

    const currentIndex = focusableElements.indexOf(focusedElement);
    let nextIndex = currentIndex;

    switch (direction) {
      case "up":
        if (currentIndex <= 0) {
          nextIndex = focusableElements.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
        break;
      case "down":
        if (currentIndex >= focusableElements.length - 1) {
          nextIndex = 0;
        } else {
          nextIndex = currentIndex + 1;
        }
        break;
      case "left":
        // Handle grid navigation for channels
        if (
          focusedElement &&
          focusedElement.classList.contains("channel-card")
        ) {
          const gridColumns = Math.floor(channelGrid.offsetWidth / (200 + 24)); // 200px card width + 24px gap
          const row = Math.floor(currentIndex / gridColumns);
          const col = currentIndex % gridColumns;

          if (col > 0) {
            nextIndex = currentIndex - 1;
          } else {
            nextIndex = Math.min(
              currentIndex + gridColumns - 1,
              focusableElements.length - 1
            );
          }
        } else {
          nextIndex = Math.max(0, currentIndex - 1);
        }
        break;
      case "right":
        // Handle grid navigation for channels
        if (
          focusedElement &&
          focusedElement.classList.contains("channel-card")
        ) {
          const gridColumns = Math.floor(channelGrid.offsetWidth / (200 + 24)); // 200px card width + 24px gap
          const row = Math.floor(currentIndex / gridColumns);
          const col = currentIndex % gridColumns;

          if (
            col < gridColumns - 1 &&
            currentIndex < focusableElements.length - 1
          ) {
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = row * gridColumns;
          }
        } else {
          nextIndex = Math.min(focusableElements.length - 1, currentIndex + 1);
        }
        break;
    }

    if (nextIndex !== currentIndex) {
      focusableElements[nextIndex].focus();
      focusedElement = focusableElements[nextIndex];
    }
  }

  // Initialize the app
  renderChannels();
  setupPlayerControls();

  // Set initial focus
  if (channelGrid.firstChild) {
    channelGrid.firstChild.focus();
    focusedElement = channelGrid.firstChild;
  }
});
