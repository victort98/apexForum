module.exports = function (settings) {
  
    let { restPrefix } = settings;
  
    return function (req, res, next) {
     
      if (req.url.indexOf(restPrefix) !== 0) {
        next();
        return;
      }
  
      let tableName = req.url.replace(restPrefix, '').split('/')[0];

      if (typeof settings[tableName] !== 'function' || !settings[tableName](
        req.session.user || {}, req.method, req
      )) {
        res.status(403);
        res.json({ error: 'Not allowed' });
        return;
      }
  
      next();
  
    };
  };