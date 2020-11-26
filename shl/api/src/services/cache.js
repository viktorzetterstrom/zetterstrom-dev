const NodeCache = require("node-cache");
const config = require("../config");

const cache = new NodeCache();

const routeCacher = async (req, res, next) => {
  const cacheKey = req.path;
  console.log(cacheKey);
  const cached = await cache.get(cacheKey);
  console.log(cached);
  if (cached) {
    return res.send({ source: "cache", data: cached });
  }
  next();
};

const addToCache = (key, value) => {
  cache.set(key, value, config.cacheLifeSpan);
};

module.exports = {
  routeCacher,
  addToCache,
};
