const projectItems = [
    {
        repo: "https://github.com/jackwellerreal/chat",
        title: "Chat Client",
        description:
            "This is basically a clone of Discord that I made using Firebase. I originally intended it to be a single HTML file but then I decided to make it a desktop app using Electron.",
    },
    {
        repo: "https://github.com/jackwellerreal/chat",
        title: "BOM Website",
        description:
            "I have created this redesign for the Bureau of Meteorology website because I believe that the current website has a quite outdated design and UI.",
    },
    {
        repo: "https://github.com/jackwellerreal/nodejs-maze",
        title: "NodeJS Maze",
        description:
            "This is a maze game that I made for a hackerthon. It runs in the CLI and is really inefficient.",
    },
    {
        repo: "https://github.com/jackwellerreal/konnect",
        title: "Konnect",
        description:
            "This is my first major project that I have worked on. It is basically a twitter clone that I made using React and Firebase.",
    },
    {
        repo: "https://github.com/jackwellerreal/bom-radar",
        title: "BOM Radar GIF",
        description:
            "This uses the BOM FTP server to stitch together radar images to create a GIF.",
    },
    {
        repo: "https://github.com/jackwellerreal/projectmanager",
        title: "Project Manager",
        description:
            "I created this for when I wanted to start a new project with custom templates like a React app or Electron.",
    },
];


const blogItems = [
    {
        id: "redrooster",
        title: "How I hacked Red Rooster to get unlimited free food.",
    },
];

function renderProjectItems() {
    const projectSection = document.getElementById("projectItems");

    if (!projectSection) return;
    
    projectItems.forEach((item) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("item");
        projectItem.innerHTML = `
            <h3>
                ${item.title}
                <a href="${item.repo}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" />
                    </svg>
                </a>
            </h3>
            <p>${item.description}</p>
        `;
        projectSection.appendChild(projectItem);
    });
}

function renderBlogItems() {
    const blogSection = document.getElementById("blogItems");

    if (!blogSection) return;

    blogItems.forEach((item) => {
        const blogItem = document.createElement("div");
        blogItem.classList.add("item");
        blogItem.innerHTML = `
            <a href="/blog/${item.id}/">
                <img src="/blog/${item.id}/assets/title.jpg" />
            </a>
            <h3>${item.title}</h3>
        `;

        blogSection.appendChild(blogItem);
    });
}

renderProjectItems(); 
renderBlogItems();