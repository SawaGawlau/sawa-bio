import dotenv from 'dotenv'
process.env.NODE_ENV =
  process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development'
dotenv.config({ path: `./environments/.env.${process.env.NODE_ENV}` })
