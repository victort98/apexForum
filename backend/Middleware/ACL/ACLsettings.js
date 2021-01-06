module.exports = {

    restPrefix: '/api/',
    users(user, method, req) {
      // Allow everyone to create a user if the userRole is basicUser
      if (method === 'POST' && req.body.userRole === 'user') { return true; }

      // Allow admins to create a user with any role...
      if (method === 'POST' && user.userRole === 'admin') { return true;}

      // Allow all logged in users to a see a list of other users
      if (method === 'GET' && user.userRole) { return true; }

      // Allow admins to change info about a user
      if (method === 'PUT' && user.userRole === 'admin') { return true; }

      // Allow a user to change info about him/herself
      // (the split pop thing is how we get the id from the url
      // since we do not have req.params available in middleware)
      if (method === 'PUT' && +req.url.split('/').pop() === user.id) { return true; }

      // Allow admins to delete users
      if (method === 'DELETE' && user.userRole === 'admin') { return true; }
      
      return false; // otherwise do not allow the request
    },
    login() { 
      // Everyone should always be allowd to try to login and to logout
      return true;
    }
  }