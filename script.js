
const chapter1 = `Loneliness has been depicted throughout history as a tragic, isolating experience, yet this portrayal often neglects the transformative potential of solitude. From early childhood, we are bombarded with the message that to be alone is to be undesirable, to be in need of rescue, and to be forever incomplete without the validation of others. However, when we look deeper, solitude reveals itself as a unique opportunity—a space where the mind can wander freely, the heart can find its true rhythm, and creativity can flourish without the constraints of external expectations. In this quiet haven, every moment of introspection becomes a stepping stone towards self-discovery. The richness of our inner world often remains hidden behind a facade of social conformity, yet it is in these solitary moments that we are able to peel away the layers imposed upon us by society. The journey to embrace loneliness as a catalyst for personal growth begins with the realization that the only constant companion we truly have is ourselves, and in that realization lies the power to change our destiny.`;
const chapter2 = `chapter2`;
const chapter3 = `chapter3`;
const chapter4 = `chapter4`;
const chapter5 = `chapter5`;
const chapter6 = `chapter6`;
const chapter7 = `chapter7`;
const chapter8 = `chapter8`;
const chapter9 = `chapter9`;
const chapter10 = `chapter10`;
const chapter11 = `chapter11.`;


    
function chaptersContent(paragraph) {
  return paragraph;
}

// Define detailed chapter content for each chapter
const chapters = {
  1: {
    title: "Chapter 1: Stop Romanticizing Loneliness",
    content: `<div class="card">
      <p>${chaptersContent(chapter1)}</p>
    </div>`
  },
  2: {
    title: "Chapter 2: The Pain of Hiding Your True Self",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  3: {
    title: "Chapter 3: How to Be YOU",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  4: {
    title: "Chapter 4: The Love for Solitude",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  5: {
    title: "Chapter 5: Practicing The ART of Being Alone",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  6: {
    title: "Chapter 6: Turn Loneliness Into Growth",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  7: {
    title: "Chapter 7: Make a New Best Bud",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  8: {
    title: "Chapter 8: Building a Dream Life Plan",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  9: {
    title: "Chapter 9: The Action Plan",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  10: {
    title: "Chapter 10: Make Your Alone Time Addictive",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  },
  11: {
    title: "Chapter 11: Become Independent",
    content: `<div class="card">
      <p>${chaptersContent(chapter2)}</p>
    </div>`
  }
};

let currentChapter = 1;

function updateContent(chapter) {
  const chapterData = chapters[chapter];
  const contentDiv = document.getElementById('chapterContent');
  contentDiv.innerHTML = `<h1>${chapterData.title}</h1>` + chapterData.content;
  // Update active link in sidebar
  document.querySelectorAll('.chapter-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-chapter') == chapter);
  });
  // Update navigation buttons' state
  document.getElementById('prevBtn').disabled = (chapter === 1);
  document.getElementById('nextBtn').disabled = (chapter === Object.keys(chapters).length);
}

// Event listeners for navigation buttons
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentChapter > 1) {
    currentChapter--;
    updateContent(currentChapter);
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentChapter < Object.keys(chapters).length) {
    currentChapter++;
    updateContent(currentChapter);
  }
});

// Event listeners for chapter links in the sidebar
document.querySelectorAll('.chapter-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentChapter = parseInt(e.target.getAttribute('data-chapter'));
    updateContent(currentChapter);
  });
});

// Load initial chapter on page load
updateContent(currentChapter);