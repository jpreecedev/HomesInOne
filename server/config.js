module.exports = {
  sequelize: {
    development: {
      username: 'postgres',
      password: 'password',
      database: 'homesinone-dev',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    test: {
      username: 'postgres',
      password: 'password',
      database: 'homesinone-dev',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    production: {
      username: 'postgres',
      password: 'password',
      database: 'homesinone-dev',
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  },
  authentication: {
    jwtSecret: 'MyS3cr3tK3Y',
    jwtSession: {
      session: false
    }
  }
}
