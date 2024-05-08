# project Name

social media

# project Description

Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, X/Twitter, Instagram, LinkedIn, and YouTube accounts.

# project Technology

- Node.js:v20.11.0
- NPM:v6.14.8
- Express
- MongoDB
- nx monorepo

# how to install project

npm install

# how to run project

npm run all

# folder and files

.
├── friend-request
│ ├── jest.config.ts
│ ├── project.json
│ ├── src
│ │ ├── assets
│ │ ├── config
│ │ │ └── db.ts
│ │ ├── controller
│ │ │ ├── friendlist.ts
│ │ │ └── sendRequest.ts
│ │ ├── main.ts
│ │ ├── midlleware
│ │ │ └── auth.ts
│ │ ├── model
│ │ │ ├── friendList.ts
│ │ │ └── sendRquest.ts
│ │ ├── route
│ │ │ ├── frinedListRoutes.ts
│ │ │ └── sendFriendRoutes.ts
│ │ ├── service
│ │ │ ├── frinedlist.ts
│ │ │ └── sendRequest.ts
│ │ ├── utils
│ │ │ ├── commanFunction
│ │ │ │ ├── commonRespons.ts
│ │ │ │ ├── constant.ts
│ │ │ │ └── response.ts
│ │ │ ├── enums
│ │ │ │ ├── errorMessageEnums.ts
│ │ │ │ ├── messageEnum.ts
│ │ │ │ ├── roleEnum.ts
│ │ │ │ └── statusCodeEnums.ts
│ │ │ └── interface
│ │ │ ├── IFriendList.ts
│ │ │ └── ISendRequest.ts
│ │ └── vailidation
│ │ └── joivalidation.ts
│ ├── tsconfig.app.json
│ ├── tsconfig.json
│ └── tsconfig.spec.json
├── friend-request-e2e
│ ├── jest.config.ts
│ ├── project.json
│ ├── src
│ │ ├── friend-request
│ │ │ └── friend-request.spec.ts
│ │ └── support
│ │ ├── global-setup.ts
│ │ ├── global-teardown.ts
│ │ └── test-setup.ts
│ ├── tsconfig.json
│ └── tsconfig.spec.json
├── social-media
│ ├── jest.config.ts
│ ├── project.json
│ ├── src
│ │ ├── assets
│ │ ├── config
│ │ │ └── db.ts
│ │ ├── controller
│ │ │ └── userController.ts
│ │ ├── env.ts
│ │ ├── main.ts
│ │ ├── middleware
│ │ │ └── auth.ts
│ │ ├── model
│ │ │ └── userModel.ts
│ │ ├── routes
│ │ │ └── userRoutes.ts
│ │ ├── services
│ │ │ ├── IUserServices.ts
│ │ │ └── userServices.ts
│ │ ├── utils
│ │ │ ├── commonFunction
│ │ │ │ ├── commomFunction.ts
│ │ │ │ ├── commonRespons.ts
│ │ │ │ ├── constant.ts
│ │ │ │ ├── ITokenDetails.ts
│ │ │ │ └── response.ts
│ │ │ ├── enums
│ │ │ │ ├── ErrorMessageEnum.ts
│ │ │ │ ├── invitationRoleEnum.ts
│ │ │ │ ├── messageEnum.ts
│ │ │ │ ├── roleEnum.ts
│ │ │ │ ├── statusCodeEnum.ts
│ │ │ │ └── statusEnum.ts
│ │ │ └── interface
│ │ │ ├── IPost.ts
│ │ │ └── Iuser.ts
│ │ └── vailidation
│ │ └── joivalidation.ts
│ ├── tsconfig.app.json
│ ├── tsconfig.json
│ ├── tsconfig.spec.json
│ └── webpack.config.js
├── social-media-e2e
│ ├── jest.config.ts
│ ├── project.json
│ ├── src
│ │ ├── social-media
│ │ │ └── social-media.spec.ts
│ │ └── support
│ │ ├── global-setup.ts
│ │ ├── global-teardown.ts
│ │ └── test-setup.ts
│ ├── tsconfig.json
│ └── tsconfig.spec.json
├── user-posts
│ ├── jest.config.ts
│ ├── project.json
│ ├── src
│ │ ├── assets
│ │ ├── config
│ │ │ └── db.ts
│ │ ├── controller
│ │ │ └── postController.ts
│ │ ├── main.ts
│ │ ├── model
│ │ │ └── postModels.ts
│ │ ├── routes
│ │ │ └── routes.ts
│ │ ├── services
│ │ │ └── postServices.ts
│ │ ├── utils
│ │ │ ├── commonFunction
│ │ │ │ ├── commomFunction.ts
│ │ │ │ ├── commonRespons.ts
│ │ │ │ ├── constant.ts
│ │ │ │ ├── ITokenDetails.ts
│ │ │ │ └── response.ts
│ │ │ ├── enums
│ │ │ │ ├── ErrorMessageEnum.ts
│ │ │ │ ├── invitationRoleEnum.ts
│ │ │ │ ├── messageEnum.ts
│ │ │ │ ├── roleEnum.ts
│ │ │ │ ├── statusCodeEnum.ts
│ │ │ │ └── statusEnum.ts
│ │ │ └── interface
│ │ │ └── IPost.ts
│ │ └── validations
│ │ └── joivalidation.ts
│ ├── tsconfig.app.json
│ ├── tsconfig.json
│ └── tsconfig.spec.json
└── user-posts-e2e
├── jest.config.ts
├── project.json
├── src
│ ├── support
│ │ ├── global-setup.ts
│ │ ├── global-teardown.ts
│ │ └── test-setup.ts
│ └── user-posts
│ └── user-posts.spec.ts
├── tsconfig.json
└── tsconfig.spec.json
