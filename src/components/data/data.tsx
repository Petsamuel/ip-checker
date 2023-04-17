const Secret_key = import.meta.env.VITE_APP_IP_SECRET_KEY;

export default {
  mapTiler: {
    url: "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=NsqvonMiWjGYbX8UeWwe",
    attributions:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  },
  secret_key: {
    secret_key: `${import.meta.env.VITE_APP_IP_SECRET_KEY}`,
  },
  Geo_location: {
    url: "https://geo.ipify.org/api/v2/country",
  },
  headers: {
    "Content-Type": "application/json",
    "x-api-key": `${Secret_key}`,
  },
};
