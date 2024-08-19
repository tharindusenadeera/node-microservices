const express = require("express");
const Registry = require("../lib/Registry");

const router = express.Router();
const registry = new Registry();

router.put(
  "/register/:servicename/:serviceversion/:serviceport",
  (req, res, next) => {
    const { servicename, serviceversion, serviceport } = req.params;
    const serviceip = req.ip;
    if (serviceip.includes("::1") || serviceip.includes("::ffff:127.0.0.1")) {
      serviceip = "127.0.0.1";
    }
    const key = registry.register(
      servicename,
      serviceversion,
      serviceip,
      serviceport
    );
    return res.json({ result: key });
  }
);

router.put(
  "/register/:servicename/:serviceversion/:serviceport",
  (req, res, next) => {
    return next("Not implemented");
  }
);

router.get("/find/:servicename/:serviceversion", (req, res, next) => {
  return next("Not implemented");
});

module.exports = router;
