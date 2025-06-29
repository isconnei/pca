window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const header = document.getElementById("navbar");
    const body = document.body;
  
    if (scrollY > window.innerHeight / 2) {
      header.classList.add("scrolled");
      body.classList.add("scrolled");
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
    } else {
      header.classList.remove("scrolled");
      body.classList.remove("scrolled");
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--text-color', 'white');
    }
  });
  