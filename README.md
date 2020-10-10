# RN-Config

React Native Engineering Configuration

| Branch Name        | Feature                  |       Stage        |
| :----------------- | :----------------------- | :----------------: |
| [master][b-master] | React Navigation + Redux |   :construction:   |
| [rn][b-rn]         | Basic React Native       | :white_check_mark: |

## Usage

<a class="btn btn-sm btn-primary ml-2" href="https://github.com/EPCor/RN-Config/generate">Use this template</a> or clone this repository

```sh
$ npm i # Install
$ npm start # Start Server
$ npm run android # Run on Android
$ npm run ios # Run on ios
```

## dependencies

```json
{
  "react": "16.13.1",
  "react-native": "0.63.2"
}
```

## Path Aliases

```yml
"~/*": ["./src/*"],
"@*": ["./*"],
"@test/*": ["./__test__/*"]
```

## Folder Structures

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
│   ├── utils/
│   ├── routes/ # pages/view
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── index.html
│   └── index.js # entry file
├── docs/
│   ├── FAQ.md
│   └── README.md
├── __test__/ # test case
└── config/
```

## License

[MIT License](/LICENSE)
