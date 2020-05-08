const colors = require('colors');
const lugar = require("./api/lugar");
const clima = require("./api/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "nombre de la cuidad que desea consultar",
    demand: true,
  },
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(32.490002, -115.010002).then(console.log).catch(console.log);

const getInfo = async (direccion) => {
  try {
    const coordenadas = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
    return (`La temperatuna de ${coordenadas.direccion} es de ${temp}.`).green;
  } catch (err) {
    return (`No se pudo determinar el clima de ${direccion}`).red;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
