const express = require("express");
const cors = require("cors");


const mongoconnection = require("../database/connection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.pathsMongo = {
      pais: "/pais",
      ciudades: "/ciudades",
      famosos: "/famosos",
      personajes: "/personajes",
      platos: "/platos",
      sitios: "/sitios",
      menu: "/menú",
      usuarios: "/usuarios",
      visitas: "/visitas",
      tags: "/tags",
    };

    this.mongoconnection();
    this.app.use(cors());
    this.app.use(express.json()); 
    this.routesM();
  }

  async mongoconnection() {
    await mongoconnection();
  }

  routesM() {
    this.app.use(this.pathsMongo.pais, require("../routes/pais.routes")); //
    this.app.use(this.pathsMongo.ciudades, require("../routes/ciudad.routes")); //
    this.app.use(this.pathsMongo.famosos, require("../routes/famoso.routes"));//  
    this.app.use(this.pathsMongo.personajes, require("../routes/personaje.routes"));
    this.app.use(this.pathsMongo.platos, require("../routes/plato.routes")); 
    this.app.use(this.pathsMongo.sitios,require("../routes/sitio.routes")); //
    this.app.use(this.pathsMongo.menu, require("../routes/menuSitio.routes")); 
    this.app.use(this.pathsMongo.usuarios, require("../routes/usuario.routes"));
    this.app.use(this.pathsMongo.visitas, require("../routes/visita.routes"));
    this.app.use(this.pathsMongo.tags, require("../routes/tag.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("SERVIDOR CORRIENDO EN PUERTO", this.port);
    });
  }
}

module.exports = Server