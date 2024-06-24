const express = require('express')
const app = express()
const port = 5000
const coverIt = require('../qw-tool');
const path = require('path');
const fs = require('fs');

app.get("/generateTestCoverage", async (req, res) => {
  try {
    await coverIt.generateTestCoverage();
    res.redirect('/coverage/sideBySideView.html');
  } catch (err) {
    console.log(err);
  };
});


function grover() {
  console.log('test');
}

app.get("/api1", (req, res) => {
  const himanshu = () => {
    console.log('test');
  }
  himanshu();
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
});

app.get("/api2", (req, res) => {
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
});

app.get("/api3", (req, res) => {
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
});

// Creating Web Server
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build", "index.html"));
});
app.use(express.static("public/build"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})