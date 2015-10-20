React Authentication Starter
=====

> A fullstack solution to your authentication needs. Built with React, Express and MongoDB

#### Getting started
```
$ git clone <this_repo>
$ npm install
$ nodemon server 
```

### Deployment

```sh
heroku create <app_name>
heroku config:set NODE_ENV=production
heroku addons:create mongolab:sandbox 
heroku config | grep MONGOLAB_URI
git push heroku master
heroku ps:scale web=1
```

### Contributing

> Do it. Submit a PR
