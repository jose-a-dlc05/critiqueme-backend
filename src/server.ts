import "./lib/env";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
