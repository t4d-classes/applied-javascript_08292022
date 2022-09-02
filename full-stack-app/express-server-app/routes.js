import express from 'express';

export const createAPI = (resourceName, Model) => {

  const router = express.Router();

  router.route(`/${resourceName}`)
    .get((req, res) => {

      Model.find((err, resources) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        res.json(resources.map(resource => resource.toObject()));

      });

    })
    .post((req, res) => {

      const newResource = new Model({
        ...req.body,
      });

      newResource.save((err, resource) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        res.json(resource.toObject());

      });

    });

  router.route(`/${resourceName}/:resourceId`)
    .get((req, res) => {

      Model.findOne({ _id: req.params.resourceId }, (err, resource) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        res.json(resource.toObject());

      });      

    })
    .put((req, res) => {
      Model.findOne({ _id: req.params.resourceId }, (err, resource) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        const oldResource = resource.toObject();

        const updatedCar = { ...req.body };
        delete updatedCar.id;

        Model.updateOne(
          { _id: req.params.resourceId },
          Object.assign(resource, updatedCar),
          err => {

            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
            }
            
            res.json(oldResource);
          }
        );
      });      
    })
    .delete((req, res) => {
      Model.findOne({ _id: req.params.resourceId }, (err, resource) => {

        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }

        Model.deleteOne(
          { _id: req.params.resourceId }, err => {

            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
            }
            
            res.json(resource.toObject());
          }
        );
      });      
    });

  return router;

};