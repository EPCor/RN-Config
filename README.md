# RNAPP

## Path Aliases

```yml
"~/*": ["./src/*"],
"@*": ["./*"],
"@test/*": ["./__test__/*"]
```

## folder structures

```sh
├── LICENSE
├── README.md
├── jsconfig.json|tsconfig.json # define a JS|TS root project
├── package.json # npm
├── index.js # main
├── src/ # source code
│   ├── @types/ # TypeScript Declaration Files
│   ├── components/
│   ├── screens/
│   ├── utils/ # entry file
│   ├── routes/ # pages/view
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── index.html
│   └── index.js
├── docs/
│   ├── FAQ.md
│   └── README.md
├── __test__/ # test case
└── config/
```
