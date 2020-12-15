const express = require("express")
const app = new express()
 
const renderMenu = (currentPage) => {
  const selectedStyle = "color: pink;"

 
  return `
    <ul>
      <li><a href="/" style="${currentPage === "home" ? selectedStyle : ""}">Home</a></li>
      <li><a href="/cani" style="${currentPage === "cani" ? selectedStyle : ""}">Cani</a></li>
      <li><a href="/cani/lista" style="${currentPage === "listacani" ? selectedStyle : ""}">ListaCani</a></li>
      <li><a href="/gatti" style="${currentPage === "gatti" ? selectedStyle : ""}">Gatti</a></li>
      <li><a href="/gatti/lista" style="${currentPage === "listagatti" ? selectedStyle : ""}">ListaGatti</a></li>
    </ul>
  `
}

const renderHtml = (currentPage, body) => {
  return ` 
  <!DOCTYPE html>
  <html>
    <head>
      <title>La mia pagina web</title>
    </head>
    <body>
      ${renderMenu(currentPage)}
      ${body}
    </body>
  </html>
`
}
 
app.get("/", (req, res) => {
  res.send(renderHtml("home", "<h1>Questa e' la mia home</h1>"))
})

app.get("/cani", (req, res) => {
  res.send(renderHtml("cani", `
  <h1>Questa e' una pagina sui cani</h1>
  `))
})


const listacani = [
  { 
    nome: "dobermann",
  },
  { 
    nome: "labrador",
  },
  { 
    nome: "maltese",
  }
]
 
app.get("/cani/lista", (req, res) => {
  res.send(renderHtml("listacani", `
  <h1>Questa e' una lista di cani</h1>
  <ul>
    ${listacani.map((e => {
      return `
      <li>
        <div>
          <h3>${e.nome}</h3>
        </div>
      </li>
      `
    })).join(" ")}
  </ul>
  `))
})

app.get("/gatti", (req, res) => {
  res.send(renderHtml("gatti", `
  <h1>Questa e' una pagina sui gatti</h1>
  `))
})

const listagatti = [
  { 
    nome: "persiano",
  },
  { 
    nome: "siamese",
  },
  { 
    nome: "bengala",
  }
]
 
app.get("/gatti/lista", (req, res) => {
  res.send(renderHtml("listagatti", `
  <h1>Questa e' una lista di gatti</h1>
  <ul>
    ${listagatti.map((e => {
      return `
      <li>
        <div>
          <h3>${e.nome}</h3>
        </div>
      </li>
      `
    })).join(" ")}
  </ul>
  `))
})

 
app.listen(3000, () => console.log("server listening on port 3000"))