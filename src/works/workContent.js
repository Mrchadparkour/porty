import dungeon from './screenShots/dungeon.jpg';
import form from './screenShots/form.jpg';
import marvel from './screenShots/marvel.jpg';
import nodePic from './screenShots/node.jpg';
import electronPic from './screenShots/electron.jpg';

export default [
  {
    title: "Marvel Comic View",
    image: marvel,
    desc: "Made this so demonstrate knowledge of api's as part of a Job application, I still like it though.",
    gitLinks: ["https://github.com/Mrchadparkour/Marvel-Mobx"],
    wLink: "https://marvelmobx.herokuapp.com/",
    xRules: ''
  },
  {
    title: "Dungeon Crawler",
    image: dungeon,
    desc: "Probably the most fun I've ever had on a personal project and a tribute to some of my favorite video games. Go play it! It's fun!",
    gitLinks: ["https://github.com/Mrchadparkour/mobx-dungeon-crawler"],
    wLink: "https://mrchadparkour.github.io/mobx-dungeon-crawler/",
    xRules: 'BadBack'
  },
  {
    title: "Blended Node Form",
    image: form,
    desc: "A simple form I made for blendedMarket over a couple weekends, complete with a node backend, React and Redux! The git leads to the backend.",
    gitLinks: ["https://github.com/Mrchadparkour/simple-smtp-server"],
    wLink: "http://signup.blendedmarket.com/client-setup",
    xRules: ''
  },
  {
    title: "RollConverter",
    image: nodePic,
    desc: "A tool that accepts many .pdfs, .csvs, or .xlsxs and compiles them into a single normalized spreadsheet with applied buisness rules, and other multi cell calculations. I handled the multple formats by building a library and composing classes from that library. It runs a node backend with the xlsx and pdfjs npm packages. My team and I hope to extend this into a payroll workspace.",
    gitLinks: [],
    wLink: null,
    xRules: ''
  },
  {
    title: "Route Uploader",
    image: electronPic,
    desc: "My boss at Edulog handed my Team and I a list of webpages with no APIs and said to turn them into a app that handled uploading map data to a server. In order to deal with the lack of APIs we got a little hackery by calling in hidden webviews and injecting javascript to run the correct processes and send us back our maps. It was built with electron. I am unable to disclose any other information.",
    gitLinks: [],
    wLink: null,
    xRules: ''
  }
]
