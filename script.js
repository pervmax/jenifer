// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuBtn = document.querySelector(".mobile-menu-btn i")

  mobileMenu.classList.toggle("active")

  if (mobileMenu.classList.contains("active")) {
    menuBtn.className = "fas fa-times"
  } else {
    menuBtn.className = "fas fa-bars"
  }
}

// Close mobile menu when clicking on a link
document.addEventListener("DOMContentLoaded", () => {
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobileMenu")
      const menuBtn = document.querySelector(".mobile-menu-btn i")

      mobileMenu.classList.remove("active")
      menuBtn.className = "fas fa-bars"
    })
  })
})

// Generate memories timeline
function generateMemoriesTimeline() {
  const memoriesTimeline = document.getElementById("memoriesTimeline")
  if (!memoriesTimeline) return

  const memories = [
    {
      title: "First 'I Love You'",
      date: "[Add date]",
      description: "[Add the story of when you first said 'I love you' to each other]",
      icon: "fas fa-heart",
      color: "pink",
    },
    {
      title: "Our First Trip Together",
      date: "[Add date]",
      description: "[Add details about your first trip or vacation together]",
      icon: "fas fa-map-marker-alt",
      color: "rose",
    },
    {
      title: "Meeting the Family",
      date: "[Add date]",
      description: "[Add the story of meeting each other's families]",
      icon: "fas fa-star",
      color: "pink",
    },
    {
      title: "Our First Anniversary",
      date: "[Add date]",
      description: "[Add how you celebrated your first anniversary together]",
      icon: "fas fa-gift",
      color: "rose",
    },
    {
      title: "Moving In Together",
      date: "[Add date]",
      description: "[Add the story of when you moved in together or a major milestone]",
      icon: "fas fa-heart",
      color: "pink",
    },
    {
      title: "A Special Surprise",
      date: "[Add date]",
      description: "[Add a memory of a special surprise you planned for each other]",
      icon: "fas fa-gift",
      color: "rose",
    },
  ]

  memories.forEach((memory, index) => {
    const memoryItem = document.createElement("div")
    memoryItem.className = "memory-item"

    const memoryCard = document.createElement("div")
    memoryCard.className = "memory-card"

    const memoryPhoto = document.createElement("div")
    memoryPhoto.className = "memory-photo"

    memoryCard.innerHTML = `
            <div class="memory-header">
                <i class="${memory.icon}"></i>
                <h3>${memory.title}</h3>
            </div>
            <div class="memory-date">
                <i class="fas fa-calendar"></i>
                <span>${memory.date}</span>
            </div>
            <p class="memory-text">${memory.description}</p>
        `

    memoryPhoto.innerHTML = `
            <div class="photo-placeholder ${memory.color === "rose" ? "rose" : ""}">
                <i class="fas fa-camera"></i>
                <p>Memory Photo</p>
                <span>Add a photo from this special moment</span>
            </div>
        `

    memoryItem.appendChild(memoryCard)
    memoryItem.appendChild(memoryPhoto)
    memoriesTimeline.appendChild(memoryItem)
  })
}

// Add smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Initialize page-specific content
document.addEventListener("DOMContentLoaded", () => {
  generateMemoriesTimeline()

  // Add hover effects to cards
  const cards = document.querySelectorAll(".nav-card, .story-card, .featured-card, .memory-card, .wish-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

// Add floating hearts animation (optional enhancement)
function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.innerHTML = "💕"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * 100 + "vw"
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"
  heart.style.opacity = "0.7"
  heart.style.fontSize = "20px"
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "1000"
  heart.style.animation = "floatUp 4s ease-in-out forwards"

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 4000)
}

// Add CSS for floating hearts animation
const style = document.createElement("style")
style.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            transform: translateX(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            bottom: 100vh;
            transform: translateX(-100px) rotate(180deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Trigger floating hearts occasionally (optional - uncomment to enable)
// setInterval(createFloatingHeart, 10000);
