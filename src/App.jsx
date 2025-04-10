import React from "react";

// Site properties object to store user information
const siteProps = {
  name: "Rupa Accenture",
  title: "Web Developer",
  email: "rupa@example.com",
  phone: "+123456789",
  socialMedia: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/rupa" },
    { platform: "GitHub", url: "https://github.com/RupaAccenture" },
  ],
};

function App() {
  return (
    <div>
      <header>
        <h1>{siteProps.name}</h1>
        <p>{siteProps.title}</p>
        <p>Email: {siteProps.email}</p>
        <p>Phone: {siteProps.phone}</p>
      </header>
      <footer>
        <ul>
          {siteProps.socialMedia.map((media) => (
            <li key={media.platform}>
              <a href={media.url}>{media.platform}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
