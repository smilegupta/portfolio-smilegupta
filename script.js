function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="white";
    document.getElementById('codepen').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Chat Loop",
    projectDescription:
      "Chat Loop is a highly scalable, low cost and high performant chat application built on AWS and React leveraging GraphQL subscriptions for real time communication.",
    projectImage: "images/chatloop.png",
    codeLink: "https://github.com/smilegupta/chatloop-frontend",
    demoLink: "https://chat-loop.smilegupta.tech/"
  },{
    projectName: "Image Dock",
    projectDescription:
      "ImageDock is a one-stop solution to upload images, create albums and get embedded codes.",
    projectImage: "images/imagedock.png",
    codeLink: "https://github.com/smilegupta/ImageDock",
    demoLink: "https://image-dock.smilegupta.tech/"
  },{
    projectName: "Notes Yard",
    projectDescription:
      "Its an application to create notes and notebooks.",
    projectImage: "images/notesyard.png",
    codeLink: "https://github.com/smilegupta/notes-yard-frontend",
    demoLink: "https://notes-yard.smilegupta.tech/"
  },{
    projectName: "Movies Deck",
    projectDescription:
      "Movie's Deck is a movie listing application. In addition to exploring and searching the listed movies, you can also create watchlists and add movies in your watchlists.",
    projectImage: "images/movies.png",
    codeLink: "https://github.com/smilegupta/movies-deck",
    demoLink: "https://movies-deck.smilegupta.tech/"
  },
  {
    projectName: "Talent Board",
    projectDescription:
      "This is a community initiative to connect active job seekers with organizations and people who participate in employee referral programs.",
    projectImage: "images/talentboard.png",
    codeLink: "https://github.com/CodeOpsTechnologies/talent-board-fe",
    demoLink: "https://talent.awsug.in/"
  },
  {
    projectName: "Pokedex",
    projectDescription:
      "Pokedex is an application built using typescript to get the check the list of pokemons and their properties.",
    projectImage: "images/pokedex.png",
    codeLink: "https://github.com/smilegupta/pokedex",
    demoLink: "https://pokedeck.smilegupta.tech/"
  },
  {
    projectName: "Lets Play with APIs: Breaking Bad",
    projectDescription:
      "Designed & built a the application using Axios and React-Hooks to display characters of a Sci-fic show Breaking Bad.",
    projectImage: "images/Screenshot (698).png",
    codeLink: "https://github.com/smilegupta/breaking-bad",
    demoLink: "https://breaking-bad-api-pink.vercel.app/"
  },
  {
    projectName: "Portfolio with Theme Changer",
    projectDescription:
      "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show case the Professional Journey.",
    projectImage: "images/Screenshot (851).png",
    codeLink: "https://github.com/smilegupta/portfolio-smilegupta",
    demoLink: "https://smilegupta.github.io/portfolio-smilegupta/"
  },
  {
    projectName: "Rotating Navigation",
    projectDescription:
      "Designed & Built the Rotating NavBar animation using HTML CSS and Vanilla avaScript.",
    projectImage: "images/rotating-nav.png",
    codeLink: "https://github.com/smilegupta/Rotating-navigation",
    demoLink: "https://smilegupta.github.io/Rotating-navigation/"
  },
  {
    projectName: "Expanding Card Animation",
    projectDescription:
      "Designed & Built the Expanding Cards animation using HTML CSS and Vanilla JavaScript.",
    projectImage: "images/animation.png",
    codeLink: "https://github.com/smilegupta/expanding-cards",
    demoLink: "https://smilegupta.github.io/expanding-cards/"
  },
  {
    projectName: "Password Strength Tester",
    projectDescription:
      "Designed & Built the Password Strength Tester using React-Hooks and 'zxcvbn' package.",
    projectImage: "images/password.png",
    codeLink: "https://github.com/smilegupta/password-strength-validator",
    demoLink: "https://github.com/smilegupta/password-strength-validator"
  },
  {
    projectName: "Light Dark Switch",
    projectDescription:
      "Designed & Built the Light and Dark Switch using React-Hooks and local storage.",
    projectImage: "images/switch.png",
    codeLink: "https://github.com/smilegupta/Dark-Light-mode",
    demoLink: "https://dark-light-mode.vercel.app/"
  },
  {
    projectName: "Hangman Game",
    projectDescription:
      "Designed & Built Hangman Game using React and React-Hooks.",
    projectImage: "images/hangman.png",
    codeLink: "https://github.com/smilegupta/Hangman-Game-React",
    demoLink: "https://hangman-game-react.vercel.app/"
  },
  {
    projectName: "Devil Button",
    projectDescription:
      "Designed & Built Devil Button Game using HTML and JavaScript.",
    projectImage: "images/devil button.png",
    codeLink: "https://github.com/smilegupta/Devil-Button",
    demoLink: "https://smilegupta.github.io/Devil-Button/"
  },
  {
    projectName: "JavaScript Quiz",
    projectDescription:
      "Designed & Built Quizzing Application using HTML CSS and Vanilla JavaScript.",
    projectImage: "images/quiz.png",
    codeLink: "https://smilegupta.github.io/JavaScript-QuizApp/",
    demoLink: "https://smilegupta.github.io/JavaScript-QuizApp/"
  },
 
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();

